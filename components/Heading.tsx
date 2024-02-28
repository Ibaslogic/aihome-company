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
            'font-black bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50 pb-2',
            className
          )}
        >
          {title}
        </h1>
      ) : component === 'h2' ? (
        <h2
          className={cn(
            'bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50 pb-2',
            className
          )}
        >
          {title}
        </h2>
      ) : (
        <h3
          className={cn(
            'bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50 pb-2',
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
