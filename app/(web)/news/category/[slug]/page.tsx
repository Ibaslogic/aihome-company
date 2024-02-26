import GoBack from '@/components/GoBack';
import NewsCard from '@/components/NewsCard';
import Container from '@/components/common/Container';
import { client } from '@/lib/client';
import { PostsArray } from '@/types';
import { ArrowLeft } from 'lucide-react';
import { groq } from 'next-sanity';
import Link from 'next/link';

type Params = {
  params: {
    slug: string;
  };
};

export const revalidate = 0;

async function getPosts(slug: string): Promise<PostsArray> {
  const post = await client.fetch(
    groq`
    *[_type == "post" && $slug in categories[]->slug.current] | order(_updatedAt desc) {
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
  `,
    { slug }
  );
  return post;
}

function replaceHyphenWithSpace(slug: string) {
  return slug.replace(/-/g, ' ');
}

const CategoryPage = async ({ params: { slug } }: Params) => {
  const posts = await getPosts(slug);

  const category = replaceHyphenWithSpace(slug);

  return (
    <div className="py-16">
      <Container className="max-w-screen-lg">
        <div className="mb-6">
          <GoBack />
        </div>
        <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50 pb-12 text-4xl md:text-5xl">
          Category: <span className="capitalize">{category}</span>
        </h1>
        <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {posts.map((item) => (
            <NewsCard key={item._id} item={item} />
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default CategoryPage;
