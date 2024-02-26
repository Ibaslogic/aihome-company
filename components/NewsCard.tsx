// import { urlFor } from '@/lib/client';
import { Post } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import Heading from './Heading';
import CategoriesLink from './CategoriesLink';
import PostDate from './PostDate';

const NewsCard = ({ item }: { item: Post }) => {
  return (
    <li>
      <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
        <Link
          href={`/news/${item.slug}`}
          className="absolute left-0 top-0 w-full h-full z-[9]"
        ></Link>
        <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden relative pb-[56%]">
          {item?.featuredImage && (
            <Image
              src={item.featuredImage}
              alt={item.title}
              fill
              className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
            />
          )}
        </div>
        <div className="p-4">
          <CategoriesLink item={item} />
          <Heading
            title={item.title}
            component="h2"
            className="font-medium my-2 text-lg text-zinc-700 line-clamp-2"
          />
          <div className="mt-10">
            <PostDate item={item?._updatedAt} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default NewsCard;
