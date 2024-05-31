import type { Job } from 'bullmq'
import { Worker } from 'bullmq'
import type { PlannerRequest } from '@plantuml/kit'
import { logger, plannerQueue, redisConnection } from '@plantuml/kit'

async function runPlanner(job: Job<PlannerRequest, void>) {
  const jobId = job.id ?? 'unknown'

  logger.info(`[planner][${jobId}] Running planner job`)
}

export function planner() {
  const worker = new Worker<PlannerRequest, void>(plannerQueue.name, runPlanner, {
    connection: redisConnection,
    autorun: false,
  })

  worker.on('completed', (job) => {
    const jobId = job?.id ?? 'unknown'
    logger.info(`[planner][${jobId}] Completed successfully`)
  })

  worker.on('failed', (job, error) => {
    const jobId = job?.id ?? 'unknown'
    logger.error(`[planner][${jobId}] planner job failed: ${error}`)
  })

  return worker
}
