import Link from 'next/link';
import Description from '../Description';
import Heading from '../Heading';
import Container from '../common/Container';

const AboutSummary = () => {
  return (
    <section className="w-full rounded-3xl py-20">
      <Container className="max-w-screen-lg prose">
        <div className="md:flex gap-3">
          <div className="flex-1">
            <Heading
              title="OUR COMPANY"
              component="h2"
              className="font-semibold mt-0 text-base mb-1"
            />
            <Heading
              title="We are Your Trusted Source for Transforming Real Estate"
              component="h3"
              className="font-semibold mt-0 text-3xl pb-1"
            />
          </div>
          <div className="flex-1">
            <Description
              text="AiHomeSearch are a PropTech company based in Brisbane,
              Australia. Our company, AiHomeSearch, aims to
              revolutionize the real estate industry worldwide by
              leveraging advanced AI technologies for a
              customer-centric approach. We use state-of-the-art
              computer vision, deep learning, machine learning, and AI
              to bridge the gap in the industry and offer an unmatched
              platform like that of our competitors."
              className="text-base leading-7 m-0"
            />
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
