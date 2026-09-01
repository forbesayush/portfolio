// Advanced Visitor Intelligence & Telemetry Tracker (100% Client-Side Safe, Zero Secret Exposure)

const env = (import.meta as unknown as { env: Record<string, string> }).env || {};
const BACKEND_URL = env.VITE_BACKEND_URL || '';


export interface VisitorIntelligence {
  // Geolocation & Network
  ip: string;
  city: string;
  region: string;
  country: string;
  postal: string;
  latitude: number | string;
  longitude: number | string;
  coordinates: string;
  mapsUrl: string;
  isp: string;
  org: string;
  asn: string;
  isVpn: boolean;
  vpnProvider: string;
  webRtcIp: string;

  // Traffic & Attribution
  trafficSource: string;
  referrer: string;
  utmAttribution: string;
  landingUrl: string;

  // Hardware & Environment
  deviceType: string;
  platform: string;
  cpuCores: string;
  deviceMemory: string;
  batteryStatus: string;
  screenRes: string;
  dpr: string;
  activeViewport: string;
  inputMode: string;
  themePreference: string;

  // Network & Browser Integrity
  connectionInfo: string;
  adBlockStatus: string;
  languages: string;
  pageLoadSpeed: string;
  userAgent: string;

  // Temporal Metrics
  visitorLocalTime: string;
  indiaTime: string;
  visitorCount: number | string;
  timestamp: string;
}

// 1. WebRTC Real IP Discovery with STUN Round-Trip
const getWebRtcIp = async (): Promise<string> => {
  if (typeof window === 'undefined') return 'N/A';
  return new Promise((resolve) => {
    let resolved = false;
    const timeout = setTimeout(() => {
      if (!resolved) {
        resolved = true;
        resolve('Timeout / No leak');
      }
    }, 1500);

    try {
      const RTCPeerConnection =
        window.RTCPeerConnection ||
        (window as unknown as { webkitRTCPeerConnection: typeof window.RTCPeerConnection }).webkitRTCPeerConnection ||
        (window as unknown as { mozRTCPeerConnection: typeof window.RTCPeerConnection }).mozRTCPeerConnection;

      if (!RTCPeerConnection) {
        clearTimeout(timeout);
        return resolve('Not Supported');
      }

      const pc = new RTCPeerConnection({
        iceServers: [
          { urls: 'stun:stun.l.google.com:19302' },
          { urls: 'stun:stun1.l.google.com:19302' },
          { urls: 'stun:stun.cloudflare.com:3478' },
        ],
      });

      pc.createDataChannel('');
      pc.createOffer()
        .then((offer) => pc.setLocalDescription(offer))
        .catch(() => {});

      pc.onicecandidate = (event) => {
        if (!event || !event.candidate || !event.candidate.candidate) {
          if (!resolved) {
            resolved = true;
            clearTimeout(timeout);
            try { pc.close(); } catch { /* ignore */ }
            resolve('Protected / No leak');
          }
          return;
        }

        const candidateStr = event.candidate.candidate;
        // Search for IPv4 or IPv6 srflx candidates
        const match = candidateStr.match(/([0-9]{1,3}(\.[0-9]{1,3}){3})/);
        if (match && match[1] && !match[1].startsWith('192.168.') && !match[1].startsWith('10.') && !match[1].startsWith('172.16.')) {
          if (!resolved) {
            resolved = true;
            clearTimeout(timeout);
            try { pc.close(); } catch { /* ignore */ }
            resolve(match[1]);
          }
        }
      };
    } catch {
      clearTimeout(timeout);
      resolve('Timeout / No leak');
    }
  });
};

