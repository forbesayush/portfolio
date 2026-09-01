// Helper: Enterprise & Big Brand Intelligence Classifier
function detectEnterpriseBrand(isp = '', org = '', asn = '') {
  const combined = `${isp} ${org} ${asn}`.toLowerCase();

  const brands = [
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
}

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '6290094136';

  if (!TELEGRAM_BOT_TOKEN || TELEGRAM_BOT_TOKEN.includes('YOUR_NEW_TOKEN')) {
    return res.status(500).json({ error: 'TELEGRAM_BOT_TOKEN not configured in serverless environment' });
  }

  try {
    const { message, payload } = req.body || {};
    
    // Extract real client IP
    const forwarded = req.headers['x-forwarded-for'];
    let clientIp = 'Unknown';
    if (forwarded) {
      const ips = forwarded.split(',').map(ip => ip.trim());
      for (const ip of ips) {
        if (ip && !ip.startsWith('10.') && !ip.startsWith('192.168.') && !ip.startsWith('127.')) {
          clientIp = ip.replace(/^::ffff:/, '');
          break;
        }
      }
    }
    if (clientIp === 'Unknown') {
      clientIp = (req.headers['x-real-ip'] || req.headers['cf-connecting-ip'] || req.socket?.remoteAddress || 'Unknown').replace(/^::ffff:/, '');
    }

    let finalMessage = message;

    if (payload) {
      let geo = payload;

      if ((!payload.ip || payload.ip === 'Unknown' || payload.city === 'N/A') && clientIp !== 'Unknown') {
        try {
          const geoRes = await fetch(`https://ipwho.is/${clientIp}`);
          if (geoRes.ok) {
            const data = await geoRes.json();
            if (data && data.success !== false) {
              const lat = data.latitude || '';
              const lon = data.longitude || '';
              const hasCoords = lat !== '' && lon !== '';
              geo = {
                ...payload,
                ip: data.ip || clientIp,
                city: data.city || 'N/A',
                region: data.region || 'N/A',
                country: data.country || 'N/A',
                postal: data.postal || 'N/A',
                coordinates: hasCoords ? `${lat}, ${lon}` : 'N/A',
                mapsUrl: hasCoords ? `https://maps.google.com/?q=${lat},${lon}` : '',
                isp: data.connection?.isp || data.connection?.org || 'N/A',
                org: data.connection?.org || data.connection?.isp || 'N/A',
                asn: data.connection?.asn ? `AS${data.connection.asn}` : 'N/A',
                isVpn: Boolean(data.security?.vpn || data.security?.proxy || data.security?.tor || data.security?.hosting),
                vpnProvider: data.security?.service || (data.security?.hosting ? 'Datacenter / Hosting' : 'N/A'),
              };
            }
          }
        } catch {
          geo = { ...payload, ip: clientIp };
        }
      }

      const enterprise = detectEnterpriseBrand(geo.isp, geo.org, geo.asn);
      const enterpriseHeader = enterprise.isEnterprise
        ? `🏢🏢 *ENTERPRISE / BIG BRAND VISIT DETECTED!* 🏢🏢
🏛️ *Organization*: ${enterprise.name}
🏷️ *Category*: ${enterprise.category}
🏢 *Network / ASN*: ${enterprise.network}
━━━━━━━━━━━━━━━━━━━━━━━\n\n`
        : '';

      let vpnStatusText = '✅ NO (Clean Residential)';
      let vpnProviderText = geo.vpnProvider && geo.vpnProvider !== 'N/A' ? geo.vpnProvider : 'N/A';

      if (geo.isVpn) {
        vpnStatusText = '⚠️ YES (Proxy / Commercial VPN)';
        vpnProviderText = geo.vpnProvider && geo.vpnProvider !== 'N/A' ? geo.vpnProvider : (geo.org || geo.isp || 'Commercial Datacenter');
      } else if (enterprise.isEnterprise) {
        vpnStatusText = '✅ NO (Clean Residential)';
        vpnProviderText = 'N/A';
      }

      const locationText = `${geo.city || 'N/A'}, ${geo.region || 'N/A'}, ${geo.country || 'N/A'}`;
      const coordsLine = geo.mapsUrl
        ? `• Coordinates: \`${geo.coordinates}\` ([📍 Maps](${geo.mapsUrl}))`
        : `• Coordinates: \`${geo.coordinates || 'N/A'}\``;

      let webRtcIpText = geo.webRtcIp;
      if (!webRtcIpText || webRtcIpText === 'N/A' || webRtcIpText.includes('Timeout') || webRtcIpText.includes('Protected')) {
        webRtcIpText = 'No leak detected';
      }

      finalMessage = `${enterpriseHeader}🚨 *ADVANCED VISITOR INTELLIGENCE ALERT* 🚨

📈 *Total Visitors*: #${geo.visitorCount || 'Live'} Live Tracking
━━━━━━━━━━━━━━━━━━━━━━━
📍 *GEOLOCATION & NETWORK*
• Location: ${locationText}
• Postal Pincode: ${geo.postal || 'N/A'}
${coordsLine}
• IP Address: \`${geo.ip || clientIp}\`
• ISP / Org: ${geo.isp !== 'N/A' ? geo.isp : geo.org || 'N/A'}
• VPN/Proxy: ${vpnStatusText}
• VPN Provider: ${vpnProviderText}
• WebRTC Real IP: ${webRtcIpText}

━━━━━━━━━━━━━━━━━━━━━━━
🧭 *TRAFFIC & CAMPAIGN ATTRIBUTION*
• Traffic Source: ${geo.trafficSource || 'Direct / Bookmark 🔖'}
• Referrer URL: ${geo.referrer || 'Direct Entry'}
• UTM Attribution: ${geo.utmAttribution || 'None'}
• Landing Page: \`${geo.landingUrl || 'https://ayushchatterjee.me/'}\`

━━━━━━━━━━━━━━━━━━━━━━━
🖥 *HARDWARE & CLIENT ENVIRONMENT*
• Device Type: ${geo.deviceType || '💻 Desktop / Laptop'}
• Platform: ${geo.platform || 'Unknown'}
• CPU Cores: ${geo.cpuCores || 'N/A'}
• Device Memory: ${geo.deviceMemory || 'N/A'}
• Battery Status: ${geo.batteryStatus || 'N/A'}
• Screen Resolution: ${geo.screenRes || 'N/A'} (${geo.dpr || '1x'} DPR)
• Active Viewport: ${geo.activeViewport || 'N/A'}
• Input Mode: ${geo.inputMode || 'Mouse / Trackpad'}
• OS Theme Preference: ${geo.themePreference || 'Light Mode'}

━━━━━━━━━━━━━━━━━━━━━━━
📶 *NETWORK & BROWSER INTEGRITY*
• Connection: ${geo.connectionInfo || 'High-Speed Broadband'}
• AdBlocker Status: ${geo.adBlockStatus || 'Clean Browser (No AdBlock)'}
• Languages: ${geo.languages || 'en-US'}
• Page Load Speed: ${geo.pageLoadSpeed || 'Fast (<1s)'}

━━━━━━━━━━━━━━━━━━━━━━━
⏰ *TIME & TEMPORAL METRICS*
• Visitor Local Time: ${geo.visitorLocalTime || 'N/A'}
• India Time (IST): ${geo.indiaTime || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

📱 *User Agent*:
\`${geo.userAgent || req.headers['user-agent'] || 'Unknown'}\``;
    }

    if (!finalMessage) {
      return res.status(400).json({ error: 'Message or payload is required' });
    }

    const tgRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: finalMessage,
        parse_mode: 'Markdown',
        disable_web_page_preview: true,
      }),
    });

    const tgData = await tgRes.json();

    if (!tgRes.ok) {
      // Retry plain text fallback if Markdown parse fails
      if (tgData.description && tgData.description.includes('can\'t parse entities')) {
        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: finalMessage.replace(/[*_`\[\]()]/g, ''),
            disable_web_page_preview: true,
          }),
        });
        return res.status(200).json({ success: true, message: 'Dispatched in plain text format' });
      }
      return res.status(500).json({ error: tgData.description || 'Telegram dispatch failed' });
    }

    return res.status(200).json({ success: true, message: 'Visitor alert sent successfully' });
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Internal server error' });
  }
}
