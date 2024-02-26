import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

type ContainerProps = {
  className?: string;
} & ComponentProps<'div'>;

const Container = ({ className, ...props }: ContainerProps) => {
  return (
    <div
      className={cn('mx-auto px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  );
};

export default Container;
