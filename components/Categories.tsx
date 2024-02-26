import { client } from '@/lib/client';
import { groq } from 'next-sanity';
import Link from 'next/link';
import React from 'react';

type Categories = {
  _id: string;
  name: string;
  slug: string;
  description: string;
};

async function getCategories(): Promise<Categories[]> {
  const categories = await client.fetch(groq`
    *[_type == "category"] {    
      _id,
      name,
      "slug": slug.current,
      description,
    }
  `);
  return categories;
}

const Categories = async () => {
  const news = await getCategories();

  return (
    <ul className="flex flex-wrap gap-3">
      {news.map((category) => (
        <li key={category._id}>
          <Link
            href={`/news/category/${category.slug}`}
            className="text-sm font-medium capitalize ring-1 rounded-sm ring-[#979797] py-3 px-4 inline-block hover:ring-2 hover:ring-blue-600"
          >
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
