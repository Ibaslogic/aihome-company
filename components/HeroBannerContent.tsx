import Image from 'next/image';
import Container from './common/Container';

interface HeroBannerContentProps {
  imageSrc?: string;
  children: React.ReactNode;
  className?: string;
  imageHeightLargeScreen?: string;
}

const HeroBannerContent = ({
  imageSrc = '/assets/images/properties/aiHomeSearchHero_home.jpg',
  children,
  className = 'object-cover object-center',
  imageHeightLargeScreen = '450px',
}: HeroBannerContentProps) => {
  return (
    <div
      className={`relative flex items-center justify-center h-[450px] sm:h-[${imageHeightLargeScreen}] bg-[#5c5c5c]`}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={imageSrc}
          alt="realtor banner"
          className={`${className}`}
          fill
          priority
        />
        <div className="absolute left-0 bottom-0 h-full w-full bg-slate-800/55"></div>
      </div>
      <div className="text-white w-full relative">
        <Container className="max-w-screen-lg">{children}</Container>
      </div>
    </div>
  );
};

export default HeroBannerContent;
