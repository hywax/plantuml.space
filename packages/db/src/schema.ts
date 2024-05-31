import { relations } from 'drizzle-orm'
import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from 'drizzle-orm/mysql-core'

export const languages = mysqlTable('languages', {
  id: int('id').autoincrement().primaryKey(),
  code: varchar('code', { length: 6 }).unique().notNull(),
  name: varchar('name', { length: 10 }).notNull(),
})

export const users = mysqlTable('users', {
  id: int('id').autoincrement().primaryKey(),
  name: varchar('name', { length: 20 }).notNull(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  avatar: text('avatar'),
  createdAt: timestamp('created_at', { mode: 'date' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'date' }).notNull().defaultNow(),
  deletedAt: timestamp('deleted_at', { mode: 'date' }),
})

export const types = mysqlTable('types', {
  id: int('id').autoincrement().primaryKey(),
  createdAt: timestamp('created_at', { mode: 'date' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'date' }).notNull().defaultNow(),
  deletedAt: timestamp('deleted_at', { mode: 'date' }),
})

export const typesTranslations = mysqlTable('types_translations', {
  id: int('id').autoincrement().primaryKey(),
  typeId: int('type_id').notNull().references(() => types.id),
  languageId: int('language_id').notNull().references(() => languages.id),
  name: varchar('name', { length: 100 }).notNull(),
  description: text('description'),
  createdAt: timestamp('created_at', { mode: 'date' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'date' }).notNull().defaultNow(),
  deletedAt: timestamp('deleted_at', { mode: 'date' }),
})

export const diagrams = mysqlTable('diagrams', {
  id: int('id').autoincrement().primaryKey(),
  userId: int('user_id').notNull().references(() => users.id),
  typeId: int('type_id').notNull().references(() => types.id),
  status: mysqlEnum('status', ['new', 'pending', 'processing', 'error', 'done']).default('new').notNull(),
  originalLanguageId: int('original_language_id').notNull().references(() => languages.id),
  createdAt: timestamp('created_at', { mode: 'date' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'date' }).notNull().defaultNow(),
  deletedAt: timestamp('deleted_at', { mode: 'date' }),
})

export const diagramsTranslations = mysqlTable('diagrams_translations', {
  id: int('id').autoincrement().primaryKey(),
  diagramId: int('diagram_id').notNull().references(() => diagrams.id),
  languageId: int('language_id').notNull().references(() => languages.id),
  name: varchar('name', { length: 100 }).notNull(),
  description: text('description'),
  createdAt: timestamp('created_at', { mode: 'date' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'date' }).notNull().defaultNow(),
  deletedAt: timestamp('deleted_at', { mode: 'date' }),
})

export const diagramsElements = mysqlTable('diagrams_elements', {
  id: int('id').autoincrement().primaryKey(),
  svg: text('svg').notNull(),
  uml: text('uml').notNull(),
  ascii: text('ascii').notNull(),
  translationId: int('translation_id').references(() => diagramsTranslations.id),
  createdAt: timestamp('created_at', { mode: 'date' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'date' }).notNull().defaultNow(),
  deletedAt: timestamp('deleted_at', { mode: 'date' }),
})

// Relations

export const languagesRelations = relations(languages, ({ many }) => ({
  diagramsTranslations: many(diagramsTranslations, {
    relationName: 'diagramsTranslations',
  }),
  typesTranslations: many(typesTranslations, {
    relationName: 'typesTranslations',
  }),
  diagrams: many(diagrams, {
    relationName: 'diagrams',
  }),
}))

export const usersRelations = relations(users, ({ many }) => ({
  diagrams: many(diagrams, {
    relationName: 'diagrams',
  }),
}))

export const diagramsRelations = relations(diagrams, ({ one, many }) => ({
  user: one(users, {
    relationName: 'user',
    fields: [diagrams.userId],
    references: [users.id],
  }),
  type: one(types, {
    relationName: 'type',
    fields: [diagrams.typeId],
    references: [types.id],
  }),
  originalLanguage: one(languages, {
    relationName: 'originalLanguage',
    fields: [diagrams.originalLanguageId],
    references: [languages.id],
  }),
  translations: many(diagramsTranslations, {
    relationName: 'translations',
  }),
}))

export const diagramsTranslationsRelations = relations(diagramsTranslations, ({ one, many }) => ({
  diagram: one(diagrams, {
    relationName: 'diagram',
    fields: [diagramsTranslations.diagramId],
    references: [diagrams.id],
  }),
  language: one(languages, {
    relationName: 'language',
    fields: [diagramsTranslations.languageId],
    references: [languages.id],
  }),
  elements: many(diagramsElements, {
    relationName: 'elements',
  }),
}))

export const diagramsElementsRelations = relations(diagramsElements, ({ one }) => ({
  translation: one(diagramsTranslations, {
    relationName: 'translation',
    fields: [diagramsElements.translationId],
    references: [diagramsTranslations.id],
  }),
}))

export const typesRelations = relations(types, ({ many }) => ({
  diagrams: many(diagrams, {
    relationName: 'diagrams',
  }),
  translations: many(typesTranslations, {
    relationName: 'translations',
  }),
}))

export const typesTranslationsRelations = relations(typesTranslations, ({ one }) => ({
  type: one(types, {
    relationName: 'type',
    fields: [typesTranslations.typeId],
    references: [types.id],
  }),
  language: one(languages, {
    relationName: 'language',
    fields: [typesTranslations.languageId],
    references: [languages.id],
  }),
}))
