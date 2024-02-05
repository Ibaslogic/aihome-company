import { client, getPost, getPosts, urlFor } from '@/lib/client';
import { Post, PostsArray } from '@/types';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import urlBuilder from '@sanity/image-url';
import { getImageDimensions } from '@sanity/asset-utils';
import { groq } from 'next-sanity';
import Container from '@/components/common/Container';
import { RichText } from '@/components/RichText';

type Params = {
  params: {
    slug: string;
  };
};

export const revalidate = 30;

const NewsPage = async ({ params: { slug } }: Params) => {
  const post = await getPost(slug);

  return (
    <Container>
      <article>
        <h1>{post?.title}</h1>
        {post?.featuredImage && (
          <Image
            // src={urlFor(post.featuredImage).url()}
            src={post.featuredImage}
            width={500}
            height={500}
            alt={post.title}
            className="backdrop-brightness-100"
          />
        )}
        <div>
          <PortableText value={post?.content} components={RichText} />
        </div>
      </article>
    </Container>
  );
};

export default NewsPage;
