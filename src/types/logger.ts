export type LogLevel = 'info' | 'success' | 'warn' | 'error';

export interface LoggerTheme {
  info: string;
  success: string;
  warn: string;
  error: string;
  [key: string]: string;
}

export interface LoggerOptions {
  theme?: LoggerTheme;
  logFormat?: (opts: { level: LogLevel; message: string; color: string; timestamp: string }) => string;
  showTimestamp?: boolean;
  levels?: LogLevel[];
}