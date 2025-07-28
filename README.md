## Custom Logger Creation# Colored Logging

[![npm version](https://badge.fury.io/js/@asynico%2Fcoloredlogging.svg)](https://badge.fury.io/js/@bobandbobb%colorlogs)

A simple, customizable Node.js/TypeScript module to add color and language-specific formatting to your console logs.

## Features

- 🎨 Colorful console output with customizable themes
- ⚙️ Fully customizable loggers with your own themes and formatters
- 📝 Multiple log levels for different use cases
- ⏰ Automatic timestamp formatting
- 🔧 Full TypeScript support with type definitions
- 🎯 Lightweight and flexible API

## Installation

```bash
npm install @asynico/coloredlogging
```

## Quick Start

### Default Logger

```javascript
const logger = require('@bobandbob/colorlogs');

logger.info('This is an informational message.');
logger.success('This is a success message.');
logger.warn('This is a warning message.');
logger.error('This is an error message.');
```

### ES6/TypeScript Import

```typescript
import { createLogger } from '@bobandbob/colorlogs';

// Create a logger with default settings
const logger = createLogger();

logger.info('This is an informational message.');
logger.success('This is a success message.');
logger.warn('This is a warning message.');
logger.error('This is an error message.');
```

### Custom Theme

Create a logger with custom colors:

```javascript
import { createLogger } from '@bobandbob/colorlogs';

const customTheme = {
  info: '#0066CC',          
  success: '#00AA00',       
  warn: '#FF8800',         
  error: '#CC0000',      
};

const logger = createLogger({ theme: customTheme });

logger.info('Custom colored info message');
logger.success('Custom colored success message');
```

### Custom Log Format

Customize how your logs are formatted:

```javascript
import { createLogger } from '@bobandbob/colorlogs';

const customLogFormat = ({ level, message, color, timestamp }) => {
  return `${color}🚀 [${level.padEnd(7)}] ${timestamp ? `${timestamp} - ` : ''}${message}\x1b[0m`;
};

const logger = createLogger({ 
  logFormat: customLogFormat,
  showTimestamp: true
});

logger.info('This message uses custom formatting');
```

### Custom Log Levels

Define your own log levels:

```javascript
import { createLogger } from '@bobandbob/colorlogs';

const theme = {
  debug: '#888888',
  info: '#0066CC',
  success: '#00AA00',
  warn: '#FF8800',
  error: '#CC0000',
  critical: '#FF0066'
};

const logger = createLogger({ 
  theme,
  levels: ['debug', 'info', 'success', 'warn', 'error', 'critical']
});

logger.debug('Debug information');
logger.critical('Critical system error');
```

### Disable Timestamps

```javascript
import { createLogger } from @bobandbob/colorlogs';

const logger = createLogger({ showTimestamp: false });

logger.info('This message has no timestamp');
```

## API Reference

### `createLogger(options?: LoggerOptions)`

Creates a new logger instance with the specified options.

#### Options

- `theme?: LoggerTheme` - Color theme for different log levels
- `logFormat?: Function` - Custom formatting function for log output
- `showTimestamp?: boolean` - Whether to include timestamps (default: `true`)
- `levels?: LogLevel[]` - Array of log levels to create methods for (default: `['info', 'success', 'warn', 'error']`)

#### Default Theme

```javascript
{
  info: '#0000FF',     
  success: '#008000',   
  warn: '#FFFF00',      
  error: '#FF0000'    
}
```

### Types

#### `LogLevel`
```typescript
type LogLevel = 'info' | 'success' | 'warn' | 'error';
```

#### `LoggerTheme`
```typescript
interface LoggerTheme {
  info: string;
  success: string;
  warn: string;
  error: string;
  [key: string]: string; // Allows custom log levels
}
```

#### `LoggerOptions`
```typescript
interface LoggerOptions {
  theme?: LoggerTheme;
  logFormat?: (opts: {
    level: LogLevel;
    message: string;
    color: string;
    timestamp: string;
  }) => string;
  showTimestamp?: boolean;
  levels?: LogLevel[];
}
```

### Utilities

#### `toAnsi(color: string): string`

Converts hex colors to ANSI escape codes for terminal output.

```javascript
import { toAnsi } from '@bobandbob/colorlogs';

console.log(`${toAnsi('#FF0000')}This text is red\x1b[0m`);
```

#### `defaultTheme`

The default color theme object.

```javascript
import { defaultTheme } from '@bobandbob/colorlogs';

console.log(defaultTheme); // { info: '#0000FF', success: '#008000', ... }
```

## Color Formats

Colors can be specified as hex values:
- `#FF0000` (red)
- `#00FF00` (green)
- `#0000FF` (blue)

## Examples

### Simple Logger
```javascript
import { createLogger } from '@bobandbob/colorlogs';

const logger = createLogger();
logger.info('Application started');
logger.success('Database connected');
logger.warn('Deprecated API used');
logger.error('Connection failed');
```

### Advanced Logger
```javascript
import { createLogger } from '@bobandbob/colorlogs';

const advancedLogger = createLogger({
  theme: {
    trace: '#666666',
    debug: '#888888',
    info: '#0066CC',
    success: '#00AA00',
    warn: '#FF8800',
    error: '#CC0000',
    fatal: '#FF0066'
  },
  levels: ['trace', 'debug', 'info', 'success', 'warn', 'error', 'fatal'],
  logFormat: ({ level, message, color, timestamp }) => 
    `${color}[${timestamp}] ${level.toUpperCase().padEnd(7)} | ${message}\x1b[0m`,
  showTimestamp: true
});

advancedLogger.trace('Entering function');
advancedLogger.debug('Variable state: active');
advancedLogger.info('Process completed');
advancedLogger.fatal('System shutdown required');
```

## TypeScript Support

This package includes full TypeScript definitions and is written in TypeScript. You get complete type safety and IntelliSense support out of the box.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Changelog

- **Latest**: Complete TypeScript rewrite with improved API
- Simplified API focused on core functionality
- Full TypeScript support with type definitions
- Customizable log levels and formatting
- Lightweight implementation with no dependencies
