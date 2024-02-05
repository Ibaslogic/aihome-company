import { urlFor } from '@/lib/client';
import Image from 'next/image';

export const RichText = {
  types: {
    image: ({ value }: any) => (
      <div>
        <Image
          src={urlFor(value).url()}
          alt="post image"
          width={700}
          height={700}
          className="object-contain py-6"
        />
      </div>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="">{children}</ul>,
    number: ({ children }: any) => <ol className="">{children}</ol>,
  },
  block: {
    h2: ({ children }: any) => <h2>{children}</h2>,
  },
};
