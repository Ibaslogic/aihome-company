import { cn } from '@/lib/utils';

type HeadingProps = {
  title: string;
  className?: string;
  component?: 'h1' | 'h2' | 'h3';
};

const Heading = ({
  title,
  className,
  component = 'h2',
}: HeadingProps) => {
  return (
    <>
      {component === 'h1' ? (
        <h1
          className={cn(
            'font-black text-3xl text-[#2b2b2b]',
            className
          )}
        >
          {title}
        </h1>
      ) : component === 'h2' ? (
        <h2
          className={cn(
            'tracking-[0.48px] font-black text-[#2b2b2b] text-2xl mb-7',
            className
          )}
        >
          {title}
        </h2>
      ) : (
        <h3
          className={cn(
            'text-left text-xl mb-2 font-bold',
            className
          )}
        >
          {title}
        </h3>
      )}
    </>
  );
};

export default Heading;
