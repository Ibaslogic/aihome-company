import { getBoardOfDirectors } from '@/lib/client';
import Heading from './Heading';
import PersonCard from './PersonCard';

const BoardOfDirectors = async () => {
  const bod = await getBoardOfDirectors();

  return (
    <div>
      <Heading
        title="Board of Directors"
        component="h2"
        className="text-center py-10 md:pb-8 text-4xl md:text-[2.5rem] mb-2 sm:mb-8"
      />
      <div className="grid gap-8 sm:gap-y-16 sm:gap-x-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-5 max-w-[500px] sm:max-w-full mx-auto">
        {bod.map((item) => (
          <PersonCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BoardOfDirectors;
