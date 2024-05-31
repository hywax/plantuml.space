import process from 'node:process'
import { sql } from 'drizzle-orm'
import { logger } from '@plantuml/kit'
import { db } from '../src'
import {
  diagrams,
  diagramsElements,
  diagramsTranslations,
  languages,
  types,
  typesTranslations,
  users,
} from '../src/schema'
import languagesFixture from '../fixtures/languages'
import usersFixture from '../fixtures/users'
import typesFixture from '../fixtures/types'
import typesTranslationsFixture from '../fixtures/typesTranslations'
import diagramsFixture from '../fixtures/diagrams'
import diagramsElementsFixture from '../fixtures/diagramsElements'
import diagramsTranslationsFixture from '../fixtures/diagramsTranslations'
import { main as migrate } from './migrate'

async function resetDb(list: any[]) {
  const tables = list.map(([table]) => table[Symbol.for('drizzle:Name')])
  tables.push('__drizzle_migrations')

  const queries = tables.reverse().map((table) => {
    return sql.raw(`DROP TABLE IF EXISTS ${table};`)
  })

  await db.transaction(async (tx) => {
    await Promise.all([
      await tx.execute(sql.raw('SET FOREIGN_KEY_CHECKS = 0')),
      ...queries.map(async (query) => {
        if (query) {
          await tx.execute(query)
        }
      }),
      await tx.execute(sql.raw('SET FOREIGN_KEY_CHECKS = 1')),
    ])
  })
}

async function fixtures(list: any[]) {
  await db.transaction(async (tx) => {
    for (const [table, fixture] of list) {
      await tx.insert(table as any).values(fixture)
    }
  })
}

async function main() {
  const list = [
    [languages, languagesFixture],
    [users, usersFixture],
    [types, typesFixture],
    [typesTranslations, typesTranslationsFixture],
    [diagrams, diagramsFixture],
    [diagramsTranslations, diagramsTranslationsFixture],
    [diagramsElements, diagramsElementsFixture],
  ]

  await resetDb(list)
  await migrate()
  await fixtures(list)
}

main()
  .then(() => {
    logger.info('Fixture data has been reset')
    process.exit(0)
  })
  .catch((e) => {
    logger.error(e)
    process.exit(1)
  })
