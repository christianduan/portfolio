import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Projects = () => {
    return (
        <Grid container spacing={2} padding={2}>
            {/* Project 1 */}
            <Grid item xs={12} sm={6} md={4}>
                <Box sx={{
                    padding: '20px',
                    backgroundColor: '#282A36',
                    borderRadius: '8px',
                    height: '100%'
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
                                width: '75%',
                        }}/>
                    </Box>
                    <Typography style={{ color: 'white' }}>
                    Description for Project 1.
                    </Typography>
                </Box>
            </Grid>
            
            {/* Project 2 */}
            <Grid item xs={12} sm={6} md={4}>
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
                        <img src= "/EWSP.png" alt="EWSP" 
                            style={{
                                width: '75%',
                        }}/>
                    </Box>
                    <Typography style={{ color: 'white' }}>
                    Description for Project 2.
                    </Typography>
                </Box>
            </Grid>

            {/* Project 3 */}
            <Grid item xs={12} sm={6} md={4}>
                <Box sx={{
                    padding: '20px',
                    backgroundColor: '#282A36',
                    borderRadius: '8px',
                    height: '100%'
                }}>
                    <Typography variant="h6" style={{ color: 'white', textDecoration: 'underline', textAlign: 'center' }}>
                    Project 3
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <img src= "/EWSP.png" alt="EWSP" 
                            style={{
                                width: '75%',
                        }}/>
                    </Box>
                    <Typography style={{ color: 'white' }}>
                    Description for Project 3.
                    </Typography>
                </Box>
            </Grid>
      </Grid>
    );
};

export default Projects;
