import process from 'node:process'
import { logger, serverConfig } from '@plantuml/kit'
import { shutdownPromise } from './runtime/shutdown'
import { planner } from './workers/planner'

async function main() {
  logger.info(`Workers version: ${serverConfig.serverVersion ?? 'not set'}`)

  const workers = [
    planner(),
  ]

  await Promise.any([
    Promise.all(
      workers.map((worker) => worker.run()),
    ),
    shutdownPromise,
  ])
}

main()
  .catch((e) => {
    logger.error(e)
    process.exit(1)
  })
