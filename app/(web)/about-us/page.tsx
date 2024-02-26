import Description from '@/components/Description';
import Heading from '@/components/Heading';
import HeroBanner from '@/components/HeroBanner';
import HeroBannerContent from '@/components/HeroBannerContent';
import Container from '@/components/common/Container';
import { client } from '@/lib/client';
import { AboutProps } from '@/types';
import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import Image from 'next/image';

export const revalidate = 30;

async function getAbout(): Promise<AboutProps> {
  const content = await client.fetch(groq`
    *[_type == "aboutUs"]{ 
      _id,
      title,
      "image": image.asset->url,
      content
    }[0]
  `);
  return content;
}

const AboutUsPage = async () => {
  const aboutContent = await getAbout();

  return (
    <>
      <HeroBanner>
        <HeroBannerContent imageSrc="/images/about-overview.jpg">
          <Heading
            title="About us"
            component="h1"
            className="text-4xl pb-5 font-semibold md:text-6xl text-center text-white"
          />
          <Description
            text="Discover the perfect home with passion, innovation, and personalized service. Your dream home is just a click away."
            className="mt-4 text-lg font-normal text-white max-w-2xl text-center mx-auto px-4"
          />
        </HeroBannerContent>
      </HeroBanner>

      <div className="mt-10 md:mt-20">
        <Container className="max-w-screen-lg">
          <div>
            <div>
              <div className="sm:grid grid-cols-2 gap-10">
                <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-sm overflow-hidden relative pb-[56%] mb-12 sm:mb-0">
                  <Image
                    src={aboutContent.image}
                    fill
                    className="h-full w-full object-cover"
                    alt="Picture for ads"
                    sizes="(min-width: 995px) 50vw, 100vw"
                  />
                </div>

                <div>
                  <Heading
                    title={aboutContent.title}
                    className="font-semibold text-3xl sm:text-5xl mb-6"
                    component="h2"
                  />
                  <div className="prose">
                    <PortableText value={aboutContent.content} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AboutUsPage;
