import React from "react";
import { Box, Button } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <a 
                href="https://www.linkedin.com/in/christian-duan-1bbb57123/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<LinkedInIcon/>}
                    sx={{ marginRight: '10px'}}
                >
                    LinkedIn
                </Button>
            </a>
            <a
                href="https://github.com/christianduan"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<GitHubIcon/>}
                    sx={{ marginRight: '10px'}}
                >
                    GitHub
                </Button>
            </a>
        </Box>
    )
}