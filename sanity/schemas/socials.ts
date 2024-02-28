import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'social',
  title: 'Social Media Profiles',
  type: 'document',
  fields: [
    {
      name: 'platform',
      title: 'Platform',
      type: 'string',
      description: 'e.g., LinkedIn, Twitter, etc.',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
      description:
        'Your username/handle on the social media platform',
    },
    {
      name: 'url',
      title: 'Profile URL',
      type: 'url',
      description:
        'Link to your profile on the social media platform',
    },
    {
      name: 'isActive',
      title: 'Active Account',
      type: 'boolean',
      description: 'Check if the account is currently active',
    },
  ],
  preview: {
    select: {
      platform: 'platform',
      username: 'username',
    },
    prepare: ({ platform, username }) => ({
      title: `@${username} on ${platform}`,
    }),
  },
});
