'use client';

import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CoreValueCard from './CoreValueCard';
import { CoreValues } from '@/types';

type OurValuesSlider = {
  coreValues: CoreValues[];
};

const OurValuesSlider = ({ coreValues }: OurValuesSlider) => {
  const isMediumScreen = useMediaQuery({
    minWidth: 768,
    maxWidth: 1023,
  });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    className: 'w-full mx-auto cursor-pointer center-mode',
  };

  if (isMediumScreen) {
    settings.slidesToShow = 1.67;
  } else if (isSmallScreen) {
    settings.slidesToShow = 1;
  }

  return (
    <div className="w-full pt-20">
      <Slider {...settings}>
        {coreValues.map((coreValue) => (
          <CoreValueCard
            key={coreValue._id}
            image={coreValue.image}
            title={coreValue.title}
            description={coreValue.content}
          />
        ))}
      </Slider>
    </div>
  );
};

export default OurValuesSlider;
