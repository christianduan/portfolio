import NavBar from "@/components/navBar";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#44475A',
      height: '100vh'
    }}>
      <NavBar/>
      <AboutMe/>
    </div>
  );
}
