/**
 * deviceDetector.js
 *
 * Advanced Client-Side Hardware & Device Model Fingerprinting
 * Detects specific device models (e.g. Apple iPhone 16 Pro Max, MacBook Pro M3,
 * Samsung Galaxy S24 Ultra, Google Pixel 9 Pro, etc.) using:
 *  1. User-Agent Client Hints (Modern Chromium High-Entropy Values)
 *  2. WebGL Hardware Acceleration Context (GPU Renderer & Metal/ANGLE strings)
 *  3. Physical Screen Matrix & Device Pixel Ratio (iOS Apple Silicon Resolution Fingerprints)
 *  4. Touch Points & Pointer Capabilities
 *  5. Hardware Concurrency & RAM Architecture
 */

// WebGL GPU Extraction
export function getGpuDetails() {
  if (typeof document === 'undefined') {
    return { vendor: 'N/A', renderer: 'N/A', cleanGpu: 'Headless / SSR' };
  }

  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      return { vendor: 'N/A', renderer: 'N/A', cleanGpu: 'Software / No WebGL' };
    }

    const dbg = gl.getExtension('WEBGL_debug_renderer_info');
    let vendor = gl.getParameter(gl.VENDOR) || 'Unknown';
    let renderer = gl.getParameter(gl.RENDERER) || 'Unknown';

    if (dbg) {
      vendor = gl.getParameter(dbg.UNMASKED_VENDOR_WEBGL) || vendor;
      renderer = gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) || renderer;
    }

    // Clean common wrappers (e.g. ANGLE (NVIDIA, NVIDIA GeForce RTX ..., D3D11))
    let cleanGpu = renderer;
    const angleMatch = renderer.match(/ANGLE\s*\([^,]+,\s*([^,]+)/i);
    if (angleMatch && angleMatch[1]) {
      cleanGpu = angleMatch[1].trim();
    } else if (renderer.includes('Direct3D') || renderer.includes('vs_')) {
      cleanGpu = renderer.replace(/\s*\(.*?\)/g, '').trim();
    }

    return { vendor, renderer, cleanGpu };
  } catch (_) {
    return { vendor: 'N/A', renderer: 'N/A', cleanGpu: 'Unknown GPU' };
  }
}

