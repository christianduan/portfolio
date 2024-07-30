import React from 'react';
import {Box, Toolbar, AppBar, Button} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {

    const router = useRouter();

    return (
        <AppBar sx={{position: 'sticky', backgroundColor: '#282A36', height: '125px'}}>
            <Toolbar display="flex" justifyContent="space-between">
                <h1 sx={{fontSize: '80px'}}>
                    Christian Duan
                </h1>
                <Box sx={{display : 'flex', justifyContent: 'right', marginTop: '100px', marginBottom: '20px', flexGrow: 1}}>
                    <Link href={'/'}>
                        <Button sx={{
                            fontSize: '25px',
                            fontWeight:router.pathname === '/' ? 'bold' : 'inherit',
                            textDecoration: router.pathname === '/' ? 'underline' : 'none',
                            color: 'white'
                        }}>
                            Home
                        </Button>
                    </Link>
                    <Link href={'/projects'}>
                        <Button sx={{
                            fontSize: '25px',
                            fontWeight:router.pathname === '/projects' ? 'bold' : 'inherit',
                            textDecoration: router.pathname === '/projects' ? 'underline' : 'none',
                            color: 'white'
                        }}>
                            Projects
                        </Button>
                    </Link>
                    <Link href={'/contact'}>
                        <Button sx={{
                            fontSize: '25px',
                            fontWeight:router.pathname === '/contact' ? 'bold' : 'inherit',
                            textDecoration: router.pathname === '/contact' ? 'underline' : 'none',
                            color: 'white'
                        }}>
                            Contact
                        </Button>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
}