import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Projects = () => {
    return (
        <Box 
            sx={{ display: 'flex', justifyContent: 'center'}}>
            <Grid container spacing={2} padding={2} sx={{ width: '1200px' }}>
                {/* Project 1 */}
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        padding: '20px',
                        backgroundColor: '#282A36',
                        borderRadius: '8px',
                        height: '100%',
                    }}>
                        <Typography variant="h6" style={{ color: 'white', textDecoration: 'underline', textAlign: 'center' }}>
                        Electronic Water Scheduling Program
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <img src= "/EWSP.png" alt="EWSP" 
                                style={{
                                    width: '100%',
                                    borderRadius: '8px',
                            }}/>
                        </Box>
                        <Typography style={{ color: 'white' }}>
                        A simple redesign of the current Electronic Water Scheduling Program the folks at
                        Turlock Irrigation District, TID, were using. The redesign was implemented using the
                        React framework, Material UI library, and the FlaskAPI.
                        </Typography>
                    </Box>
                </Grid>
                
                {/* Project 2 */}
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        padding: '20px',
                        backgroundColor: '#282A36',
                        borderRadius: '8px',
                        height: '100%'
                    }}>
                        <Typography variant="h6" style={{ color: 'white', textDecoration: 'underline', textAlign: 'center' }}>
                        Web Music Player
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <img src= "/musicPlayer.png" alt="MusicPlayer" 
                                style={{
                                    width: '100%',
                                    borderRadius: '8px',
                            }}/>
                        </Box>
                        <Typography style={{ color: 'white' }}>
                        A simple web-based music player created using HTML and JavaScript. The app utilizes
                        preloaded songs that the users can add at their liesure and play them using the app.
                        Further addition of using an API to fetch songs and their metadata is yet to be added
                        currently.
                        </Typography>
                    </Box>
                </Grid>
        </Grid>
        </Box>

    );
};

export default Projects;
