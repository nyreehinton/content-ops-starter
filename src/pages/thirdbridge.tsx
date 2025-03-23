import ThirdBridgePage from '@/components/thirdbridge/ThirdBridgePage';
import Head from 'next/head';

export default function ThirdBridgePlatform() {
  return (
    <>
      <Head>
        <title>ThirdBridge Platform</title>
        <meta name="description" content="ThirdBridge analysis platform" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      <ThirdBridgePage />
    </>
  );
}