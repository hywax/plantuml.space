import { z } from 'zod'
import type { ConnectionOptions } from 'bullmq'
import { Queue } from 'bullmq'
import { serverConfig } from './config'

export const redisConnection: ConnectionOptions = {
  host: serverConfig.redis.host,
  port: serverConfig.redis.port,
  db: serverConfig.redis.dbIdx,
  password: serverConfig.redis.password,
}

export const plannerRequestSchema = z.object({})
export type PlannerRequest = z.infer<typeof plannerRequestSchema>
export const plannerQueue = new Queue<PlannerRequest, void>('planner', {
  connection: redisConnection,
  defaultJobOptions: {
    attempts: 5,
    backoff: {
      type: 'exponential',
      delay: 1000,
    },
  },
})
