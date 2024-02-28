import { getLimitedPosts } from '@/lib/client';
import Heading from './Heading';
import Container from './common/Container';
import NewsCard from './NewsCard';
import Description from './Description';
import Link from 'next/link';

const FeaturedNews = async () => {
  const news = await getLimitedPosts(0, 5);

  return (
    <section
      className="bg-[#f6f5f4] w-full
    rounded-3xl py-20"
    >
      <Container className="max-w-screen-lg">
        <Heading
          title="From our blog"
          component="h2"
          className="text-center text-4xl md:text-[2.5rem]"
        />
        <Description
          text="Discover the latest in real estate trends and expert insights. Stay informed, stay ahead"
          className="mt-4 text-lg max-w-lg mx-auto text-center"
        />

        <ul className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {news.map((item) => (
            <NewsCard key={item._id} item={item} />
          ))}
        </ul>

        <p className="text-center mt-12 text-black/65">
          Boost your real estate game.{' '}
          <Link
            href="/news"
            className="border-b border-dotted border-black/50 text-black"
          >
            Explore all article
          </Link>{' '}
          .
        </p>
      </Container>
    </section>
  );
};

export default FeaturedNews;
