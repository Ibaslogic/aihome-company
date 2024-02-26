import { Person } from '@/types';
import Image from 'next/image';

type PersonCard = {
  item: Person;
};

const PersonCard = ({ item }: PersonCard) => {
  return (
    <div className="flex gap-4 sm:block relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white">
      <div className="max-w-[50%] sm:max-w-full w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-2xl overflow-hidden relative pb-[50%] sm:pb-[100%]">
        {item.image && (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
          />
        )}
      </div>
      <div className="sm:text-center mt-6">
        <p className="text-blue-700 text-[15px] font-medium mb-2">
          {item.name}
        </p>
        <p className="text-sm text-gray-500">{item.title}</p>
      </div>
    </div>
  );
};

export default PersonCard;
