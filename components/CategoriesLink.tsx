import { cn } from '@/lib/utils';
import { Post } from '@/types';
import Link from 'next/link';
import React from 'react';

type CategoriesLinkProps = {
  item: Post;
  className?: string;
};

const CategoriesLink = ({ item, className }: CategoriesLinkProps) => {
  return (
    <div>
      <p className="flex gap-1">
        {item.categories?.map((category, index) => (
          <span
            className={cn(
              'text-blue-700 text-sm font-semibold hover:underline',
              className
            )}
            key={category._id}
          >
            <Link
              className="z-10 relative"
              href={`/news/category/${category.slug}`}
            >
              {category.name}
            </Link>
            {index < item.categories.length - 1 && ', '}
          </span>
        ))}
      </p>
    </div>
  );
};

export default CategoriesLink;
