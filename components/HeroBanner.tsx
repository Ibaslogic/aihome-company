type HeroProps = {
  children: React.ReactNode;
};

const HeroBanner = ({ children }: HeroProps) => {
  return (
    <div className="relative mb-8 md:mb-10 lg:mb-14">{children}</div>
  );
};

export default HeroBanner;
