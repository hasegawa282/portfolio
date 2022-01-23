import 'styles/globals.css';
import PfLayout from 'components/molucules/PfLayout';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <PfLayout>
            <Component {...pageProps} />
        </PfLayout>
    );
}

export default MyApp;
