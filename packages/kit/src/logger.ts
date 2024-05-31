import winston from 'winston'
import { serverConfig } from './config'

export const logger = winston.createLogger({
  level: serverConfig.logLevel,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.colorize(),
    winston.format.printf(
      (info) => `${info.timestamp} ${info.level}: ${info.message}`,
    ),
  ),
  transports: [new winston.transports.Console()],
})
