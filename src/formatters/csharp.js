function getTimestamp() {
  const now = new Date();
  return now.toISOString().replace('T', ' ').substring(0, 23);
}

module.exports = {
  trace: (message) => `${getTimestamp()} trce ${message}`,
  debug: (message) => `${getTimestamp()} dbug ${message}`,
  info: (message) => `${getTimestamp()} info ${message}`,
  warn: (message) => `${getTimestamp()} warn ${message}`,
  error: (message) => `${getTimestamp()} fail ${message}`,
  critical: (message) => `${getTimestamp()} crit ${message}`,
};