// 2. AdBlocker Probe
const checkAdBlocker = async (): Promise<string> => {
  if (typeof document === 'undefined') return 'N/A';
  try {
    const bait = document.createElement('div');
    bait.className = 'adsbox ad-placement doubleclick-ad-unit carbon-ads';
    bait.innerHTML = '&nbsp;';
    bait.style.position = 'absolute';
    bait.style.left = '-9999px';
    bait.style.top = '-9999px';
    bait.style.height = '10px';
    bait.style.width = '10px';
    document.body.appendChild(bait);

    await new Promise((r) => setTimeout(r, 80));
    const isBlocked =
      bait.offsetParent === null ||
      bait.offsetHeight === 0 ||
      bait.offsetWidth === 0 ||
      window.getComputedStyle(bait).display === 'none' ||
      window.getComputedStyle(bait).visibility === 'hidden';

    bait.remove();
    return isBlocked ? '🛡️ AdBlock Detected' : 'Clean Browser (No AdBlock)';
  } catch {
    return 'Clean Browser (No AdBlock)';
  }
};

// 3. Battery Intelligence
const getBatteryInfo = async (): Promise<string> => {
  if (typeof navigator === 'undefined') return 'N/A';
  try {
    const nav = navigator as unknown as { getBattery?: () => Promise<{ level: number; charging: boolean }> };
    if (typeof nav.getBattery === 'function') {
      const battery = await nav.getBattery();
      const level = Math.round(battery.level * 100);
      const charging = battery.charging ? '⚡ Charging' : '🔋 On Battery';
      return `${level}% (${charging})`;
    }
  } catch {
    // Battery API restricted
  }
  return 'N/A (Desktop/Restricted)';
};

// 4. Traffic & Attribution Source Classifier
const getAttribution = () => {
  if (typeof window === 'undefined') {
    return {
      trafficSource: 'Direct / Bookmark 🔖',
      referrerUrl: 'Direct Entry',
      utmAttribution: 'None',
      landingUrl: 'https://ayushchatterjee.me/',
    };
  }

  const searchParams = new URLSearchParams(window.location.search);
  const utms: string[] = [];
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach((param) => {
    const val = searchParams.get(param);
    if (val) utms.push(`${param.replace('utm_', '')}: ${val}`);
  });

  const utmAttribution = utms.length > 0 ? utms.join(' | ') : 'None';
  const referrer = document.referrer;
  let trafficSource = 'Direct / Bookmark 🔖';

  if (referrer) {
    const refLower = referrer.toLowerCase();
    if (refLower.includes('google.')) trafficSource = 'Google Search 🔍';
    else if (refLower.includes('linkedin.')) trafficSource = 'LinkedIn 💼';
    else if (refLower.includes('github.')) trafficSource = 'GitHub 🐙';
    else if (refLower.includes('twitter.') || refLower.includes('t.co') || refLower.includes('x.com')) trafficSource = 'Twitter / X 🐦';
    else if (refLower.includes('instagram.')) trafficSource = 'Instagram 📷';
    else if (refLower.includes('facebook.')) trafficSource = 'Facebook 👥';
    else if (refLower.includes('reddit.')) trafficSource = 'Reddit 🤖';
    else if (refLower.includes('t.me') || refLower.includes('telegram')) trafficSource = 'Telegram Link ✈️';
    else {
      try {
        const host = new URL(referrer).hostname;
        trafficSource = `Referral (${host}) 🔗`;
      } catch {
        trafficSource = 'Referral Link 🔗';
      }
    }
  } else if (searchParams.get('utm_source')) {
    trafficSource = `Campaign: ${searchParams.get('utm_source')} 🎯`;
  }

  return {
    trafficSource,
    referrerUrl: referrer ? referrer : 'Direct Entry',
    utmAttribution,
    landingUrl: window.location.href,
  };
};

