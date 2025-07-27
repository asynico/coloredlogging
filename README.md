# Colored Logging

[![npm version](https://badge.fury.io/js/@asynico%2Fcoloredlogging.svg)](https://badge.fury.io/js/@asynico%2Fcoloredlogging)

A simple, customizable Node.js module to add color to your console logs.

## Installation
```bash
npm install @asynico/coloredlogging
```

## Usage
### Default Logger
```javascript
const logger = require('@asynico/coloredlogging');

logger.info('This is an informational message.');
logger.success('This is a success message.');
logger.warn('This is a warning message.');
logger.error('This is an error message.');
```

### Language-Specific Formatters
You can use pre-configured formatters for different languages.

#### Python
```javascript
const logger = require('@asynico/coloredlogging');

logger.python.info('This is a Python-style info message.');
logger.python.warn('This is a Python-style warn message.');
```

#### Rust
```javascript
const logger = require('@asynico/coloredlogging');

logger.rust.info('This is a Rust-style info message.');
logger.rust.error('This is a Rust-style error message.');
```

### Custom Logger
You can create a custom logger with your own color scheme and formatter.

```javascript
const { createLogger } = require('@asynico/coloredlogging');

const myTheme = {
  info: '#8A2BE2', 
  success: 'rgb(60, 179, 113)', 
  warn: '#FFD700', 
  error: 'rgb(255, 69, 0)', 
};

const myFormatter = {
    info: (message) => `[MY INFO] ${message}`,
    success: (message) => `[MY SUCCESS] ${message}`,
    warn: (message) => `[MY WARN] ${message}`,
    error: (message) => `[MY ERROR] ${message}`,
};

const customLogger = createLogger({ theme: myTheme, formatter: myFormatter });
customLogger.info('This is a custom info message.');
```

## API
- `logger.info(message)`: Logs an informational message.
- `logger.success(message)`: Logs a success message.
- `logger.warn(message)`: Logs a warning message.
- `logger.error(message)`: Logs an error message.
- `logger.python`: Logger with Python-style formatting.
- `logger.rust`: Logger with Rust-style formatting.
- `createLogger({ theme, formatter })`: Creates a new logger instance with a custom theme and formatter.