// Well-Known Android Model Code Dictionary
const ANDROID_MODEL_MAP = {
  // Samsung Galaxy S-Series
  'SM-S928': 'Samsung Galaxy S24 Ultra',
  'SM-S926': 'Samsung Galaxy S24+',
  'SM-S921': 'Samsung Galaxy S24',
  'SM-S918': 'Samsung Galaxy S23 Ultra',
  'SM-S916': 'Samsung Galaxy S23+',
  'SM-S911': 'Samsung Galaxy S23',
  'SM-S908': 'Samsung Galaxy S22 Ultra',
  'SM-S906': 'Samsung Galaxy S22+',
  'SM-S901': 'Samsung Galaxy S22',
  'SM-G998': 'Samsung Galaxy S21 Ultra',
  'SM-G996': 'Samsung Galaxy S21+',
  'SM-G991': 'Samsung Galaxy S21',
  'SM-G988': 'Samsung Galaxy S20 Ultra',
  'SM-G981': 'Samsung Galaxy S20',
  'SM-N986': 'Samsung Galaxy Note 20 Ultra',
  // Samsung Galaxy Z Fold & Flip
  'SM-F956': 'Samsung Galaxy Z Fold 6',
  'SM-F946': 'Samsung Galaxy Z Fold 5',
  'SM-F936': 'Samsung Galaxy Z Fold 4',
  'SM-F741': 'Samsung Galaxy Z Flip 6',
  'SM-F731': 'Samsung Galaxy Z Flip 5',
  'SM-F721': 'Samsung Galaxy Z Flip 4',
  // Samsung Galaxy A-Series & Tabs
  'SM-A556': 'Samsung Galaxy A55 5G',
  'SM-A546': 'Samsung Galaxy A54 5G',
  'SM-A356': 'Samsung Galaxy A35 5G',
  'SM-A346': 'Samsung Galaxy A34 5G',
  'SM-A156': 'Samsung Galaxy A15 5G',
  'SM-X910': 'Samsung Galaxy Tab S9 Ultra',
  'SM-X810': 'Samsung Galaxy Tab S9+',
  'SM-X710': 'Samsung Galaxy Tab S9',

  // Google Pixel Series
  'Pixel 9 Pro XL': 'Google Pixel 9 Pro XL',
  'Pixel 9 Pro Fold': 'Google Pixel 9 Pro Fold',
  'Pixel 9 Pro': 'Google Pixel 9 Pro',
  'Pixel 9': 'Google Pixel 9',
  'Pixel 8 Pro': 'Google Pixel 8 Pro',
  'Pixel 8a': 'Google Pixel 8a',
  'Pixel 8': 'Google Pixel 8',
  'Pixel 7 Pro': 'Google Pixel 7 Pro',
  'Pixel 7a': 'Google Pixel 7a',
  'Pixel 7': 'Google Pixel 7',
  'Pixel 6 Pro': 'Google Pixel 6 Pro',
  'Pixel 6a': 'Google Pixel 6a',
  'Pixel 6': 'Google Pixel 6',
  'Pixel Fold': 'Google Pixel Fold',

  // OnePlus Series
  'CPH2581': 'OnePlus 12',
  'CPH2583': 'OnePlus 12',
  'PJD110': 'OnePlus 12',
  'CPH2609': 'OnePlus 12R',
  'CPH2611': 'OnePlus 12R',
  'CPH2449': 'OnePlus 11',
  'CPH2447': 'OnePlus 11',
  'CPH2493': 'OnePlus Nord 3',
  'CPH2513': 'OnePlus Nord CE 3',
  'NE2211': 'OnePlus 10 Pro',
  'NE2213': 'OnePlus 10 Pro',
  'CPH2413': 'OnePlus 10T',
  'LE2121': 'OnePlus 9 Pro',
  'LE2111': 'OnePlus 9',
  'IN2021': 'OnePlus 8 Pro',
  'IN2011': 'OnePlus 8',
  'HD1901': 'OnePlus 7T',
  'GM1911': 'OnePlus 7 Pro',
  'CPH2499': 'OnePlus Open (Foldable)',

  // Xiaomi / Redmi / POCO
  '24030PN60G': 'Xiaomi 14 Ultra',
  '23127PN0CC': 'Xiaomi 14',
  '23127PN0CG': 'Xiaomi 14',
  '2210132G': 'Xiaomi 13 Pro',
  '2211133G': 'Xiaomi 13',
  '23049PCD8G': 'POCO F5',
  '24069PC21G': 'POCO F6',
  '2311DRK48G': 'POCO X6 Pro',

  // Nothing
  'AIN065': 'Nothing Phone (2)',
  'A065': 'Nothing Phone (2)',
  'A142': 'Nothing Phone (2a)',
  'A063': 'Nothing Phone (1)'
};

/**
 * Identify exact iPhone model using Screen Matrix + Device Pixel Ratio + WebGL GPU.
 */
