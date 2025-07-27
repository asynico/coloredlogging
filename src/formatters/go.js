function getTimestamp() {
  return new Date().toISOString();
}

module.exports = {
  info: (message) => `${getTimestamp()} [INFO] ${message}`,
  success: (message) => `${getTimestamp()} [SUCCESS] ${message}`,
  warn: (message) => `${getTimestamp()} [WARN] ${message}`,
  error: (message) => `${getTimestamp()} [ERROR] ${message}`,
};
