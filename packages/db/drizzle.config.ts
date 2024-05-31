import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'
import { serverConfig } from '@plantuml/kit'

export default defineConfig({
  schema: './src/schema.ts',
  out: './migrations',
  dialect: 'mysql',
  dbCredentials: {
    url: serverConfig.dbUrl,
  },
})
