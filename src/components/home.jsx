import React from "react";
import Lanyard from "./Lanyard";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const socialLinks = {
  github: "YOUR_GITHUB_URL",
  linkedin: "YOUR_LINKEDIN_URL",
  email: "mailto:YOUR_EMAIL_ADDRESS",
};

const resumeLink = "YOUR_RESUME_LINK.pdf"; // ⭐ Add your resume URL here

const Icon = ({ children, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-3xl mx-2 transition-transform duration-300 hover:scale-110 hover:-translate-y-0.5 inline-block"
  >
    {children}
  </a>
);

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen w-full flex items-center justify-center px-10 transition-all duration-500 relative bg-slate-950 text-white"
    >
      <div className="w-full h-full flex items-center justify-between">
        
        {/* ⭐ FULL LEFT SCREEN TEXT SECTION */}
        <div className="flex flex-col w-1/2 h-full justify-center pl-20">
          <p className="text-lg md:text-4xl leading-relaxed mb-2">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-1 whitespace-nowrap">
            {Array.from("Adwith").map((ch, i) => (
              <span
                key={i}
                className="inline-block transform transition-all duration-200 mr-0.5 hover:text-gray-400 hover:-translate-y-1 hover:scale-105"
                style={{ willChange: "transform, color" }}
              >
                {ch}
              </span>
            ))}
          </h1>

          <p className="text-sm md:text-lg mt-5 max-w-xl">
            A Computer Science Engineer, passionate about learning, <br />
            growing, and creating impactful solutions.
          </p>

          {/* 🔥 Buttons Row */}
          <div className="flex items-center gap-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-300 inline-block"
            >
              View My Work
            </a>

            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white rounded-full hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 inline-block"
            >
              My Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center mt-6">
            <Icon href={socialLinks.github}><FaGithub /></Icon>
            <Icon href={socialLinks.linkedin}><FaLinkedinIn /></Icon>
            <Icon href={socialLinks.email}><BiLogoGmail /></Icon>
          </div>
        </div>

        {/* ⭐ RIGHT SIDE LANYARD */}
        <div className="w-1/2 h-full flex justify-center items-center">
          <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
        </div>
      </div>
    </section>
  );
};

export default Home;
