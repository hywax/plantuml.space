import process from 'node:process'
import { z } from 'zod'

function stringBool(defaultValue: string) {
  return z
    .string()
    .default(defaultValue)
    .refine((s) => s === 'true' || s === 'false')
    .transform((s) => s === 'true')
}

const allEnv = z.object({
  API_URL: z.string().url().default('http://localhost:3000'),
  REDIS_HOST: z.string().default('localhost'),
  REDIS_PORT: z.coerce.number().default(6379),
  REDIS_DB_IDX: z.coerce.number().optional(),
  REDIS_PASSWORD: z.string().optional(),
  DB_URL: z.string().url().default('mysql://root:root@localhost:3306/plantuml'),
  LOG_LEVEL: z.string().default('debug'),
  SERVER_VERSION: z.string().optional(),
  DISABLE_NEW_RELEASE_CHECK: stringBool('false'),
})

const serverConfigSchema = allEnv.transform((value) => {
  return {
    apiUrl: value.API_URL,
    dbUrl: value.DB_URL,
    redis: {
      host: value.REDIS_HOST,
      port: value.REDIS_PORT,
      dbIdx: value.REDIS_DB_IDX,
      password: value.REDIS_PASSWORD,
    },
    logLevel: value.LOG_LEVEL,
    serverVersion: value.SERVER_VERSION,
    disableNewReleaseCheck: value.DISABLE_NEW_RELEASE_CHECK,
  }
})

export type ServerConfig = z.infer<typeof serverConfigSchema>
export const serverConfig: ServerConfig = serverConfigSchema.parse(process.env)

export const clientConfig = {
  serverVersion: serverConfig.serverVersion,
  disableNewReleaseCheck: serverConfig.disableNewReleaseCheck,
}
export type ClientConfig = typeof clientConfig
