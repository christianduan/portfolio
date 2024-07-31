import React from 'react';
import {Box, Toolbar, AppBar, Button} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {

    const router = useRouter();

    return (
        <AppBar sx={{position: 'sticky', backgroundColor: '#282A36', height: 'auto'}}>
            <Toolbar display="flex" justifyContent="space-between">
                <h1 sx={{fontSize: '80px'}}>
                    Christian Duan
                </h1>
            </Toolbar>
        </AppBar>
    );
}