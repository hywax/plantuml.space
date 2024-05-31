import process from 'node:process'
import { migrate } from 'drizzle-orm/mysql2/migrator'
import { db } from '@plantuml/db'
import { logger } from '@plantuml/kit'

export async function main() {
  await migrate(db, { migrationsFolder: './migrations' })
}

main()
  .then(() => {
    logger.info('Migration completed')
    process.exit(0)
  })
  .catch((e) => {
    logger.error(e)
    process.exit(1)
  })
