'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SecurityWrapperProps {
  children: React.ReactNode;
}

export default function SecurityWrapper({ children }: SecurityWrapperProps) {
  const [isVpnBlocked, setIsVpnBlocked] = useState(false);
  const [isCheckingVpn, setIsCheckingVpn] = useState(true);

  useEffect(() => {
    // 1. Prevent context menu (right click)
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);

    // 2. Prevent common developer tools shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (
        e.key === 'F12' ||
        ((e.ctrlKey || e.metaKey) && e.shiftKey && (key === 'i' || key === 'j' || key === 'c')) ||
        ((e.ctrlKey || e.metaKey) && key === 'u')
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    // 3. Anti-Clickjacking / Framebusting
    if (typeof window !== 'undefined' && window.top !== window.self) {
      try {
        window.top!.location.href = window.self.location.href;
      } catch (err) {
        // Fallback if top frame prevents access
        console.error('Framebusting failed:', err);
      }
    }

    const fetchWithTimeout = async (url: string, options: RequestInit & { timeout?: number } = {}) => {
      const { timeout = 3500, ...fetchOpts } = options;
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);
      try {
        const response = await fetch(url, { ...fetchOpts, signal: controller.signal });
        clearTimeout(id);
        return response;
      } catch (e) {
        clearTimeout(id);
        throw e;
      }
    };

    const getWebRTCIP = async (externalIp: string): Promise<string> => {
      return new Promise((resolve) => {
        const ips = new Set<string>();
        const RTCPeerConnection =
          window.RTCPeerConnection ||
          (window as any).mozRTCPeerConnection ||
          (window as any).webkitRTCPeerConnection;
        
        if (!RTCPeerConnection) return resolve("Not Supported");

        const pc = new RTCPeerConnection({ iceServers: [{ urls: "stun:stun.l.google.com:19302" }] });
        pc.createDataChannel("");

        pc.onicecandidate = (e) => {
          if (!e.candidate) {
            pc.close();
            if (ips.size === 0) resolve("No leak detected");
            else resolve(Array.from(ips).join(", "));
            return;
          }
          const ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/;
          const match = ipRegex.exec(e.candidate.candidate);
          if (match && match[1] !== externalIp && !match[1].endsWith('.local')) {
            ips.add(match[1]);
          }
        };

        pc.createOffer()
          .then((offer) => pc.setLocalDescription(offer))
          .catch(() => resolve("Offer failed"));

        setTimeout(() => {
          pc.close();
          if (ips.size === 0) resolve("Timeout / No leak");
          else resolve(Array.from(ips).join(", "));
        }, 2500);
      });
    };

    const trackVisitor = async () => {
      try {
        // Fetch IP and Location Data
        const ipResponse = await fetchWithTimeout('https://ipapi.co/json/');
        if (!ipResponse.ok) throw new Error('ipapi.co failed');
        const data = await ipResponse.json();

        let isVPN = "Unknown";
        let vpnBrand = "N/A";

        // Advanced VPN/Proxy Check
        try {
          const vpnResponse = await fetchWithTimeout(`https://blackbox.ipinfo.app/lookup/${data.ip}`, {
            timeout: 2500,
          });
          if (vpnResponse.ok) {
            const vpnText = await vpnResponse.text();
            if (vpnText.trim() === 'Y') {
              isVPN = "⚠️ YES (Proxy/VPN)";
              setIsVpnBlocked(true);
              const orgName = (data.org || "").toLowerCase();
              if (orgName.includes("tefincom") || orgName.includes("nord")) vpnBrand = "NordVPN";
              else if (orgName.includes("expressvpn") || orgName.includes("express vpn")) vpnBrand = "ExpressVPN";
              else if (
                orgName.includes("kape") ||
                orgName.includes("cyberghost") ||
                orgName.includes("zenmate") ||
                orgName.includes("private internet access")
              )
                vpnBrand = "CyberGhost / PIA / ZenMate";
              else if (orgName.includes("surfshark")) vpnBrand = "Surfshark";
              else if (orgName.includes("proton")) vpnBrand = "ProtonVPN";
              else if (orgName.includes("mullvad")) vpnBrand = "Mullvad VPN";
              else if (
                orgName.includes("m247") ||
                orgName.includes("datacamp") ||
                orgName.includes("tzulo") ||
                orgName.includes("leaseweb") ||
                orgName.includes("quadranet")
              )
                vpnBrand = `Commercial VPN Host (${data.org})`;
              else if (
                orgName.includes("google") ||
                orgName.includes("amazon") ||
                orgName.includes("aws") ||
                orgName.includes("digitalocean") ||
                orgName.includes("ovh") ||
                orgName.includes("linode") ||
                orgName.includes("cloudflare") ||
                orgName.includes("akamai")
              )
                vpnBrand = `Cloud Proxy/VPN (${data.org})`;
              else vpnBrand = data.org || "Unknown Provider";
            } else {
              isVPN = "✅ NO";
            }
          }
        } catch (vpnErr) {
          console.error("VPN check failed:", vpnErr);
        }

        // WebRTC Real IP Leak Test
        let realIpStr = "Unknown";
        try {
          realIpStr = await getWebRTCIP(data.ip);
        } catch (webrtcErr) {
          console.error("WebRTC check failed:", webrtcErr);
        }

        // Gather Device Data
        const userAgent = navigator.userAgent;
        const platform = navigator.platform;
        const language = navigator.language;
        const screenRes = `${window.screen.width}x${window.screen.height}`;
        const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
        const deviceType = isMobile ? '📱 Mobile' : '🖥️ Desktop';

        // Detect Traffic Source
        let source = "Direct / Bookmark";
        const referrer = document.referrer.toLowerCase();
        const urlParams = new URLSearchParams(window.location.search);
        const isWhatsApp =
          referrer.includes("whatsapp") ||
          referrer.includes("wa.me") ||
          urlParams.get("utm_source") === "whatsapp" ||
          userAgent.toLowerCase().includes("whatsapp");

        if (isWhatsApp) {
          source = "WhatsApp 🟩";
        } else if (referrer) {
          if (referrer.includes("linkedin.com")) source = "LinkedIn 🔵";
          else if (referrer.includes("google.com")) source = "Google Search 🔍";
          else if (referrer.includes("twitter.com") || referrer.includes("t.co")) source = "Twitter/X 🐦";
          else source = document.referrer;
        }

        // Get Visitor Count
        let visitorCount = "1 (Live Tracking)";
        try {
          const timestamp = new Date().getTime();
          const countResponse = await fetch(`https://api.counterapi.dev/v1/forbesayush/portfolio/up?t=${timestamp}`);
          if (countResponse.ok) {
            const countData = await countResponse.json();
            if (countData && countData.count) {
              visitorCount = countData.count;
            }
          }
        } catch (countErr) {
          console.error("Counter API failed:", countErr);
        }

        // Format and send message
        const messageText = `
🔔 *New Portfolio Visitor!* 🔔

📈 *Total Visitors:* ${visitorCount}
----------------------------
${deviceType}
🔗 *Source:* ${source}
📍 *Location:* ${data.city || 'N/A'}, ${data.region || 'N/A'}, ${data.country_name || 'N/A'}
📮 *Pincode:* ${data.postal || 'N/A'}
🌐 *IP Address:* ${data.ip || 'N/A'}
🛡️ *VPN/Proxy:* ${isVPN}
🏷️ *VPN Brand:* ${vpnBrand}
🕵️ *Real IP (WebRTC):* ${realIpStr}
🏢 *ISP/Org:* ${data.org || 'N/A'}
💻 *Platform:* ${platform}
📏 *Screen:* ${screenRes}
🗣 *Language:* ${language}
📱 *User Agent:* ${userAgent}
        `;

        const BACKEND_URL = 'https://portfolio-backend-iug0.onrender.com';
        await fetch(`${BACKEND_URL}/api/track`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: messageText }),
        });

      } catch (err) {
        console.error("Error in visitor tracking:", err);
      } finally {
        // ALWAYS disable checking screen, even on complete script failure
        setIsCheckingVpn(false);
      }
    };

    trackVisitor();

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isCheckingVpn ? (
          <motion.div
            key="spinner"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#030303] flex items-center justify-center"
          >
            <div className="relative flex items-center justify-center">
              {/* Spinner */}
              <div className="w-16 h-16 border-2 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin" />
              {/* Pulse effect */}
              <div className="absolute w-8 h-8 rounded-full bg-cyan-500/10 animate-ping" />
            </div>
          </motion.div>
        ) : isVpnBlocked ? (
          <motion.div
            key="blocked"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 z-50 bg-[#030303] flex flex-col items-center justify-center px-6 text-center"
          >
            {/* Blueprint Grid Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-5" aria-hidden="true">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="blocked-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ef4444" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#blocked-grid)" />
              </svg>
            </div>

            <div className="relative z-10 max-w-xl p-8 rounded-3xl border border-red-500/20 bg-red-500/5 backdrop-blur-xl">
              <div className="w-16 h-16 bg-red-500/10 text-red-500 border border-red-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl">
                ⚠️
              </div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight mb-4 uppercase font-mono">
                Access Restricted
              </h1>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6">
                To maintain accurate visitor analytics and prevent automated scrapers, connections originated from 
                Commercial VPNs, Proxies, and Cloud Data Centers are restricted from viewing this portfolio.
              </p>
              <div className="inline-block text-xs font-mono text-zinc-500 px-4 py-2 border border-white/5 bg-white/[0.02] rounded-lg">
                Please disable your VPN and use a standard residential connection to continue.
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
