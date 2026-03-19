import React from "react";
import Lanyard from "./Lanyard";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const socialLinks = {
  github: "YOUR_GITHUB_URL",
  linkedin: "YOUR_LINKEDIN_URL",
  email: "mailto:YOUR_EMAIL_ADDRESS",
};

const resumeLink = "YOUR_RESUME_LINK.pdf";

const Icon = ({ children, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl sm:text-3xl mx-2 transition-transform duration-300 hover:scale-110 hover:-translate-y-0.5 inline-block"
  >
    {children}
  </a>
);

const Home = () => {
  return (
    <section
      id="home"
      className="
        min-h-screen w-full
        flex items-center justify-center
        px-5 sm:px-10
        bg-slate-950 text-white
        overflow-hidden
      "
    >
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between">

        {/* ⭐ TEXT SECTION */}
        <div
          className="
            w-full md:w-1/2
            flex flex-col justify-center
            text-left
            md:pl-20
          "
        >
          <p className="text-base sm:text-lg md:text-4xl mb-2">
            Hello, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2">
            {Array.from("Adwith").map((ch, i) => (
              <span
                key={i}
                className="inline-block transition-all duration-200 mr-0.5 hover:text-gray-400 hover:-translate-y-1 hover:scale-105"
              >
                {ch}
              </span>
            ))}
          </h1>

          <p className="text-sm sm:text-base md:text-lg mt-4 max-w-xl">
            A Computer Science Engineer, passionate about learning,
            growing, and creating impactful solutions.
          </p>

          {/* 🔥 Buttons — SIDE BY SIDE ON MOBILE */}
          <div className="flex flex-row items-center gap-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 rounded-full hover:bg-gray-800 hover:scale-105 transition"
            >
              View My Work
            </a>

            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white rounded-full hover:bg-black hover:scale-105 transition"
            >
              My Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-start mt-6">
            <Icon href={socialLinks.github}><FaGithub /></Icon>
            <Icon href={socialLinks.linkedin}><FaLinkedinIn /></Icon>
            <Icon href={socialLinks.email}><BiLogoGmail /></Icon>
          </div>
        </div>

        {/* 📱 MOBILE PHOTO ONLY */}
        {/* <div className="md:hidden w-full flex justify-center mt-14">
          <img
            src="/profile.jpg"
            alt="Adwith"
            className="
              w-75 h-75
              rounded-2xl
              object-cover
              shadow-lg shadow-white
              border border-white/10
            "
          />
        </div> */}

        {/* 🖥 DESKTOP 3D MODEL ONLY */}
        <div className="hidden md:flex w-1/2 h-[500px] justify-center items-center">
          <Lanyard position={[0, 0, 12]} gravity={[0, -30, 0]} scale={0.9} />
        </div>

      </div>
    </section>
  );
};

export default Home;
