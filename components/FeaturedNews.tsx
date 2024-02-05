import { getLimitedPosts } from '@/lib/client';
import Heading from './Heading';
import Container from './common/Container';
import NewsCard from './NewsCard';

const FeaturedNews = async () => {
  const news = await getLimitedPosts(0, 5);

  return (
    <section className="mt-10 md:mt-20">
      <Container className="max-w-screen-lg">
        <Heading
          title="Stories from our community"
          component="h2"
          className="text-center mb-12"
        />
        <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {news.map((item) => (
            <NewsCard key={item._id} item={item} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default FeaturedNews;
