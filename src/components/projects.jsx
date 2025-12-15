"use client";

import { motion } from "framer-motion";
import { GlowingEffect } from "../components/glowing-effect";
import { ArrowRight } from "lucide-react";


const projects = [
  {
    id: "01",
    title: "Agriculture Web App",
    subtitle: "Plant Disease Detection",
    desc: "Built a platform for farmers to detect plant diseases using image input. Integrated government schemes and crop growth insights.",
    link: "https://your-project-url-1.com",
    image: "/assets/agri.jpg",
  },
  {
    id: "02",
    title: "Quiz Web App",
    subtitle: "Score Tracking & Results",
    desc: "Developed a quiz application with score tracking and instant result display. Implemented user interaction and session-based scoring logic.",
    link: "https://your-project-url-2.com",
    image: "/assets/quiz.png",
  },
  {
    id: "03",
    title: "Hostel Management",
    subtitle: "Digital Administration",
    desc: "Created a digital platform to automate hostel administration. Features included room allocation, student records, and task tracking.",
    link: "https://your-project-url-3.com",
    image: "/assets/hostel.png",
  },
];

export default function Projects() {
  return (
    <section
      className="
        min-h-screen w-full py-28
        bg-slate-950
        relative overflow-hidden
        flex flex-col items-center
        text-white
      "
    >
      {/* Background Heading */}
      <h1 className="absolute top-12 left-0 right-0 mx-auto text-center text-[15vw] leading-none font-black tracking-tighter bg-linear-to-b from-blue-400 to-transparent bg-clip-text text-transparent select-none pointer-events-none z-0">
        PROJECTS
      </h1>

      {/* Motion Wrapper */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.22 },
          },
        }}
        className="relative z-10 mt-20 sm:mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-10 max-w-7xl mx-auto"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 60, scale: 0.95 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            className="relative h-full transition-transform duration-300 ease-in-out hover:scale-[1.03] group"
          >
            <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-blue-500/20 p-2 md:rounded-3xl md:p-3 bg-linear-to-br from-blue-500/10 to-slate-900/10 backdrop-blur-sm">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3.5}
              />

              {/* CARD */}
              <motion.div
                className="relative flex h-full flex-col overflow-hidden rounded-xl border-[0.75px] border-blue-500/30 bg-slate-900/50 backdrop-blur-sm shadow-lg"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
              >
                {/* IMAGE SECTION */}
                <div className="relative w-full h-44 overflow-hidden bg-slate-800">
                  <img
                    src={project.image || "/placeholder.png"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col gap-2 p-6">
                  <h3 className="text-xl font-bold tracking-tight text-blue-400">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-blue-300/70">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed mt-2 line-clamp-3">
                    {project.desc}
                  </p>

                  <button
                    onClick={() => window.open(project.link, "_blank")}
                    className="group flex items-center gap-2 text-sm font-semibold text-blue-400 mt-4 cursor-pointer hover:text-blue-300 transition-colors"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
