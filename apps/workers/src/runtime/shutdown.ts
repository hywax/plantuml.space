import process from 'node:process'
import { logger } from '@plantuml/kit'

let shuttingDownState = false

export const isShuttingDown = () => shuttingDownState

export const shutdownPromise = new Promise((resolve) => {
  process.on('SIGTERM', () => {
    logger.info('Received SIGTERM, shutting down ...')
    shuttingDownState = true
    resolve('')
  })
})
