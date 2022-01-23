import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
    children?: ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <div>
            <Head>
                <title>MyTemplate</title>
            </Head>

            <header className=''>
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </header>

            <div className='content'>{children}</div>

            <footer className=''></footer>
        </div>
    );
};

export default Layout;