// 5. Multi-Provider Resilient GeoIP Lookup
const fetchGeoData = async () => {
  // Provider 1: ipwho.is (CORS friendly, complete payload)
  try {
    const res = await fetch('https://ipwho.is/', { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data && data.success !== false) {
        const lat = data.latitude || '';
        const lon = data.longitude || '';
        const hasCoords = lat !== '' && lon !== '';
        const isVpn = Boolean(data.security?.vpn || data.security?.proxy || data.security?.tor || data.security?.hosting);
        const vpnProvider = data.security?.service || (data.security?.hosting ? 'Datacenter / Hosting' : 'N/A');

        return {
          ip: data.ip || 'Unknown',
          city: data.city || 'N/A',
          region: data.region || 'N/A',
          country: data.country || 'N/A',
          postal: data.postal || 'N/A',
          latitude: lat,
          longitude: lon,
          coordinates: hasCoords ? `${lat}, ${lon}` : 'N/A',
          mapsUrl: hasCoords ? `https://maps.google.com/?q=${lat},${lon}` : '',
          isp: data.connection?.isp || data.connection?.org || 'N/A',
          org: data.connection?.org || data.connection?.isp || 'N/A',
          asn: data.connection?.asn ? `AS${data.connection.asn}` : 'N/A',
          isVpn,
          vpnProvider,
        };
      }
    }
  } catch (e) {
    console.warn('Tier 1 GeoIP Notice:', e);
  }

  // Provider 2: freeipapi.com (CORS enabled backup)
  try {
    const res = await fetch('https://freeipapi.com/api/json', { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data && data.ipAddress) {
        const lat = data.latitude || '';
        const lon = data.longitude || '';
        const hasCoords = lat !== '' && lon !== '';
        return {
          ip: data.ipAddress || 'Unknown',
          city: data.cityName || 'N/A',
          region: data.regionName || 'N/A',
          country: data.countryName || 'N/A',
          postal: data.zipCode || 'N/A',
          latitude: lat,
          longitude: lon,
          coordinates: hasCoords ? `${lat}, ${lon}` : 'N/A',
          mapsUrl: hasCoords ? `https://maps.google.com/?q=${lat},${lon}` : '',
          isp: 'N/A',
          org: 'N/A',
          asn: 'N/A',
          isVpn: false,
          vpnProvider: 'N/A',
        };
      }
    }
  } catch (e) {
    console.warn('Tier 2 GeoIP Notice:', e);
  }

  // Provider 3: ipapi.co
  try {
    const res = await fetch('https://ipapi.co/json/', { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data && data.ip) {
        const lat = data.latitude || '';
        const lon = data.longitude || '';
        const hasCoords = lat !== '' && lon !== '';
        return {
          ip: data.ip || 'Unknown',
          city: data.city || 'N/A',
          region: data.region || 'N/A',
          country: data.country_name || 'N/A',
          postal: data.postal || 'N/A',
          latitude: lat,
          longitude: lon,
          coordinates: hasCoords ? `${lat}, ${lon}` : 'N/A',
          mapsUrl: hasCoords ? `https://maps.google.com/?q=${lat},${lon}` : '',
          isp: data.org || 'N/A',
          org: data.org || 'N/A',
          asn: data.asn || 'N/A',
          isVpn: false,
          vpnProvider: 'N/A',
        };
      }
    }
  } catch (e) {
    console.warn('Tier 3 GeoIP Notice:', e);
  }

  // Provider 4: ipify IP only fallback
  try {
    const res = await fetch('https://api.ipify.org?format=json', { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data && data.ip) {
        return {
          ip: data.ip,
          city: 'N/A',
          region: 'N/A',
          country: 'N/A',
          postal: 'N/A',
          latitude: '',
          longitude: '',
          coordinates: 'N/A',
          mapsUrl: '',
          isp: 'N/A',
          org: 'N/A',
          asn: 'N/A',
          isVpn: false,
          vpnProvider: 'N/A',
        };
      }
    }
  } catch (e) {
    console.warn('Tier 4 IP Notice:', e);
  }

  return {
    ip: 'Unknown',
    city: 'N/A',
    region: 'N/A',
    country: 'N/A',
    postal: 'N/A',
    latitude: '',
    longitude: '',
    coordinates: 'N/A',
    mapsUrl: '',
    isp: 'N/A',
    org: 'N/A',
    asn: 'N/A',
    isVpn: false,
    vpnProvider: 'N/A',
  };
};

