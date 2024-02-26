import Link from 'next/link';

import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

type LogoProps = {
  className?: string;
};

const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <Link href="/">
      <span
        className={cn('font-medium text-xl flex', className)}
        {...props}
      >
        AiHomeGroup
      </span>
    </Link>
  );
};

export default Logo;
