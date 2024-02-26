import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Customer Name',
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Customer Title',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Customer Reviews',
    }),
  ],
});
