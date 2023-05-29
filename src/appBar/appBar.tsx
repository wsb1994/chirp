import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';


import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { SignOutButton, useUser } from "@clerk/clerk-react";
import { SignInButton } from "@clerk/clerk-react";
import { useRouter } from 'next/router';



const DrawerAppBar = () => {
    const router = useRouter();
    const user = useUser();


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar className='navbar'>

                    <Box className="navbaritem" sx={{ display: { sm: 'block' } }}>
                        <button onClick={() => { void router.replace('/'); }}>
                            Home
                        </button>
                    </Box>


                    <Box className="navbaritem" sx={{ display: { sm: 'block' } }}>
                        <button onClick={() => { void router.push('/myChirps'); }}>
                            My Chirps
                        </button>
                    </Box>

                    <Box className="navbaritem" sx={{ display: { sm: 'block' } }}>
                        <button onClick={() => { void router.push('/newChirp'); }}>
                            New Chirp
                        </button>
                    </Box>

                    <Box className="navbaritem" sx={{ display: { sm: 'block' } }}>

                        <Typography>
                            {user.isSignedIn && <SignOutButton />}
                        </Typography>
                        <Typography >
                            {!user.isSignedIn && <SignInButton />}
                        </Typography>
                    </Box>

                </Toolbar>
            </AppBar>
            <Box component="nav">

            </Box>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />

            </Box>
        </Box>
    );
}

export default DrawerAppBar;