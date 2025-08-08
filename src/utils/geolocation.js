// src/utils/geolocation.js
// Lookup visitor IP and infer region (e.g., city or town)

// During development, always return "Foxborough"
const DEV_REGION = 'Foxborough';

export async function getRegion() {
  // Stub for development builds
  if (process.env.NODE_ENV === 'development') {
    return DEV_REGION;
  }

  try {
    const res = await fetch('https://ipapi.co/json/');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return data.city || 'Unknown';
  } catch (e) {
    console.warn('Geolocation error:', e);
    return 'Unknown';
  }
}
