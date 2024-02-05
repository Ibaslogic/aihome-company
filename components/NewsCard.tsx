import { urlFor } from '@/lib/client';
import { Post } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import Heading from './Heading';

const NewsCard = ({ item }: { item: Post }) => {
  return (
    <li className="border border-[#d8dcde] hover:shadow-md rounded-md">
      <Link href={`/news/${item.slug}`}>
        <div>
          <div className="relative pb-[56%]">
            <Image
              // src={urlFor(item?.featuredImage).url()}
              src={item?.featuredImage}
              fill
              alt={item.title}
              className={` h-full w-full max-w-[initial] lg:max-w-full object-cover align-middle`}
              sizes="300px"
            />
          </div>

          <div className="p-4">
            <p className="flex gap-1">
              {item.categories.map((category, index) => (
                <span
                  className="text-blue-700 text-sm font-semibold"
                  key={category._id}
                >
                  {category.name}
                  {index < item.categories.length - 1 && ', '}
                </span>
              ))}
            </p>
            <Heading
              title={item.title}
              component="h2"
              className="font-bold text-lg tracking-tight leading-7 mb-2"
            />
            <div className="flex justify-between items-center">
              <p className="text-[#666666] text-sm">
                {/* <span>
              {new Date(item?.publishedAt).toLocaleDateString(
                'en-US',
                {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                }
              )}
            </span>
            <br /> */}
                <span>
                  {new Date(item?._updatedAt).toLocaleDateString(
                    'en-US',
                    {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    }
                  )}
                </span>
              </p>

              <div>
                <Image
                  src={item.author.image}
                  width={200}
                  height={200}
                  alt={'author image'}
                  className="rounded-full object-cover w-8"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default NewsCard;

{
  /* <p className="line-clamp-2">{item.body}</p> */
}
