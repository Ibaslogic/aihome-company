import FeaturedNews from '@/components/FeaturedNews';
import AboutSummary from '@/components/home/AboutSummary';
import ContactUsNow from '@/components/home/ContactUsNow';
import Hero from '@/components/home/Hero';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSummary />
      <FeaturedNews />
      <Testimonials />
      <ContactUsNow />
    </div>
  );
}
