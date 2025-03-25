import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Only redirect client-side if SSR redirect fails
    if (typeof window !== 'undefined') {
      router.push('/thirdbridge');
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-lg">Redirecting to main content...</p>
    </div>
  );
}

// Add server-side redirect as a backup
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  if (res) {
    res.writeHead(302, { Location: '/thirdbridge' });
    res.end();
  }
  
  return { props: {} };
} 