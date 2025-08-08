// src/utils/returningVisitor.js
// Check/set a long-lived cookie to detect returning visitors
export function isReturningVisitor() {
  const key = 'washworks_returning';
  const hasCookie = document.cookie.split('; ').some(c => c.startsWith(key + '=true'));
  if (!hasCookie) {
    document.cookie = key + '=true; max-age=' + 60*60*24*365;
  }
  return hasCookie;
}
