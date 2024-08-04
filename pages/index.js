import NavBar from "@/components/navBar";
import AboutMe from "@/components/AboutMe";
import { Box, Typography } from "@mui/material";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#44475A',
      height: '100%'
    }}>
      <NavBar/>

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}>
        <AboutMe/>
        
      </Box>

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: '20px'
      }}>
        <Typography variant="h4" style={{ color: 'white' }}>
          Projects
        </Typography>
      </Box>

      <Projects/>
      <Box sx={{
        padding: '20px',
      }}>
        <Contact/>
      </Box>
    </div>
  );
}
