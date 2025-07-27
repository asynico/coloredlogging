function getTimestamp() {
  const now = new Date();
  return now.toISOString().replace('T', ' ').substring(0, 23);
}

module.exports = {
  trace: (message) => `${getTimestamp()} 🔍 TRACE ${message}`,
  debug: (message) => `${getTimestamp()} 🐛 DEBUG ${message}`,
  info: (message) => `${getTimestamp()} ℹ️ INFO ${message}`,
  notice: (message) => `${getTimestamp()} 📝 NOTICE ${message}`,
  warning: (message) => `${getTimestamp()} ⚠️ WARNING ${message}`,
  error: (message) => `${getTimestamp()} ❌ ERROR ${message}`,
  critical: (message) => `${getTimestamp()} 🚨 CRITICAL ${message}`,
};
