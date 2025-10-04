// sanity-studio/sanity.config.ts

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
// 1. Importujemy nasz nowo stworzony schemat
import project from './schemaTypes/project'

export default defineConfig({
  name: 'default',
  title: 'danielfilus-pl-studio',

  projectId: 'twój-project-id', // Zastąp to swoim prawdziwym ID!
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    // 2. Dodajemy schemat do tablicy typów
    types: [project],
  },
})