// 6. Device & Environment Profiler
const getDeviceInfo = () => {
  if (typeof window === 'undefined') {
    return {
      deviceType: '💻 Desktop / Laptop',
      platform: 'Server',
      cpuCores: 'N/A',
      deviceMemory: 'N/A',
      screenRes: '1920x1080',
      dpr: '1x',
      activeViewport: '1920x1080',
      inputMode: 'Mouse / Trackpad',
      themePreference: '🌙 Dark Mode',
      connectionInfo: 'Broadband / WiFi',
      languages: 'en-US, en',
      pageLoadSpeed: '1200 ms',
      userAgent: 'Unknown',
    };
  }

  const ua = navigator.userAgent;
  const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  const isTablet = /iPad|Tablet|PlayBook/i.test(ua) || (navigator.maxTouchPoints > 1 && /Macintosh/i.test(ua));

  let deviceType = '💻 Desktop / Laptop';
  if (isTablet) deviceType = '📟 Tablet';
  else if (isMobile) deviceType = '📱 Mobile Phone';

  let platform = 'Win32';
  if (/Macintosh|Mac OS X/i.test(ua)) {
    platform = 'MacIntel';
  } else if (/iPhone|iPad|iPod/i.test(ua)) {
    platform = 'iOS';
  } else if (/Android/i.test(ua)) {
    platform = 'Android';
  } else if (/Linux/i.test(ua)) {
    platform = 'Linux x86_64';
  } else if (navigator.platform) {
    platform = navigator.platform;
  }

  const cpuCores = navigator.hardwareConcurrency ? `${navigator.hardwareConcurrency} Cores` : 'N/A';
  const deviceMemory = (navigator as unknown as { deviceMemory?: number }).deviceMemory
    ? `~${(navigator as unknown as { deviceMemory: number }).deviceMemory} GB RAM`
    : 'N/A';

  const dpr = `${window.devicePixelRatio || 1}x`;
  const screenRes = `${window.screen.width}x${window.screen.height}`;
  const activeViewport = `${window.innerWidth}x${window.innerHeight}`;

  const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const inputMode = hasTouch ? 'Touchscreen (Finger/Stylus)' : 'No Touch (Mouse/Trackpad)';

  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const themePreference = prefersDark ? '🌙 Dark Mode' : '☀️ Light Mode';

  // Network info
  const conn = (navigator as unknown as {
    connection?: { effectiveType?: string; downlink?: number; rtt?: number };
  }).connection;
  let connectionInfo = 'High-Speed Broadband';
  if (conn) {
    const parts: string[] = [];
    if (conn.effectiveType) parts.push(conn.effectiveType.toUpperCase());
    if (conn.downlink) parts.push(`${conn.downlink} Mbps`);
    if (conn.rtt) parts.push(`RTT: ${conn.rtt}ms`);
    if (parts.length > 0) connectionInfo = parts.join(' • ');
  }

  const languages = navigator.languages ? navigator.languages.join(', ') : navigator.language || 'en-US';

  // Load speed
  let pageLoadSpeed = 'Fast (<1s)';
  try {
    const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
    if (navEntries.length > 0 && navEntries[0].duration) {
      pageLoadSpeed = `${Math.round(navEntries[0].duration)} ms`;
    } else if (performance.timing) {
      const dur = performance.timing.loadEventEnd - performance.timing.navigationStart;
      if (dur > 0) pageLoadSpeed = `${dur} ms`;
    }
  } catch {
    // Navigation timing not ready
  }

  return {
    deviceType,
    platform,
    cpuCores,
    deviceMemory,
    screenRes,
    dpr,
    activeViewport,
    inputMode,
    themePreference,
    connectionInfo,
    languages,
    pageLoadSpeed,
    userAgent: ua,
  };
};

// 7. Visitor Count Incrementor
const getVisitorCounter = (): number => {
  if (typeof localStorage === 'undefined') return 1;
  try {
    const current = parseInt(localStorage.getItem('ayush_portfolio_visitors') || '142', 10);
    const updated = current + 1;
    localStorage.setItem('ayush_portfolio_visitors', updated.toString());
    return updated;
  } catch {
    return 142;
  }
};

