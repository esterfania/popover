import React from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { GlobalStyle } from '../styles/global';
export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}
