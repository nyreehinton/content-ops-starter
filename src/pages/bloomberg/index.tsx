import { useEffect } from 'react';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';

interface Props {
  htmlContent: string;
}

export default function BloombergIntelligence({ htmlContent }: Props) {
  useEffect(() => {
    // Initialize Chart.js and other scripts after component mounts
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script1.async = true;

    const script2 = document.createElement('script');
    script2.src = 'https://d3js.org/d3.v7.min.js';
    script2.async = true;

    const script3 = document.createElement('script');
    script3.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js';
    script3.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);
    document.body.appendChild(script3);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.body.removeChild(script3);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Bloomberg Intelligence: Semiconductor Analysis</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'pages', 'bloomberg', 'index.html');
  const htmlContent = fs.readFileSync(filePath, 'utf8');

  return {
    props: {
      htmlContent,
    },
  };
} 