import '../css/main.css';
import '../styles/thirdbridge-new/ThirdBridge.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            </Head>{' '}
            <Component {...pageProps} />{' '}
        </>
    );
}
