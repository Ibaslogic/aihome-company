import { getTestimonials } from '@/lib/client';
import Description from '../Description';
import Heading from '../Heading';
import Container from '../common/Container';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';

const Testimonials = async () => {
  const testimonials = await getTestimonials();

  return (
    <section className="mt-10 md:mt-20">
      <Container className="max-w-screen-lg">
        <Heading
          title="Testimonials"
          component="h2"
          className="text-center py-10 md:pb-8 text-4xl md:text-5xl"
        />
        <Description
          text="Discover what our clients say about their exceptional experiences with us"
          className="mt-4 text-lg max-w-lg mx-auto"
        />
      </Container>
      <div className="pt-8 rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default Testimonials;
