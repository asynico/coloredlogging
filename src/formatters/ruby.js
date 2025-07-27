function getTimestamp() {
  const now = new Date();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[now.getMonth()];
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${month} ${day} ${hours}:${minutes}:${seconds}`;
}

module.exports = {
  debug: (message) => `D, [${getTimestamp()}] DEBUG -- : ${message}`,
  info: (message) => `I, [${getTimestamp()}] INFO -- : ${message}`,
  warn: (message) => `W, [${getTimestamp()}] WARN -- : ${message}`,
  error: (message) => `E, [${getTimestamp()}] ERROR -- : ${message}`,
  fatal: (message) => `F, [${getTimestamp()}] FATAL -- : ${message}`,
};
