import Image from 'next/image';

type CoreValueCardprops = {
  image: string;
  title?: string;
  description?: string;
};

const CoreValueCard = ({
  image,
  title,
  description,
}: CoreValueCardprops) => {
  return (
    <div className="w-full h-full min-w-[300px] text-white">
      <div className="group rounded-[8px] overflow-hidden relative pb-[66%] h-0">
        <div className="after:absolute after:left-0 after:top-0 after:w-full after:h-full inline-block after:bg-[#000] after:opacity-30 group-hover:after:opacity-80">
          <Image
            src={image}
            fill
            alt="property image"
            className={`h-full w-full max-w-[initial] lg:max-w-full object-cover align-middle`}
            sizes="300px"
          />
        </div>
        <div className="absolute top-0 w-full p-4">
          <h3 className="capitalize font-medium mb-6 whitespace-nowrap text-[22px]">
            {title}
          </h3>
          <p className="hidden group-hover:block text-white/80 font-light">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoreValueCard;
