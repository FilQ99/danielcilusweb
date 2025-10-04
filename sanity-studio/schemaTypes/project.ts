// sanity-studio/schemaTypes/project.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Tytuł projektu',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Ważne dla SEO i dostępności',
        },
      ],
    }),
    defineField({
        name: 'technologies',
        title: 'Technologies',
        type: 'array',
        of: [{type: 'string'}],
        options: {
            layout: 'tags'
        }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
        name: 'projectUrl',
        title: 'Project URL',
        type: 'url'
    }),
    defineField({
        name: 'githubUrl',
        title: 'GitHub URL',
        type: 'url'
    }),
  ],
})