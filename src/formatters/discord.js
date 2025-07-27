function getTimestamp() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const ms = String(now.getMilliseconds()).padStart(3, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds},${ms}`;
}

module.exports = {
  debug: (message) => `${getTimestamp()} DEBUG    discord.gateway ${message}`,
  info: (message) => `${getTimestamp()} INFO     discord.client ${message}`,
  warning: (message) => `${getTimestamp()} WARNING  discord.gateway ${message}`,
  error: (message) => `${getTimestamp()} ERROR    discord.client ${message}`,
  critical: (message) => `${getTimestamp()} CRITICAL discord.gateway ${message}`,
};
