import React from "react";
import Box from "@mui/material/Box";

export default function AboutMe() {
    return (
        <Box sx={{
            backgroundColor: '#282A36', 
            height: 'flex', 
            width: '900px',
            marginTop: '10px', 
            marginLeft: '10px', 
            padding: '10px',
            borderRadius: '20px'
        }}>
            <h1 style={{color: 'white', }}>Hello, I'm Christian.</h1>
            <p style={{color: 'white'}}>I'm an aspiring software engineer and recent graduate of the
                University of California, Merced with a bachelor's degree in Computer Science. I'm passionate about learning
                new ways of coding that improve my skills. I've worked on many different projects ranging from web development 
                to UI/UX design. I'm located in the Bay Area and looking for new opportunities to put my skills to use.</p>
        </Box>
    );
}