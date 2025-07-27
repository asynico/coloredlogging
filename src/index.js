const { toAnsi } = require('./utils/colors.js');
const defaultFormatter = require('./formatters/default');
const defaultTheme = require('./themes/default');
const pythonFormatter = require('./formatters/python');
const rustFormatter = require('./formatters/rust');
const csharpFormatter = require('./formatters/csharp');
const discordFormatter = require('./formatters/discord');
const swiftFormatter = require('./formatters/swift');
const rubyFormatter = require('./formatters/ruby');
const phpFormatter = require('./formatters/php');
const kotlinFormatter = require('./formatters/kotlin');

function createLogger({ formatter = defaultFormatter, theme = defaultTheme } = {}) {
  function log(level, message) {
    const formattedMessage = formatter[level](message);
    const color = theme[level] || theme.info; 
    console.log(toAnsi(color) + formattedMessage + '\x1b[0m');
  }

  const loggerMethods = {};
  Object.keys(formatter).forEach(level => {
    loggerMethods[level] = (message) => log(level, message);
  });

  return loggerMethods;
}

const logger = createLogger();

logger.python = createLogger({ formatter: pythonFormatter });
logger.rust = createLogger({ formatter: rustFormatter });
logger.csharp = createLogger({ formatter: csharpFormatter });
logger.discord = createLogger({ formatter: discordFormatter });
logger.swift = createLogger({ formatter: swiftFormatter });
logger.ruby = createLogger({ formatter: rubyFormatter });
logger.php = createLogger({ formatters: phpFormatter });
logger.kotlin = createLogger({ formatters: kotlinFormatter });

module.exports = logger;
module.exports.createLogger = createLogger;