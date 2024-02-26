import { cn } from '@/lib/utils';

type DateProps = {
  item: string;
  className?: string;
};
const PostDate = ({ item, className }: DateProps) => {
  return (
    <span className={cn('text-sm text-gray-500', className)}>
      {new Date(item).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })}
    </span>
  );
};

export default PostDate;
