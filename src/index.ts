import { toAnsi } from './utils/colors.ts';
import defaultTheme from './themes/default.ts';
import type { LoggerOptions, LoggerTheme, LogLevel } from './types/logger.ts';

export function defaultLogFormat({ level, message, color, timestamp }: { level: LogLevel; message: string; color: string; timestamp: string }) {
  return `${toAnsi(color)}[${timestamp}] [${level.toUpperCase()}] ${message}\x1b[0m`;
}

export function createLogger({
  theme = defaultTheme,
  logFormat = defaultLogFormat,
  showTimestamp = true,
  levels = ['info', 'success', 'warn', 'error'],
}: LoggerOptions = {}) {
  const logger: Record<string, (msg: string) => void> = {};

  levels.forEach(level => {
    logger[level] = (message: string) => {
      const color = theme[level] || theme.info;
      const timestamp = showTimestamp ? new Date().toISOString() : '';
      const output = logFormat({ level, message, color, timestamp });
      console.log(output);
    };
  });

  return logger;
}

export { toAnsi };
export { defaultTheme };
export type { LoggerOptions, LoggerTheme, LogLevel };