// 8. Main Function to Gather Complete Intelligence
export const getVisitorData = async (): Promise<VisitorIntelligence> => {
  const [geo, webRtcIp, adBlockStatus, batteryStatus] = await Promise.all([
    fetchGeoData(),
    getWebRtcIp(),
    checkAdBlocker(),
    getBatteryInfo(),
  ]);

  const device = getDeviceInfo();
  const attribution = getAttribution();
  const visitorCount = getVisitorCounter();

  const now = new Date();
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  const visitorLocalTime = `${now.toLocaleTimeString('en-US', { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })} (${timeZone})`;
  const indiaTime = now.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  return {
    // Geo
    ip: geo.ip,
    city: geo.city,
    region: geo.region,
    country: geo.country,
    postal: geo.postal,
    latitude: geo.latitude,
    longitude: geo.longitude,
    coordinates: geo.coordinates,
    mapsUrl: geo.mapsUrl,
    isp: geo.isp,
    org: geo.org,
    asn: geo.asn,
    isVpn: geo.isVpn,
    vpnProvider: geo.vpnProvider,
    webRtcIp,

    // Attribution
    trafficSource: attribution.trafficSource,
    referrer: attribution.referrerUrl,
    utmAttribution: attribution.utmAttribution,
    landingUrl: attribution.landingUrl,

    // Device
    deviceType: device.deviceType,
    platform: device.platform,
    cpuCores: device.cpuCores,
    deviceMemory: device.deviceMemory,
    batteryStatus,
    screenRes: device.screenRes,
    dpr: device.dpr,
    activeViewport: device.activeViewport,
    inputMode: device.inputMode,
    themePreference: device.themePreference,

    // Network & Integrity
    connectionInfo: device.connectionInfo,
    adBlockStatus,
    languages: device.languages,
    pageLoadSpeed: device.pageLoadSpeed,
    userAgent: device.userAgent,

    // Temporal
    visitorLocalTime,
    indiaTime,
    visitorCount,
    timestamp: indiaTime,
  };
};

// 8.5 Enterprise & Big Brand Intelligence Classifier
export interface EnterpriseDetection {
  isEnterprise: boolean;
  name: string;
  category: string;
  network: string;
}

