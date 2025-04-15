import {defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

export const certificate = defineType({
  name: 'certificate',
  title: 'Certificate',
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
      name: 'issuer',
      title: 'Issuer',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date Achieved',
      type: 'date',
    }),
    defineField({
      name: 'certificateUrl',
      title: 'Cerfificate URL',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Certificate Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
