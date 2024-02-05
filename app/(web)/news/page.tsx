import React from 'react';
import { getPosts } from '@/lib/client';
import { PostsArray } from '@/types';
import NewsCard from '@/components/NewsCard';
import Container from '@/components/common/Container';
import { notFound } from 'next/navigation';

export const revalidate = 30;
export default async function NewsPage() {
  const news = await getPosts();

  if (!news) {
    return notFound();
  }

  return (
    <section className="py-16">
      <Container>
        <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {news.map((item) => (
            <NewsCard key={item._id} item={item} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
