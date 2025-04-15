import {defineArrayMember, defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'
import { skill } from './skill'

export const showcase = defineType({
  name: 'showcase',
  title: 'Showcase',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'technologies',
      type: 'array',
    title: 'Technologies',
      of: [
        {
          type: 'reference',
          to: [{ type: skill.name }],
        },
     ]
    }),
  ],
})
