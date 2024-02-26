import { client, getPost, getPosts, urlFor } from '@/lib/client';
import { Post, PostsArray } from '@/types';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import urlBuilder from '@sanity/image-url';
import { getImageDimensions } from '@sanity/asset-utils';
import Container from '@/components/common/Container';
import { RichText } from '@/components/RichText';
import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import CategoriesLink from '@/components/CategoriesLink';
import PostDate from '@/components/PostDate';

type Params = {
  params: {
    slug: string;
  };
};

export const revalidate = 30;

const NewsPage = async ({ params: { slug } }: Params) => {
  const post = await getPost(slug);

  return (
    <Container className="max-w-[1200px] my-8 md:my-12">
      <article className="relative">
        <Container className="max-w-screen-sm">
          <div className="mb-5 md:mb-0 -ml-1 md:ml-0 md:absolute top-0 left-0">
            <Link href={'/news'} className="p-1 inline-block">
              <ArrowLeft />
            </Link>
          </div>
          <BreadCrumb post={post} />
        </Container>

        <header>
          <Container className="max-w-screen-sm">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold my-6">
              {post.title}
            </h1>
            <p className="text-lg md:text-xl font-medium text-black/75 my-6">
              {post.excerpt}
            </p>
            <div className="flex gap-3 items-center mb-6">
              {post.author.image && (
                <div>
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover bg-gray-200 border-[3px] border-blue-500"
                  />
                </div>
              )}
              <span className="text-sm">{post.author?.name}</span>
            </div>
          </Container>
        </header>

        {post?.featuredImage && (
          <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-sm overflow-hidden relative pb-[56%] mb-12">
            {post.featuredImage && (
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                priority
                className={`object-cover transition backdrop-brightness-100`}
              />
            )}
          </div>
        )}
        <Container className="max-w-screen-sm prose">
          <PortableText value={post?.content} components={RichText} />
        </Container>
      </article>
    </Container>
  );
};

const BreadCrumb = ({ post }: { post: Post }) => {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <div className="flex items-center gap-1">
        <Link href={'/news'} className="hover:underline">
          <span>News</span>
        </Link>
        <span>
          <ChevronRight size={13} />
        </span>
        <CategoriesLink
          item={post}
          className="text-base font-normal text-black"
        />
      </div>
      <span>
        <PostDate
          item={post._updatedAt}
          className="text-base font-normal"
        />
      </span>
    </div>
  );
};

export default NewsPage;
