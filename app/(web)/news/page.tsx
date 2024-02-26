import React from 'react';
import { getPosts } from '@/lib/client';
import { PostsArray } from '@/types';
import NewsCard from '@/components/NewsCard';
import Container from '@/components/common/Container';
import { notFound } from 'next/navigation';
import Categories from '@/components/Categories';
import Heading from '@/components/Heading';

export const revalidate = 30;
export default async function NewsPage() {
  const news = await getPosts();

  if (!news) {
    return notFound();
  }

  return (
    <div className="py-10">
      <Container className="max-w-screen-lg">
        <div className="mb-6">
          <Heading
            title="Filter Articles:"
            component="h2"
            className="text-base font-semibold mb-2"
          />
          <Categories />
        </div>
        <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {news.map((item) => (
            <NewsCard key={item._id} item={item} />
          ))}
        </ul>
      </Container>
    </div>
  );
}
