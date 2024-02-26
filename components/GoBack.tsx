'use client';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

const GoBack = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()}>
      <span className="flex gap-2 items-center">
        <ArrowLeft color="#6b7280" />
        <span>back</span>
      </span>
    </button>
  );
};

export default GoBack;