function resolveIphoneModel(w, h, dpr, gpuRenderer) {
  const minDim = Math.min(w, h);
  const maxDim = Math.max(w, h);
  const hasA18 = /A18/i.test(gpuRenderer);
  const hasA17 = /A17/i.test(gpuRenderer);
  const hasA16 = /A16/i.test(gpuRenderer);

  // iPhone 16 Pro Max (440 x 956 @ 3x)
  if (minDim === 440 && maxDim === 956) {
    return 'Apple iPhone 16 Pro Max';
  }

  // iPhone 16 Pro (402 x 874 @ 3x)
  if (minDim === 402 && maxDim === 874) {
    return 'Apple iPhone 16 Pro';
  }

  // iPhone 16 Plus / 15 Pro Max / 15 Plus / 14 Pro Max (430 x 932 @ 3x)
  if (minDim === 430 && maxDim === 932) {
    if (hasA18) return 'Apple iPhone 16 Plus';
    if (hasA17) return 'Apple iPhone 15 Pro Max';
    if (hasA16) return 'Apple iPhone 15 Plus / 14 Pro Max';
    return 'Apple iPhone 16 Plus / 15 Pro Max';
  }

  // iPhone 16 / 15 Pro / 15 / 14 Pro (393 x 852 @ 3x)
  if (minDim === 393 && maxDim === 852) {
    if (hasA18) return 'Apple iPhone 16';
    if (hasA17) return 'Apple iPhone 15 Pro';
    if (hasA16) return 'Apple iPhone 15 / 14 Pro';
    return 'Apple iPhone 16 / 15 Pro';
  }

  // iPhone 14 Plus / 13 Pro Max / 12 Pro Max (428 x 926 @ 3x)
  if (minDim === 428 && maxDim === 926) {
    return 'Apple iPhone 14 Plus / 13 Pro Max / 12 Pro Max';
  }

  // iPhone 14 / 13 / 13 Pro / 12 / 12 Pro (390 x 844 @ 3x)
  if (minDim === 390 && maxDim === 844) {
    return 'Apple iPhone 14 / 13 / 12 Series';
  }

  // iPhone 13 mini / 12 mini / 11 Pro / XS / X (375 x 812 @ 3x)
  if (minDim === 375 && maxDim === 812) {
    if (dpr >= 3) return 'Apple iPhone 13 mini / 12 mini / 11 Pro';
    return 'Apple iPhone X / XS';
  }

  // iPhone 11 Pro Max / XS Max (414 x 896 @ 3x)
  if (minDim === 414 && maxDim === 896 && dpr >= 3) {
    return 'Apple iPhone 11 Pro Max / XS Max';
  }

  // iPhone 11 / XR (414 x 896 @ 2x)
  if (minDim === 414 && maxDim === 896 && dpr < 3) {
    return 'Apple iPhone 11 / XR';
  }

  // iPhone 8 Plus / 7 Plus / 6s Plus (414 x 736 @ 3x)
  if (minDim === 414 && maxDim === 736) {
    return 'Apple iPhone 8 Plus / 7 Plus';
  }

  // iPhone SE 2nd/3rd Gen / 8 / 7 (375 x 667 @ 2x)
  if (minDim === 375 && maxDim === 667) {
    return 'Apple iPhone SE (2nd/3rd Gen) / 8';
  }

  // iPhone SE 1st Gen / 5s (320 x 568 @ 2x)
  if (minDim === 320 && maxDim === 568) {
    return 'Apple iPhone SE (1st Gen)';
  }

  return `Apple iPhone (${minDim}×${maxDim} @ ${dpr}x)`;
}

/**
 * Identify iPad models (includes modern iPadOS where UA says "Macintosh").
 */
function resolveIpadModel(w, h, dpr, gpuRenderer) {
  const minDim = Math.min(w, h);
  const maxDim = Math.max(w, h);

  let chip = '';
  if (/M4/i.test(gpuRenderer)) chip = ' (M4)';
  else if (/M2/i.test(gpuRenderer)) chip = ' (M2)';
  else if (/M1/i.test(gpuRenderer)) chip = ' (M1)';

  // 1024 x 1366 @ 2x (2048 x 2732 px)
  if (minDim === 1024 && maxDim === 1366) {
    return `Apple iPad Pro 12.9" / 13"${chip || ' (Pro Retina)'}`;
  }

  // 834 x 1194 or 834 x 1210 @ 2x
  if (minDim === 834 && (maxDim === 1194 || maxDim === 1210)) {
    return `Apple iPad Pro 11" / iPad Air 11"${chip}`;
  }

  // 820 x 1180 @ 2x
  if (minDim === 820 && maxDim === 1180) {
    return `Apple iPad Air (4th/5th Gen) / iPad 10th Gen (10.9")${chip}`;
  }

  // 834 x 1112 @ 2x
  if (minDim === 834 && maxDim === 1112) {
    return 'Apple iPad Pro 10.5" / iPad Air (3rd Gen)';
  }

  // 810 x 1080 @ 2x
  if (minDim === 810 && maxDim === 1080) {
    return 'Apple iPad 10.2" (7th/8th/9th Gen)';
  }

  // 744 x 1133 @ 2x
  if (minDim === 744 && maxDim === 1133) {
    return 'Apple iPad mini (6th/7th Gen)';
  }

  // 768 x 1024 @ 2x
  if (minDim === 768 && maxDim === 1024) {
    return 'Apple iPad 9.7" / iPad mini';
  }

  return `Apple iPad (${minDim}×${maxDim} @ ${dpr}x)${chip}`;
}

