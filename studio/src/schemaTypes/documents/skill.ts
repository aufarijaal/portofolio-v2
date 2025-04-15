import {defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

/**
 * Skill schema.  Define and edit the fields for the 'skill' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export const skill = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
    }),
    defineField({
      name: 'proficiency',
      title: 'Proficiency',
      type: 'string',
      options: {
        list: [
          { title: 'Beginner', value: 'beginner' },
          { title: 'Intermediate', value: 'intermediate' },
          { title: 'Advanced', value: 'advanced' },
        ],
        layout: 'dropdown' // or 'radio'
      },
      initialValue: 'beginner',
    }),
    defineField({
      name: 'show',
      title: 'Show',
      type: 'boolean',
      initialValue: true
    }),
  ],
})
