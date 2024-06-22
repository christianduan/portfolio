import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';

export default function App({ Component, pageProps }) {
    return (
        <>
            <CssBaseline/>
            <Component {...pageProps}/>
        </>
    );
}