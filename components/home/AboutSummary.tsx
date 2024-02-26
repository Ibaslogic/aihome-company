import Link from 'next/link';
import Description from '../Description';
import Heading from '../Heading';
import Container from '../common/Container';

const AboutSummary = () => {
  return (
    <section
      className=" mt-10 md:py-10 w-full
    rounded-3xl
  
  "
    >
      <Container className="max-w-screen-lg">
        <div className="md:flex gap-3">
          <div className="flex-1">
            <Heading
              title="OUR COMPANY"
              component="h3"
              className="font-semibold"
            />
            <p className="text-3xl font-semibold mb-6 md:mb-0">
              AiHomeSearch is your trusted source for transforming
              real estate
            </p>
          </div>
          <div className="flex-1">
            <p className="text-base leading-7">
              AiHomeSearch are a PropTech company based in Brisbane,
              Australia. Our company, AiHomeSearch, aims to
              revolutionize the real estate industry worldwide by
              leveraging advanced AI technologies for a
              customer-centric approach. We use state-of-the-art
              computer vision, deep learning, machine learning, and AI
              to bridge the gap in the industry and offer an unmatched
              platform like that of our competitors.
            </p>
            <p className="mt-3 text-black/65">
              <Link
                href="/about-us"
                className="border-b border-dotted border-black/50 text-black"
              >
                Continue
              </Link>{' '}
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSummary;
