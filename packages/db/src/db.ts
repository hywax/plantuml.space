import 'dotenv/config'
import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import { serverConfig } from '@plantuml/kit'
import * as schema from './schema'

export const connection = await mysql.createConnection({
  uri: serverConfig.dbUrl,
})

export const db = drizzle(connection, {
  mode: 'default',
  schema,
})