/**
 * Identify Apple Mac model (MacBook Pro, MacBook Air, iMac, Studio).
 */
function resolveMacModel(w, h, dpr, gpuRenderer) {
  const maxDim = Math.max(w, h);
  const minDim = Math.min(w, h);

  // 1. Detect Apple Silicon or Intel Chip
  let chipName = 'Apple Silicon';
  if (/M4\s*Max/i.test(gpuRenderer)) chipName = 'Apple Silicon M4 Max';
  else if (/M4\s*Pro/i.test(gpuRenderer)) chipName = 'Apple Silicon M4 Pro';
  else if (/M4/i.test(gpuRenderer)) chipName = 'Apple Silicon M4';
  else if (/M3\s*Max/i.test(gpuRenderer)) chipName = 'Apple Silicon M3 Max';
  else if (/M3\s*Pro/i.test(gpuRenderer)) chipName = 'Apple Silicon M3 Pro';
  else if (/M3/i.test(gpuRenderer)) chipName = 'Apple Silicon M3';
  else if (/M2\s*Ultra/i.test(gpuRenderer)) chipName = 'Apple Silicon M2 Ultra';
  else if (/M2\s*Max/i.test(gpuRenderer)) chipName = 'Apple Silicon M2 Max';
  else if (/M2\s*Pro/i.test(gpuRenderer)) chipName = 'Apple Silicon M2 Pro';
  else if (/M2/i.test(gpuRenderer)) chipName = 'Apple Silicon M2';
  else if (/M1\s*Ultra/i.test(gpuRenderer)) chipName = 'Apple Silicon M1 Ultra';
  else if (/M1\s*Max/i.test(gpuRenderer)) chipName = 'Apple Silicon M1 Max';
  else if (/M1\s*Pro/i.test(gpuRenderer)) chipName = 'Apple Silicon M1 Pro';
  else if (/M1/i.test(gpuRenderer)) chipName = 'Apple Silicon M1';
  else if (/Apple/i.test(gpuRenderer)) chipName = 'Apple Silicon (M-Series)';
  else if (/Intel/i.test(gpuRenderer)) chipName = 'Intel Core Mac';
  else if (/AMD|Radeon/i.test(gpuRenderer)) chipName = 'AMD Radeon Mac';

  // 2. Identify Form Factor from Native Display Resolution Matrix
  let formFactor = 'Apple Mac Workstation';

  // MacBook Pro 16" (1728 x 1117 @ 2x -> 3456 x 2234)
  if (maxDim === 1728 && minDim === 1117) {
    formFactor = 'Apple MacBook Pro 16"';
  }
  // MacBook Pro 14" (1512 x 982 @ 2x -> 3024 x 1964)
  else if (maxDim === 1512 && minDim === 982) {
    formFactor = 'Apple MacBook Pro 14"';
  }
  // MacBook Air 15" (1470 x 956 @ 2x -> 2940 x 1912)
  else if (maxDim === 1470 && minDim === 956) {
    formFactor = 'Apple MacBook Air 15"';
  }
  // MacBook Air 13.6" / Pro 13" (1440 x 900 or 1440 x 932)
  else if (maxDim === 1440 && (minDim === 900 || minDim === 932)) {
    formFactor = 'Apple MacBook Air 13.6" / Pro 13"';
  }
  // Classic MacBook (1280 x 800)
  else if (maxDim === 1280 && minDim === 800) {
    formFactor = 'Apple MacBook Air / Pro 13"';
  }
  // iMac 24" 4.5K Retina (2240 x 1260 or 1792 x 1008 scaled)
  else if ((maxDim === 2240 && minDim === 1260) || (maxDim === 1792 && minDim === 1008)) {
    formFactor = 'Apple iMac 24" (4.5K Retina)';
  }
  // iMac 27" 5K / Studio Display (2560 x 1440)
  else if (maxDim === 2560 && minDim === 1440) {
    formFactor = 'Apple iMac 27" / Studio Display';
  }
  // General Desktop/Laptop fallback
  else if (dpr === 2) {
    formFactor = 'Apple MacBook / Retina Mac';
  }

  return `${formFactor} (${chipName})`;
}

