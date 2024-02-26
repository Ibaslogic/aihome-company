import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'pricingPlan',
  title: 'Pricing Plan',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The name of the pricing plan.',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'The cost of the pricing plan per month.',
    }),
    defineField({
      name: 'featureHighlights',
      title: 'Feature Highlights',
      type: 'text',
      description: 'A summary of the pricing plan.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A detailed description of the pricing plan.',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of features included in the pricing plan.',
    }),
    defineField({
      name: 'support',
      title: 'Support',
      type: 'object',
      fields: [
        { name: 'chatbot', title: 'Chatbot', type: 'boolean' },
      ],
      description: 'Support features included in the pricing plan.',
    }),
  ],
});
