import type { z } from 'zod'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import {
  diagrams, diagramsElements,
  diagramsTranslations,
  languages,
  types,
  typesTranslations,
  users,
} from './schema'

// Languages
export const languageDraftSchema = createInsertSchema(languages)
export const languageSchema = createSelectSchema(languages)

export type LanguageDraft = z.infer<typeof languageDraftSchema>
export type Language = z.infer<typeof languageSchema>

// Users
export const userDraftSchema = createInsertSchema(users)
export const userSchema = createSelectSchema(users)

export type UserDraft = z.infer<typeof userDraftSchema>
export type User = z.infer<typeof userSchema>

// Types
export const typeDraftSchema = createInsertSchema(types)
export const typeSchema = createSelectSchema(types)
export const typeTranslationSchema = createSelectSchema(typesTranslations)
export const typeTranslationDraftSchema = createInsertSchema(typesTranslations)

export type TypeDraft = z.infer<typeof typeDraftSchema>
export type Type = z.infer<typeof typeSchema>
export type TypeTranslations = z.infer<typeof typeTranslationSchema>
export type TypeTranslationsDraft = z.infer<typeof typeTranslationDraftSchema>

// Diagrams
export const diagramDraftSchema = createInsertSchema(diagrams)
export const diagramSchema = createSelectSchema(diagrams)
export const diagramTranslationSchema = createSelectSchema(diagramsTranslations)
export const diagramTranslationDraftSchema = createInsertSchema(diagramsTranslations)
export const diagramElementSchema = createSelectSchema(diagramsElements)
export const diagramElementDraftSchema = createInsertSchema(diagramsElements)

export type DiagramDraft = z.infer<typeof diagramDraftSchema>
export type Diagram = z.infer<typeof diagramSchema>
export type DiagramTranslation = z.infer<typeof diagramTranslationSchema>
export type DiagramTranslationDraft = z.infer<typeof diagramTranslationDraftSchema>
export type DiagramElement = z.infer<typeof diagramElementSchema>
export type DiagramElementDraft = z.infer<typeof diagramElementDraftSchema>
