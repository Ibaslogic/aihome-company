import { cn } from '@/lib/utils';

const Description = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        'text-center font-normal text-neutral-800 ',
        className
      )}
    >
      {text}
    </p>
  );
};

export default Description;