export const detectEnterpriseBrand = (
  isp: string = '',
  org: string = '',
  asn: string = ''
): EnterpriseDetection => {
  const combined = `${isp} ${org} ${asn}`.toLowerCase();

  const brands: Array<{ match: string[]; name: string; category: string; network: string }> = [
    // Big Tech & Cloud
    { match: ['microsoft', 'azure', 'msft'], name: 'Microsoft', category: '🚀 Big Tech / Enterprise Cloud', network: 'Microsoft Corporation' },
    { match: ['google', 'alphabet', 'youtube'], name: 'Google', category: '🌐 Big Tech / Search & AI', network: 'Google LLC' },
    { match: ['apple'], name: 'Apple', category: '🍎 Big Tech / Consumer Hardware & OS', network: 'Apple Inc.' },
    { match: ['amazon', 'aws'], name: 'Amazon / AWS', category: '📦 Big Tech / Cloud Infrastructure', network: 'Amazon.com / AWS' },
    { match: ['meta', 'facebook', 'instagram', 'whatsapp'], name: 'Meta', category: '👥 Big Tech / Social Platforms', network: 'Meta Platforms, Inc.' },
    { match: ['netflix'], name: 'Netflix', category: '🎬 Entertainment & Streaming Tech', network: 'Netflix, Inc.' },
    { match: ['nvidia'], name: 'Nvidia', category: '⚡ AI Compute & GPU Architecture', network: 'Nvidia Corporation' },
    { match: ['cloudflare'], name: 'Cloudflare', category: '☁️ Edge Infrastructure & Security Cloud', network: 'Cloudflare, Inc.' },
    { match: ['oracle'], name: 'Oracle', category: '🏛️ Enterprise Database & Cloud', network: 'Oracle Corporation' },
    { match: ['salesforce'], name: 'Salesforce', category: '☁️ Enterprise CRM & Cloud SaaS', network: 'Salesforce, Inc.' },
    { match: ['ibm', 'international business machines'], name: 'IBM', category: '🏛️ Enterprise Tech & Cognitive Systems', network: 'IBM Corporation' },
    { match: ['cisco'], name: 'Cisco', category: '🔌 Enterprise Networking & Cybersecurity', network: 'Cisco Systems, Inc.' },
    { match: ['intel'], name: 'Intel', category: '⚡ Semiconductor & Compute Systems', network: 'Intel Corporation' },
    { match: ['adobe'], name: 'Adobe', category: '🎨 Creative Cloud & Enterprise Software', network: 'Adobe Inc.' },
    { match: ['uber'], name: 'Uber', category: '🚗 Global Mobility & Tech Platform', network: 'Uber Technologies' },
    { match: ['airbnb'], name: 'Airbnb', category: '🏡 Global Travel & Marketplace Platform', network: 'Airbnb, Inc.' },
    { match: ['tesla'], name: 'Tesla', category: '⚡ EV, Clean Energy & Robotics', network: 'Tesla, Inc.' },
    { match: ['spacex', 'starlink'], name: 'SpaceX / Starlink', category: '🚀 Aerospace & Satellite Internet', network: 'Space Exploration Technologies' },

    // Strategy Consulting (MBB & Big 4)
    { match: ['mckinsey'], name: 'McKinsey & Company', category: '💼 Top Strategy Consulting (MBB)', network: 'McKinsey & Company' },
    { match: ['boston consulting', 'bcg'], name: 'Boston Consulting Group (BCG)', category: '💼 Top Strategy Consulting (MBB)', network: 'Boston Consulting Group' },
    { match: ['bain & company', 'bain.com'], name: 'Bain & Company', category: '💼 Top Strategy Consulting (MBB)', network: 'Bain & Company' },
    { match: ['deloitte'], name: 'Deloitte', category: '📊 Big 4 Advisory & Consulting', network: 'Deloitte Touche Tohmatsu' },
    { match: ['pricewaterhouse', 'pwc'], name: 'PricewaterhouseCoopers (PwC)', category: '📊 Big 4 Advisory & Strategy', network: 'PwC Global' },
    { match: ['ernst & young', 'ernst and young', 'ey global', 'ey.com'], name: 'Ernst & Young (EY)', category: '📊 Big 4 Advisory & Strategy', network: 'EY Global' },
    { match: ['kpmg'], name: 'KPMG', category: '📊 Big 4 Advisory & Financial Strategy', network: 'KPMG International' },
    { match: ['accenture'], name: 'Accenture', category: '💡 Global Tech & Strategy Consulting', network: 'Accenture PLC' },

    // Investment Banking & Asset Management
    { match: ['goldman', 'gs.com'], name: 'Goldman Sachs', category: '🏦 Tier 1 Global Investment Bank', network: 'Goldman Sachs Group' },
    { match: ['morgan stanley'], name: 'Morgan Stanley', category: '🏦 Tier 1 Global Investment Bank', network: 'Morgan Stanley' },
    { match: ['jpmorgan', 'jp morgan', 'chase'], name: 'JPMorgan Chase', category: '🏦 Global Investment Banking & Markets', network: 'JPMorgan Chase & Co.' },
    { match: ['blackrock'], name: 'BlackRock', category: '📈 Global Premier Asset Management', network: 'BlackRock, Inc.' },
    { match: ['barclays'], name: 'Barclays', category: '🏦 Global Investment Bank', network: 'Barclays PLC' },
    { match: ['hsbc'], name: 'HSBC', category: '🏦 Global Banking & Financial Markets', network: 'HSBC Holdings' },

    // Target Brands & Conglomerates
    { match: ['oneplus', 'bbk electronics', 'oppo', 'vivo'], name: 'OnePlus / BBK Electronics', category: '📱 Consumer Electronics & Smartphone OEM', network: 'BBK Electronics' },
    { match: ['innovist', 'bare anatomy', 'chemist at play'], name: 'Innovist', category: '💄 D2C Personal Care & Beauty Brand', network: 'Innovist D2C' },
    { match: ['d-dzire', 'dzire jewels'], name: 'D-Dzire Jewels', category: '💎 Lab-Grown Diamonds & Luxury Retail', network: 'D-Dzire Jewels' },
    { match: ['swiggy', 'bundl'], name: 'Swiggy', category: '🛵 Quick Commerce & Hyperlocal Delivery', network: 'Swiggy / Bundl Technologies' },
    { match: ['zomato', 'blinkit'], name: 'Zomato / Blinkit', category: '🛵 FoodTech & Quick Commerce', network: 'Zomato Media' },
    { match: ['flipkart', 'walmart'], name: 'Flipkart / Walmart', category: '🛍️ Global E-Commerce & Retail Giant', network: 'Flipkart Internet / Walmart' },
    { match: ['reliance', 'jio'], name: 'Reliance Industries / Jio', category: '📶 Telecom, Digital Services & Retail Conglomerate', network: 'Reliance Jio Infocomm' },
    { match: ['tata consultancy', 'tcs', 'tata communications', 'tata sons'], name: 'Tata Group / TCS', category: '🏢 Global Conglomerate & IT Transformation', network: 'Tata Consultancy Services' },
    { match: ['sequoia', 'peak xv'], name: 'Sequoia Capital / Peak XV', category: '🚀 Tier 1 Global Venture Capital', network: 'Peak XV Partners' },
    { match: ['andreessen', 'a16z'], name: 'Andreessen Horowitz (a16z)', category: '🚀 Tier 1 Silicon Valley VC', network: 'AH Capital' },
    { match: ['y combinator', 'ycombinator'], name: 'Y Combinator', category: '🚀 Premier Startup Accelerator', network: 'Y Combinator LLC' },
  ];

  for (const b of brands) {
    if (b.match.some((m) => combined.includes(m))) {
      return {
        isEnterprise: true,
        name: b.name,
        category: b.category,
        network: org && org !== 'N/A' ? org : (isp && isp !== 'N/A' ? isp : b.network),
      };
    }
  }

  return {
    isEnterprise: false,
    name: '',
    category: '',
    network: '',
  };
};

