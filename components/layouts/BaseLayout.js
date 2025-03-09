import React from 'react';
import Head from 'next/head';

const BaseLayout = ({ children, pageTitle, pageDescription }) => {
    return (
        <>
            <Head>
                <title> {pageTitle || 'Nyree Hinton | Financial Analyst & Product Manager'} </title>{' '}
                <meta
                    name="description"
                    content={
                        pageDescription ||
                        'Portfolio showcasing ETF data product management experience, featuring ETF fundamentals, strategy, and data management achievements.'
                    }
                />{' '}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
                <link rel="stylesheet" href="/css/global-header.css" />
            </Head>{' '}
            <div className="site-wrapper"> {children} </div> <script src="/js/header-behavior.js"> </script>{' '}
        </>
    );
};

export default BaseLayout;
