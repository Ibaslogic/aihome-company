import { createClient, groq } from 'next-sanity';
import ImageUrlBuilder from '@sanity/image-url';
import { Post, PostsArray } from '@/types';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;

export const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: '2024-02-04',
  token,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};

export async function getPosts(): Promise<PostsArray> {
  const posts = await client.fetch(groq`
    *[_type == "post"] | order(_updatedAt desc){    
      _id,
      title,
      "slug": slug.current,
      "featuredImage": featuredImage.asset->url,
      _updatedAt,
      publishedAt,
      _createdAt,
      "body": pt::text(body),
      "author": *[_type == "author" && _id == ^.author._ref][0]{
        "image": image.asset->url,
        _id,
        name,
        "slug": slug.current,
      },
      categories[]->{
        _id,
        name
      },
    }
  `);
  return posts;
}

export async function getPost(slug: string): Promise<Post> {
  const post = await client.fetch(
    groq`
    *[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      "featuredImage": featuredImage.asset->url,
      publishedAt,
      "body": pt::text(body),
      "author": *[_type == "author" && _id == ^.author._ref][0]{
        "image": image.asset->url,
        _id,
        name,
        "slug": slug.current,
      },
      categories[]->{
        _id,
        name
      },
      "content": body
    }
  `,
    { slug }
  );
  return post;
}

export async function getLimitedPosts(
  start: number,
  end: number
): Promise<PostsArray> {
  const posts = await client.fetch(groq`
    *[_type == "post"] | order(_updatedAt desc) [${start}..${end}]{    
      _id,
      title,
      "slug": slug.current,
      "featuredImage": featuredImage.asset->url,
      _updatedAt,
      publishedAt,
      _createdAt,
      "body": pt::text(body),
      "author": *[_type == "author" && _id == ^.author._ref][0]{
        "image": image.asset->url,
        _id,
        name,
        "slug": slug.current,
      },
      categories[]->{
        _id,
        name
      },
    }
  `);
  return posts;
}
