"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
    const [selectedProject, setSelectedProject] = useState(projects[0]);

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
            <div className="relative z-10 w-full max-w-[90rem] px-4 sm:px-10 mt-16 sm:mt-24">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* LEFT PANE: Minimal Project List */}
                    <div className="w-full lg:w-[35%] flex flex-col justify-center gap-8 lg:pr-10 border-r border-white/5">
                        
                        {/* Section Header */}
                        <div className="mb-4">
                            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black bg-gradient-to-b from-blue-400 to-transparent bg-clip-text text-transparent tracking-tighter w-fit">
                                PROJECTS
                            </h2>
                        </div>
                        {projects.map((project, index) => {
                            const isActive = selectedProject.id === project.id;

                            return (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
                                >
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="group w-full text-left relative py-4 flex items-center"
                                    >
                                        {/* Active Line Indicator */}
                                        <div className="w-12 h-px bg-slate-800 mr-6 relative overflow-hidden transition-colors duration-500">
                                            {isActive && (
                                                <motion.div
                                                    layoutId="active-line"
                                                    className="absolute inset-0 bg-blue-500"
                                                    initial={false}
                                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                />
                                            )}
                                        </div>

                                        <div className="flex flex-col flex-1">
                                            <div className="flex items-center gap-4 mb-1">
                                                <span className={`font-mono text-sm transition-colors duration-500 ${isActive ? 'text-blue-500' : 'text-slate-600'}`}>
                                                    {project.id}
                                                </span>
                                                <span className={`text-xs uppercase tracking-widest font-semibold transition-colors duration-500 ${isActive ? 'text-slate-400' : 'text-slate-700'}`}>
                                                    {project.subtitle}
                                                </span>
                                            </div>

                                            <h3 className={`text-4xl lg:text-5xl font-bold tracking-tighter transition-all duration-500 ${isActive ? 'text-white translate-x-2' : 'text-slate-500 group-hover:text-slate-300'
                                                }`}>
                                                {project.title}
                                            </h3>
                                        </div>
                                    </button>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* RIGHT PANE: Monitor Display Details */}
                    <div className="w-full lg:w-[65%] flex flex-col items-center justify-center relative group">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedProject.id}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="w-full h-full flex flex-col items-center"
                            >

                                {/* Monitor Graphic Container */}
                                <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-0">

                                    {/* Monitor Frame */}
                                    <div className="relative rounded-t-2xl sm:rounded-t-3xl border-8 sm:border-[12px] border-slate-800 bg-slate-900 shadow-2xl aspect-video overflow-hidden">
                                        {/* WebCam / Inner Bezel Highlight */}
                                        <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-transparent via-white/5 to-transparent z-20" />
                                        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-950 z-20 border border-white/5" />

                                        {/* Image Viewport (The Screen itself) */}
                                        <div className="relative w-full h-full bg-slate-950 overflow-hidden">
                                            <img
                                                src={selectedProject.image || "/placeholder.png"}
                                                alt={selectedProject.title}
                                                className="w-full h-full object-cover sm:object-top transition-transform duration-[15s] ease-linear group-hover:scale-110"
                                            />
                                            {/* Screen glare effect */}
                                            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                                        </div>
                                    </div>

                                    {/* Monitor Chin / Bottom Bezel */}
                                    <div className="relative w-full h-6 sm:h-8 bg-slate-800 rounded-b-xl sm:rounded-b-2xl border-t border-slate-700/50 flex items-center justify-center">
                                        {/* Logo placeholder */}
                                        <div className="w-12 h-1 rounded-full bg-slate-700/50" />
                                    </div>

                                    {/* Monitor Stand Base */}
                                    <div className="relative w-32 sm:w-48 h-12 sm:h-auto mx-auto perspective-1000 flex flex-col items-center">
                                        {/* Neck */}
                                        <div className="w-12 sm:w-16 h-8 sm:h-12 bg-linear-to-b from-slate-800 to-slate-700 shadow-inner" />
                                        {/* Base foot */}
                                        <div className="w-full h-4 sm:h-6 bg-slate-700 rounded-t-xl sm:rounded-t-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] border-t border-slate-600/50" />
                                        <div className="w-[110%] h-1 sm:h-2 bg-slate-800 rounded-b-xl opacity-50 blur-sm" />
                                    </div>

                                </div>

                                {/* Text Details Area (Below the Monitor) */}
                                <div className="w-full max-w-4xl mx-auto mt-8 sm:mt-12 px-4 sm:px-8 text-center sm:text-left">
                                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                                        <div className="max-w-2xl">
                                            <motion.h2
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2, duration: 0.5 }}
                                                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4"
                                            >
                                                {selectedProject.title}
                                            </motion.h2>
                                            <motion.p
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3, duration: 0.5 }}
                                                className="text-slate-400 text-base sm:text-lg leading-relaxed font-light"
                                            >
                                                {selectedProject.desc}
                                            </motion.p>
                                        </div>

                                        <motion.button
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.4, duration: 0.5 }}
                                            onClick={() => window.open(selectedProject.link, "_blank")}
                                            className="shrink-0 flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300"
                                        >
                                            <span>View Live Site</span>
                                            <ArrowUpRight className="w-5 h-5" />
                                        </motion.button>
                                    </div>
                                </div>

                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