/**
 * Main Asynchronous Device Detector
 * Returns a rich, human-readable hardware identity object.
 */
export async function detectDeviceHardware() {
  if (typeof window === 'undefined') {
    return {
      model: 'Server / Node Runtime',
      category: 'Server',
      chip: 'N/A',
      gpu: 'N/A',
      architecture: 'x86_64',
      screenMatrix: 'N/A',
      displayDpr: 1
    };
  }

  const ua = navigator.userAgent || '';
  const gpuInfo = getGpuDetails();
  const w = window.screen?.width || 0;
  const h = window.screen?.height || 0;
  const dpr = window.devicePixelRatio || 1;
  const touchPoints = navigator.maxTouchPoints || 0;
  const cpuCores = navigator.hardwareConcurrency ? `${navigator.hardwareConcurrency} Cores` : 'N/A';
  const ramEstimate = navigator.deviceMemory ? `~${navigator.deviceMemory}GB RAM` : '';

  let clientHintModel = '';
  let clientHintArch = '';
  let clientHintPlatform = '';
  let clientHintPlatformVersion = '';

  // 1. Query Chromium User-Agent Client Hints (Modern High-Entropy Detection)
  if (navigator.userAgentData?.getHighEntropyValues) {
    try {
      const hints = await navigator.userAgentData.getHighEntropyValues([
        'model',
        'platform',
        'platformVersion',
        'architecture',
        'bitness'
      ]);
      if (hints.model) clientHintModel = hints.model.trim();
      if (hints.architecture) clientHintArch = `${hints.architecture}${hints.bitness ? ` (${hints.bitness}-bit)` : ''}`;
      if (hints.platform) clientHintPlatform = hints.platform;
      if (hints.platformVersion) clientHintPlatformVersion = hints.platformVersion;
    } catch (_) {}
  }

  let finalModel = '';
  let category = 'Desktop';
  let chip = gpuInfo.cleanGpu;
  let arch = clientHintArch || (ua.includes('x86_64') || ua.includes('Win64') ? 'x86_64' : (ua.includes('arm') ? 'ARM64' : ''));

  // =========================================================================
  // A. iOS: Apple iPhone
  // =========================================================================
  if (/iPhone/i.test(ua) || (navigator.platform === 'iPhone')) {
    category = 'Smartphone';
    arch = 'ARM64 (Apple Silicon)';
    finalModel = resolveIphoneModel(w, h, dpr, gpuInfo.renderer);
    chip = gpuInfo.cleanGpu.includes('Apple') ? gpuInfo.cleanGpu : 'Apple Bionic / A-Series GPU';
  }
  // =========================================================================
  // B. iPadOS: Apple iPad (including iPadOS 13+ desktop-class UA spoofing)
  // =========================================================================
  else if (/iPad/i.test(ua) || (/Macintosh/i.test(ua) && touchPoints > 1)) {
    category = 'Tablet';
    arch = 'ARM64 (Apple Silicon)';
    finalModel = resolveIpadModel(w, h, dpr, gpuInfo.renderer);
    chip = gpuInfo.cleanGpu.includes('Apple') ? gpuInfo.cleanGpu : 'Apple Silicon GPU';
  }
  // =========================================================================
  // C. macOS: Apple MacBook Pro / MacBook Air / iMac / Studio
  // =========================================================================
  else if (/Macintosh|Mac OS X/i.test(ua) && touchPoints <= 1) {
    category = 'Laptop / Workstation';
    arch = gpuInfo.renderer.includes('Apple') ? 'ARM64 (Apple Silicon)' : 'x86_64 (Intel)';
    finalModel = resolveMacModel(w, h, dpr, gpuInfo.renderer);
  }
  // =========================================================================
  // D. Android Devices: Samsung, Pixel, OnePlus, Xiaomi, etc.
  // =========================================================================
  else if (/Android/i.test(ua)) {
    category = touchPoints > 0 && Math.min(w, h) >= 600 ? 'Tablet' : 'Smartphone';
    arch = 'ARM64';

    // Extract raw model from Client Hints or Regex on UA
    let rawModel = clientHintModel;
    if (!rawModel) {
      const match = ua.match(/;\s*([^;)]+)\s*Build\//i) || ua.match(/Android[^;]+;\s*([^;)]+)/i);
      if (match && match[1]) {
        rawModel = match[1].trim();
      }
    }

    if (rawModel) {
      // Lookup in dictionary
      let matchedName = '';
      for (const [key, val] of Object.entries(ANDROID_MODEL_MAP)) {
        if (rawModel.toLowerCase().includes(key.toLowerCase()) || rawModel.startsWith(key)) {
          matchedName = val;
          break;
        }
      }

      if (matchedName) {
        finalModel = `${matchedName} (${rawModel})`;
      } else if (/Pixel/i.test(rawModel)) {
        finalModel = `Google ${rawModel}`;
      } else if (/SM-[A-Z0-9]+/i.test(rawModel)) {
        finalModel = `Samsung Galaxy (${rawModel})`;
      } else if (/CPH[0-9]+/i.test(rawModel)) {
        finalModel = `OnePlus / Oppo (${rawModel})`;
      } else if (/moto|motorola/i.test(rawModel)) {
        finalModel = `Motorola (${rawModel})`;
      } else {
        finalModel = `Android Device (${rawModel})`;
      }
    } else {
      finalModel = `Android ${category} (${gpuInfo.cleanGpu})`;
    }
  }
  // =========================================================================
  // E. Windows Devices: PC, Workstation, Surface, Copilot+ PC
  // =========================================================================
  else if (/Windows/i.test(ua)) {
    const isWin11 = parseInt(clientHintPlatformVersion?.split('.')[0] || '0', 10) >= 13 || /Windows NT 10/i.test(ua);
    const winVer = isWin11 ? 'Windows 11' : 'Windows 10';

    if (touchPoints > 0) {
      category = '2-in-1 / Touch Laptop';
      finalModel = `Surface / Windows Touch PC (${winVer})`;
    } else if (gpuInfo.cleanGpu.includes('NVIDIA') || gpuInfo.cleanGpu.includes('GeForce')) {
      category = 'Workstation / Gaming PC';
      finalModel = `Windows PC Workstation (${gpuInfo.cleanGpu})`;
    } else if (gpuInfo.cleanGpu.includes('Radeon') || gpuInfo.cleanGpu.includes('AMD')) {
      category = 'Workstation / PC';
      finalModel = `Windows PC (${gpuInfo.cleanGpu})`;
    } else if (gpuInfo.cleanGpu.includes('Intel')) {
      category = 'Laptop / Desktop';
      finalModel = `Windows PC (${gpuInfo.cleanGpu})`;
    } else {
      category = 'Desktop / PC';
      finalModel = `${winVer} PC (${gpuInfo.cleanGpu})`;
    }

    if (clientHintArch.toLowerCase().includes('arm')) {
      arch = 'ARM64 (Snapdragon X / Copilot+ PC)';
      finalModel = `Windows Copilot+ PC (${finalModel})`;
    } else {
      arch = 'x86_64';
    }
  }
  // =========================================================================
  // F. ChromeOS & Linux
  // =========================================================================
  else if (/CrOS/i.test(ua)) {
    category = 'Chromebook';
    finalModel = `Google Chromebook (${gpuInfo.cleanGpu})`;
  } else if (/Linux/i.test(ua)) {
    category = 'Linux Workstation';
    finalModel = `Linux Workstation (${gpuInfo.cleanGpu})`;
  } else {
    finalModel = `Generic Workstation (${gpuInfo.cleanGpu})`;
  }

  const screenMatrix = `${w}×${h} @ ${dpr}x (${Math.round(w * dpr)}×${Math.round(h * dpr)} px)`;

  return {
    model: finalModel,
    category,
    chip,
    gpu: gpuInfo.cleanGpu,
    rawGpuRenderer: gpuInfo.renderer,
    architecture: arch || 'Standard',
    screenMatrix,
    displayDpr: dpr,
    cpuCores,
    ramEstimate
  };
}