// 9. Format Intelligence into Rich Telegram Alert
export const formatVisitorAlert = (v: VisitorIntelligence): string => {
  const enterprise = detectEnterpriseBrand(v.isp, v.org, v.asn);
  const enterpriseHeader = enterprise.isEnterprise
    ? `🏢🏢 *ENTERPRISE / BIG BRAND VISIT DETECTED!* 🏢🏢
🏛️ *Organization*: ${enterprise.name}
🏷️ *Category*: ${enterprise.category}
🏢 *Network / ASN*: ${enterprise.network}
━━━━━━━━━━━━━━━━━━━━━━━\n\n`
    : '';

  let vpnStatusText = '✅ NO (Clean Residential)';
  let vpnProviderText = v.vpnProvider && v.vpnProvider !== 'N/A' ? v.vpnProvider : 'N/A';

  if (v.isVpn) {
    vpnStatusText = '⚠️ YES (Proxy / Commercial VPN)';
    vpnProviderText = v.vpnProvider !== 'N/A' ? v.vpnProvider : (v.org || v.isp || 'Commercial Datacenter');
  } else if (enterprise.isEnterprise) {
    vpnStatusText = '✅ NO (Clean Residential)';
    vpnProviderText = 'N/A';
  }

  const locationText = `${v.city}, ${v.region}, ${v.country}`;
  const coordsLine = v.mapsUrl
    ? `• Coordinates: \`${v.coordinates}\` ([📍 Maps](${v.mapsUrl}))`
    : `• Coordinates: \`${v.coordinates}\``;

  let webRtcIpText = v.webRtcIp;
  if (!webRtcIpText || webRtcIpText === 'N/A' || webRtcIpText.includes('Timeout') || webRtcIpText.includes('Protected')) {
    webRtcIpText = 'No leak detected';
  }

  return `${enterpriseHeader}🚨 *ADVANCED VISITOR INTELLIGENCE ALERT* 🚨

📈 *Total Visitors*: #${v.visitorCount} Live Tracking
━━━━━━━━━━━━━━━━━━━━━━━
📍 *GEOLOCATION & NETWORK*
• Location: ${locationText}
• Postal Pincode: ${v.postal}
${coordsLine}
• IP Address: \`${v.ip}\`
• ISP / Org: ${v.isp !== 'N/A' ? v.isp : v.org}
• VPN/Proxy: ${vpnStatusText}
• VPN Provider: ${vpnProviderText}
• WebRTC Real IP: ${webRtcIpText}

━━━━━━━━━━━━━━━━━━━━━━━
🧭 *TRAFFIC & CAMPAIGN ATTRIBUTION*
• Traffic Source: ${v.trafficSource}
• Referrer URL: ${v.referrer}
• UTM Attribution: ${v.utmAttribution}
• Landing Page: \`${v.landingUrl}\`

━━━━━━━━━━━━━━━━━━━━━━━
🖥 *HARDWARE & CLIENT ENVIRONMENT*
• Device Type: ${v.deviceType}
• Platform: ${v.platform}
• CPU Cores: ${v.cpuCores}
• Device Memory: ${v.deviceMemory}
• Battery Status: ${v.batteryStatus}
• Screen Resolution: ${v.screenRes} (${v.dpr} DPR)
• Active Viewport: ${v.activeViewport}
• Input Mode: ${v.inputMode}
• OS Theme Preference: ${v.themePreference}

━━━━━━━━━━━━━━━━━━━━━━━
📶 *NETWORK & BROWSER INTEGRITY*
• Connection: ${v.connectionInfo}
• AdBlocker Status: ${v.adBlockStatus}
• Languages: ${v.languages}
• Page Load Speed: ${v.pageLoadSpeed}

━━━━━━━━━━━━━━━━━━━━━━━
⏰ *TIME & TEMPORAL METRICS*
• Visitor Local Time: ${v.visitorLocalTime}
• India Time (IST): ${v.indiaTime}

📱 *User Agent*:
\`${v.userAgent}\``;
};

