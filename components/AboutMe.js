import React from "react";
import Box from "@mui/material/Box";

export default function AboutMe() {
    return (
        <Box sx={{
            backgroundColor: '#282A36', 
            height: 'flex', 
            width: '500px',
            marginTop: '10px', 
            marginLeft: '10px', 
            padding: '10px',
            borderRadius: '25px'
        }}>
            <h1 style={{color: 'white', }}>About Me</h1>
            <p style={{color: 'white'}}>Hello, my name is Christian Duan. I'm a software engineer and recent graduate of the
                University of California, Merced with a bachelor's degree in Computer Science. </p>
        </Box>
    );
}