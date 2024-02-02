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
        'tracking-[0.48px] text-[#434242] text-base',
        className
      )}
    >
      {text}
    </p>
  );
};

export default Description;
