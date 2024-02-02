import Image from 'next/image';

const SectionalCard = () => {
  return (
    <div className="relative w-[500px] h-[500px]">
      <Image
        src="https://www.zillowstatic.com/bedrock/app/uploads/sites/21/2023/04/2023_Fair-Housing_Header_1600x900_030623_C-1-768x432.jpg"
        fill
        alt="property image"
        className={`h-full w-full max-w-[initial] lg:max-w-full object-cover align-middle`}
        sizes="300px"
      />
    </div>
  );
};

export default SectionalCard;
