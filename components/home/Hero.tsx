import Description from '../Description';
import Heading from '../Heading';
import Container from '../common/Container';
import { Button } from '../ui/button';
import BackgroundDesign from './BackgroundDesign';

const Hero = () => {
  return (
    <section className="bg-[#f2f2f2] py-20 sm:py-32 overflow-hidden">
      <Container className="max-w-screen-lg md:grid grid-cols-12 gap-x-8 gap-y-20">
        <div className="relative z-10 mx-auto max-w-2xl md:col-span-5 lg:max-w-none lg:pt-6">
          <Heading
            title="Let AI assist you with your property search!"
            component="h1"
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
          />

          <Description
            text="Reimagining real estate to make it easier than ever to move from one home to the next"
            className="mt-6 mb-10 text-lg text-gray-600"
          />

          <Button>Partner with us</Button>
        </div>

        <div className="relative mt-10 md:col-span-7 md:row-span-2 md:mt-0">
          <BackgroundDesign className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:-translate-x-1/2 md:-top-28 lg:ml-12 xl:-top-14 xl:ml-0" />
          <div>
            <video
              className="rounded-xl"
              autoPlay
              muted
              loop
              src="/video.mp4"
            >
              <source src="./video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
