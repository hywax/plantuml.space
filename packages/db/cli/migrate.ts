import process from 'node:process'
import url from 'node:url'
import path from 'node:path'
import { migrate } from 'drizzle-orm/mysql2/migrator'
import { logger } from '@plantuml/kit'
import { db } from '../src'

export async function main() {
  const __filename = url.fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  await migrate(db, { migrationsFolder: path.resolve(__dirname, '../migrations') })
}

if (process.argv[1].includes('migrate.ts')) {
  main()
    .then(() => {
      logger.info('Migrations completed')
      process.exit(0)
    })
    .catch((e) => {
      logger.error(e)
      process.exit(1)
    })
}
