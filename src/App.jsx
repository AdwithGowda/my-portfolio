import React from "react";
import Navigation from "./components/navigation";
import "./index.css"; 
import Abouts from "./components/about";
import Home from "./components/home";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";

const App = () => {
  return (
    <div className="bg-white text-black min-h-screen scroll-smooth font-sans">
      <Navigation /> 
       <div id="home">
        <Home />
      </div>
       <div id="abouts">
        <Abouts />
      </div>
       <div id="skills">
        <Skills/> 
      </div>
       <div id="projects">
        <Projects />
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