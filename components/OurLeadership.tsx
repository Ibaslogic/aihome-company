import { getLeadership } from '@/lib/client';
import PersonCard from './PersonCard';
import Heading from './Heading';

const OurLeadership = async () => {
  const leadership = await getLeadership();

  return (
    <section className="mb-12 sm:mb-24 mt-16">
      <Heading
        title="Leadership team"
        component="h2"
        className="text-center py-10 md:pb-8 text-4xl md:text-5xl mb-2 sm:mb-8"
      />
      <div className="grid gap-8 sm:gap-y-16 sm:gap-x-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-5 max-w-[500px] sm:max-w-full mx-auto">
        {leadership.map((item) => (
          <PersonCard key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default OurLeadership;
