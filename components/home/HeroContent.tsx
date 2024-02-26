'use client';

import Link from 'next/link';
import Container from '../common/Container';
import { Spotlight } from '../ui/Spotlight';

import { TypewriterEffect } from '../ui/typewriter-effect';

const HeroContent = () => {
  const words = [
    {
      text: 'Partner',
    },
    {
      text: 'with',
    },
    {
      text: 'us',
    },
  ];
  return (
    <div className="flex md:items-center md:justify-center antialiased bg-grid-white/[0.02]">
      <Spotlight className="hidden md:flex md:left-80" fill="white" />
      <Container className="relative pt-20 mt-12">
        <h1 className="text-4xl pb-5 font-semibold md:text-7xl text-center  bg-clip-text text-transparent  bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          The AI platform that <br /> manages IT projects
        </h1>

        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          We aim to revolutionize the real estate industry worldwide
          by leveraging advanced AI technologies for a
          customer-centric approach.
        </p>
        <Link
          href="/partnerships"
          className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2  mx-auto my-6 text-white"
        >
          <TypewriterEffect words={words} />
        </Link>
      </Container>
    </div>
  );
};

export default HeroContent;
