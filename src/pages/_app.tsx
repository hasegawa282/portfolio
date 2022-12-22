import React, { useEffect } from 'react';
import 'styles/globals.css';
import PfLayout from 'components/atoms/PfLayout';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        jssStyles?.parentElement?.removeChild(jssStyles);
    }, []);
    return (
        <PfLayout>
            <Component {...pageProps} />
        </PfLayout>
    );
}

export default MyApp;
