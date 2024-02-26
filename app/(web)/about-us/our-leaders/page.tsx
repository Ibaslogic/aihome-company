import BoardOfDirectors from '@/components/BoardOfDirectors';
import OurLeadership from '@/components/OurLeadership';
import Container from '@/components/common/Container';
import { Spotlight } from '@/components/ui/Spotlight';

export const revalidate = 30;

const OurLeadersPage = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-blue-950/[0.96] flex md:items-center md:justify-center antialiased bg-grid-white/[0.02]">
        <Spotlight
          className="hidden md:flex md:left-80"
          fill="white"
        />
        <Container className="relative py-20">
          <h1 className="text-4xl pb-5 font-semibold md:text-7xl text-center  bg-clip-text text-transparent  bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
            Leadership team and <br /> board of directors
          </h1>

          <p className="mt-4 text-base font-normal  text-neutral-300 max-w-3xl text-center mx-auto px-4">
            AiHomeSearch&apos;s leaders excel in real estate with
            expertise in transactions, market analysis, and
            technology. Our seasoned team brings innovation and tech
            solutions to redefine the industry.
          </p>
        </Container>
      </div>
      <Container className="max-w-screen-lg">
        <OurLeadership />
        <BoardOfDirectors />
      </Container>
    </section>
  );
};

export default OurLeadersPage;
