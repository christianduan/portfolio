import NavBar from "@/components/navBar";
import AboutMe from "@/components/AboutMe";
import { Box, Typography } from "@mui/material";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#44475A',
      height: '100vh'
    }}>
      <NavBar/>

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}>
        <AboutMe/>
        <Box sx={{ flexShrink: 0, marginLeft: '20px' }}>
          <img src="/me.jpg" alt="Me"
            style={{
              width: '200px',
              borderRadius: '50%',
            }}/>
        </Box>
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
      
    </div>
  );
}
