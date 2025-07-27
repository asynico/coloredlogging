function getTimestamp() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

module.exports = {
  emergency: (message) => `[${getTimestamp()}] EMERGENCY: ${message}`,
  alert: (message) => `[${getTimestamp()}] ALERT: ${message}`,
  critical: (message) => `[${getTimestamp()}] CRITICAL: ${message}`,
  error: (message) => `[${getTimestamp()}] ERROR: ${message}`,
  warning: (message) => `[${getTimestamp()}] WARNING: ${message}`,
  notice: (message) => `[${getTimestamp()}] NOTICE: ${message}`,
  info: (message) => `[${getTimestamp()}] INFO: ${message}`,
  debug: (message) => `[${getTimestamp()}] DEBUG: ${message}`,
};
