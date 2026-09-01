// Serverless Function: /api/geoip (Server-Side GeoIP Proxy - Zero Secret Exposure)

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || process.env.FRONTEND_URL || 'https://ayushchatterjee.me';
const ALLOWED_ORIGINS = [
  ALLOWED_ORIGIN.replace(/\/$/, ''),
  'https://www.ayushchatterjee.me',
  'https://ayushchatterjee.me',
  'http://localhost:5173',
  'http://localhost:3000',
  'http://localhost:5000',
];

export default async function handler(req, res) {
  const origin = req.headers.origin || '';
  const normalizedOrigin = origin.replace(/\/$/, '');

  if (origin && !ALLOWED_ORIGINS.includes(normalizedOrigin) && ALLOWED_ORIGIN !== '*') {
    return res.status(403).json({ error: 'CORS policy: Access denied from unauthorized origin' });
  }

  res.setHeader('Access-Control-Allow-Origin', origin || ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const clientIp = (req.query.ip || req.headers['x-forwarded-for']?.split(',')[0] || req.headers['x-real-ip'] || req.socket?.remoteAddress || '').replace(/^::ffff:/, '').trim();

  if (!clientIp || clientIp === '127.0.0.1' || clientIp === '::1' || clientIp.startsWith('192.168.')) {
    return res.status(400).json({ error: 'Valid public IP is required' });
  }

  try {
    const geoRes = await fetch(`https://ipwho.is/${clientIp}`);
    if (geoRes.ok) {
      const data = await geoRes.json();
      if (data && data.success !== false) {
        const lat = data.latitude || '';
        const lon = data.longitude || '';
        const hasCoords = lat !== '' && lon !== '';
        return res.status(200).json({
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
        });
      }
    }
  } catch (err) {
    console.warn('GeoIP proxy lookup notice:', err.message);
  }

  return res.status(502).json({ error: 'Failed to retrieve GeoIP data' });
}
