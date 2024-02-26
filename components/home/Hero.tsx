import { getCoreValues } from '@/lib/client';
import HeroContent from './HeroContent';
import OurValuesSlider from './OurValuesSlider';

const Hero = async () => {
  const coreValues = await getCoreValues();

  return (
    <section className="relative w-full bg-blue-950/[0.96] overflow-hidden">
      <HeroContent />
      <OurValuesSlider {...{ coreValues }} />
    </section>
  );
};

export default Hero;