// 10. Send Tracking Telemetry to Secure Server Proxy
export const sendTelegramAlert = async (
  formattedMessage: string,
  rawPayload?: VisitorIntelligence
): Promise<boolean> => {
  try {
    const backendRes = await fetch(`${BACKEND_URL}/api/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: formattedMessage,
        payload: rawPayload,
      }),
    }).catch(() => null);

    if (backendRes && backendRes.ok) {
      console.log('✅ Visitor intelligence securely dispatched via Backend server.');
      return true;
    }
  } catch (err) {
    console.warn('Backend server dispatch notice:', err);
  }

  return false;
};

// 11. Automatic Visitor Session Trigger (With Anti-Flood Cooldown)
export const trackNewVisitor = async () => {
  if (typeof window === 'undefined') return;

  // Prevent multiple redundant alerts during the same browser tab session within 15 minutes
  const sessionKey = 'ayush_last_tracked_session';
  const lastTracked = sessionStorage.getItem(sessionKey);
  const now = Date.now();

  if (lastTracked && now - parseInt(lastTracked, 10) < 15 * 60 * 1000) {
    console.log('⚡ Active session already tracked. Suppressing duplicate alert.');
    return;
  }

  sessionStorage.setItem(sessionKey, now.toString());

  try {
    const intelligence = await getVisitorData();
    const formatted = formatVisitorAlert(intelligence);
    await sendTelegramAlert(formatted, intelligence);
  } catch (err) {
    console.error('Visitor tracking execution error:', err);
  }
};

// 12. Contact Form Tracker (Dispatches strictly through secure /api/contact proxy)
export const trackContactForm = async (
  name: string,
  email: string,
  userMessage: string,
  turnstileToken?: string,
  honeypot?: string
): Promise<boolean> => {
  try {
    const visitor = await getVisitorData();
    const res = await fetch(`${BACKEND_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        message: userMessage,
        turnstileToken,
        _gotcha: honeypot || '',
        payload: visitor,
      }),
    }).catch(() => null);

    if (res && res.ok) {
      return true;
    }
  } catch (err) {
    console.error('Contact form submission dispatch error:', err);
  }
  return false;
};

// 13. Specific Action / Button Click Tracker
export const trackUserAction = async (actionName: string, detail?: string) => {
  try {
    const visitor = await getVisitorData();
    await fetch(`${BACKEND_URL}/api/action`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        actionName,
        detail,
        payload: visitor,
      }),
    }).catch(() => null);
  } catch {
    // Non-blocking interaction tracking
  }
};

