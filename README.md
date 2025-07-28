# Colored Logging

[![npm version](https://badge.fury.io/js/@asynico%2Fcoloredlogging.svg)](https://badge.fury.io/js/@asynico%2Fcoloredlogging)

A simple, customizable Node.js module to add color and language-specific formatting to your console logs.

## Features

- 🎨 Colorful console output with customizable themes
- 🌐 Language-specific formatters (Python, Rust, C#, Discord.js, Kotlin, PHP, Ruby, Swift)
- ⚙️ Fully customizable loggers with your own themes and formatters
- 📝 Multiple log levels for different use cases
- ⏰ Automatic timestamp formatting

## Installation

```bash
npm install @asynico/coloredlogging
```

## Quick Start

### Default Logger

```javascript
const logger = require('@asynico/coloredlogging');

logger.info('This is an informational message.');
logger.success('This is a success message.');
logger.warn('This is a warning message.');
logger.error('This is an error message.');
```

## Language-Specific Formatters

Choose from pre-configured formatters that match popular programming languages and frameworks:

### Python Style
```javascript
const logger = require('@asynico/coloredlogging');

logger.python.info('This is a Python-style info message.');
logger.python.warn('This is a Python-style warn message.');
```

### Rust Style
```javascript
const logger = require('@asynico/coloredlogging');

logger.rust.info('This is a Rust-style info message.');
logger.rust.error('This is a Rust-style error message.');
```

### C# Style
```javascript
const logger = require('@asynico/coloredlogging');

logger.csharp.trace('Trace message with timestamp');
logger.csharp.debug('Debug information');
logger.csharp.info('General information');
logger.csharp.warn('Warning message');
logger.csharp.error('Error occurred');
logger.csharp.critical('Critical system error');
```

### Discord.js Style
```javascript
const logger = require('@asynico/coloredlogging');

logger.discord.debug('Discord gateway debug info');
logger.discord.info('Discord client information');
logger.discord.warning('Discord gateway warning');
logger.discord.error('Discord client error');
logger.discord.critical('Critical Discord gateway error');
```

### Kotlin Style
```javascript
const logger = require('@asynico/coloredlogging');

logger.kotlin.verbose('Verbose logging information');
logger.kotlin.debug('Debug information');
logger.kotlin.info('General information');
logger.kotlin.warn('Warning message');
logger.kotlin.error('Error message');
logger.kotlin.assert('Assertion failed');
```

### PHP Style
```javascript
const logger = require('@asynico/coloredlogging');

logger.php.emergency('System is unusable');
logger.php.alert('Action must be taken immediately');
logger.php.critical('Critical conditions');
logger.php.error('Error conditions');
logger.php.warning('Warning conditions');
logger.php.notice('Normal but significant condition');
logger.php.info('Informational messages');
logger.php.debug('Debug-level messages');
```

### Ruby Style
```javascript
const logger = require('@asynico/coloredlogging');

logger.ruby.debug('Debug information');
logger.ruby.info('General information');
logger.ruby.warn('Warning message');
logger.ruby.error('Error message');
logger.ruby.fatal('Fatal error');
```

### Swift Style
```javascript
const logger = require('@asynico/coloredlogging');

logger.swift.trace('🔍 Detailed trace information');
logger.swift.debug('🐛 Debug information');
logger.swift.info('ℹ️ General information');
logger.swift.notice('📝 Notable events');
logger.swift.warning('⚠️ Warning conditions');
logger.swift.error('❌ Error conditions');
logger.swift.critical('🚨 Critical system errors');
```

## Custom Logger

Create your own logger with custom colors and formatting:

```javascript
const { createLogger } = require('@asynico/coloredlogging');

// Define your color theme
const myTheme = {
  info: '#8A2BE2',           // BlueViolet
  success: 'rgb(60, 179, 113)',  // MediumSeaGreen
  warn: '#FFD700',           // Gold
  error: 'rgb(255, 69, 0)',  // OrangeRed
};

// Define your custom formatter
const myFormatter = {
  info: (message) => `[MY INFO] ${message}`,
  success: (message) => `[MY SUCCESS] ${message}`,
  warn: (message) => `[MY WARN] ${message}`,
  error: (message) => `[MY ERROR] ${message}`,
};

// Create the custom logger
const customLogger = createLogger({ theme: myTheme, formatter: myFormatter });

// Use your custom logger
customLogger.info('This is a custom info message.');
customLogger.success('Operation completed successfully!');
customLogger.warn('This is a warning with custom styling.');
customLogger.error('An error occurred with custom formatting.');
```

## API Reference

### Default Logger Methods
- `logger.info(message)` - Logs an informational message
- `logger.success(message)` - Logs a success message
- `logger.warn(message)` - Logs a warning message
- `logger.error(message)` - Logs an error message

### Language-Specific Loggers
- `logger.python` - Python-style formatting
- `logger.rust` - Rust-style formatting
- `logger.csharp` - C#/.NET style formatting with full timestamp
- `logger.discord` - Discord.js style formatting
- `logger.kotlin` - Android/Kotlin style formatting
- `logger.php` - PHP PSR-3 compliant log levels
- `logger.ruby` - Ruby on Rails style formatting
- `logger.swift` - Swift style with emoji indicators

### Custom Logger Creation
- `createLogger({ theme, formatter })` - Creates a new logger instance with custom theme and formatter

### Color Theme Format
Colors can be specified in multiple formats:
- Hex: `#FF0000`
- RGB: `rgb(255, 0, 0)`
- Color names: `red`, `blue`, `green`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Changelog

- **Latest**: Added support for Swift, PHP, Kotlin, Discord.js, and C# formatting styles
- Added emoji indicators for Swift logger
- Improved timestamp formatting across different language styles
- Enhanced documentation with comprehensive examples
