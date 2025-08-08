// src/utils/privacy.js

/**
 * anonymizeIP
 * Masks last octet of an IPv4 or IPv6 address
 */
export function anonymizeIP(ip) {
  if (ip.includes('.')) {
    return ip.split('.').map((part, i) => i === 3 ? '0' : part).join('.');
  }
  // basic IPv6 mask
  return ip.split(':').map((part, i) => i >= 4 ? '0000' : part).join(':');
}

/**
 * purgeOldData
 * Clears stored tracking and personal data older than retention period
 */
export function purgeOldData() {
  // TODO: implement data retention logic, e.g. remove old localStorage entries
  console.log('Purging old data...');
}
