import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'coreValues',
  title: 'Our core values',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'coreImage',
      type: 'image',
      title: 'Add Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt',
        },
      ],
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coreImage',
    },
  },
});
