import React from "react";
import Navigation from "./components/navigation";
import "./index.css"; 
import Abouts from "./components/about";
import Home from "./components/home";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import OrbitingSkills from './components/orbiting-skills';
import Projects2 from "./components/projects2";

const App = () => {
  return (
    <div className="bg-white text-black min-h-screen scroll-smooth font-sans">
      <Navigation /> 
       <div id="home">
        <Home />
      </div>
       <div id="abouts">
        <Abouts />
      <div id="skills" className="min-h-screen flex items-center justify-center bg-slate-950" >
      <OrbitingSkills />
      </div>
      </div>
       {/* <div id="skills">
        <Skills/> 
      </div> */}
      <div id="projects">
        {/* Mobile view: Original Projects */}
        <div className="block md:hidden">
          <Projects />
        </div>
        
        {/* Desktop view: New Projects Layout */}
        <div className="hidden md:block">
          <Projects2 />
        </div>
      </div>

      <div id="contact">
        <Contact />
      </div>
      {/* <div>
        <AgriConnectDashboard />
      </div> */}
    </div>
  );
};

export default App;