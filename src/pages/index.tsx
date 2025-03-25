import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/thirdbridge');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-lg">Redirecting to main content...</p>
    </div>
  );
} 