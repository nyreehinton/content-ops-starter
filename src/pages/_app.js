import '../css/main.css';
import '../styles/thirdbridge-new/ThirdBridge.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head> {/* Font Awesome stylesheet moved to _document.tsx */} </Head> <Component {...pageProps} />{' '}
        </>
    );
}
