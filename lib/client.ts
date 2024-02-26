import { createClient, groq } from 'next-sanity';
import ImageUrlBuilder from '@sanity/image-url';
import {
  CoreValues,
  Person,
  Post,
  PostsArray,
  PricingPlan,
  Testimonials,
} from '@/types';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;

export const client = createClient({
  projectId,
  dataset,
  useCdn: true, // false
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
      categories[]->{
        _id,
        name,
        "slug": slug.current,
      },
    }
  `);
  return posts;
}

export async function getPost(slug: string): Promise<Post> {
  const post = await client.fetch(
    groq`
    *[_type == "post" && slug.current == $slug]{
      _id,
      title,
      excerpt,
      "slug": slug.current,
      "featuredImage": featuredImage.asset->url,
      _updatedAt,
      "author": *[_type == "author" && _id == ^.author._ref][0]{
        "image": image.asset->url,
        _id,
        name,
        "slug": slug.current,
      },
      categories[]->{
        _id,
        name,
        "slug": slug.current,
      },
      "content": body
    }[0]
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
      categories[]->{
        _id,
        name,
        "slug": slug.current,
      },
    }
  `);
  return posts;
}
export async function getCoreValues(): Promise<CoreValues[]> {
  const posts = await client.fetch(groq`
    *[_type == "coreValues"] {    
      _id,
      title,
      "image": coreImage.asset->url,
      "content": description
    }
  `);
  return posts;
}

export async function getTestimonials(): Promise<Testimonials[]> {
  const testimonials = await client.fetch(groq`
    *[_type == "testimonials"] {    
      _id,
      title,
      name,
      description
    }
  `);
  return testimonials;
}

export async function getLeadership(): Promise<Person[]> {
  const leadership = await client.fetch(groq`
    *[_type == "leadership"] | order(priority desc, _updatedAt desc) {    
      _id,
      name,
      slug,
      title,
      "image": image.asset->url,
      bio
    }
  `);
  return leadership;
}

export async function getBoardOfDirectors(): Promise<Person[]> {
  const bod = await client.fetch(groq`
    *[_type == "boardOfDirectors"] | order(priority desc, _updatedAt desc) {    
      _id,
      name,
      slug,
      title,
      "image": image.asset->url,
      bio
    }
  `);
  return bod;
}

export async function getPricingPlan(): Promise<PricingPlan[]> {
  const pricing = await client.fetch(groq`
    *[_type == "pricingPlan"] { 
      _id,
      title,
      price,  
      featureHighlights,  
      description,  
      features,
      support
    }
  `);
  return pricing;
}
