import { motion } from "framer-motion";
import { GlowingEffect } from "../components/glowing-effect";
import ProfileCard from "./ProfileCard";

const Abouts = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section
      id="abouts"
      className="relative min-h-screen w-full bg-slate-950 text-white px-5 sm:px-10 py-28 md:py-40 overflow-hidden"
    >
      {/* ===== HEADER ===== */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="
          text-center
          text-[14vw] md:text-[8vw]
          font-black
          tracking-tight
          bg-gradient-to-b from-blue-400 to-transparent
          bg-clip-text text-transparent
          leading-none
          select-none
          mb-16 md:mb-24
        "
      >
        ABOUT
      </motion.h1>

      <div className="max-w-[85rem] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 relative">

        {/* ===== LEFT PANE: Profile Card ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-[35%] flex flex-col justify-center items-center lg:items-center"
        >
          <div className="relative w-full max-w-md lg:sticky lg:top-32">
            <div className="absolute inset-0 blur-[100px] bg-blue-500/20 -z-10 rounded-full" />
            <ProfileCard
              name={false}
              title={false}
              handle="javicodes"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/profile1.png"
              showUserInfo={false}
              enableTilt={true}
              enableMobileTilt
              onContactClick={() => console.log("Contact clicked")}
              behindGlowColor="hsla(192, 100%, 70%, 0.6)"
              behindGlowEnabled={false}
              innerGradient="linear-gradient(145deg,hsla(192, 40%, 45%, 0.55) 0%,hsla(160, 60%, 70%, 0.27) 100%)"
            />
          </div>
        </motion.div>

        {/* ===== RIGHT PANE: Bento Grid Content ===== */}
        <motion.div
          className="w-full lg:w-[65%] grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* WHO I AM (Full Width Card) */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-2 relative p-8 sm:p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden group hover:border-blue-500/30 transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-all duration-700" />

            <h3 className="text-xs sm:text-sm uppercase tracking-widest text-blue-400 font-semibold mb-3 relative z-10">
              Who I Am
            </h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight relative z-10">
              Hello, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Adwith</span>
            </h2>
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed font-light relative z-10 max-w-3xl">
              A Full-Stack Developer with experience in MERN and Django stacks.
              I enjoy blending strong computer science fundamentals with elegant
              UI design and smooth interactions.
            </p>
          </motion.div>

          {/* WHAT I DO (Half Width Card) */}
          <motion.div
            variants={fadeUp}
            className="relative p-8 sm:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden group hover:border-blue-500/30 transition-colors duration-500 flex flex-col justify-between"
          >
            <div className="relative z-10 h-full flex flex-col justify-center">
              <h3 className="text-xs sm:text-sm uppercase tracking-widest text-blue-400 font-semibold mb-6">
                What I Do
              </h3>
              <div className="text-slate-300 text-base sm:text-lg leading-relaxed font-light space-y-4">
                <p className="flex items-start gap-4"><span className="text-blue-500 font-bold">•</span> Build scalable full-stack applications</p>
                <p className="flex items-start gap-4"><span className="text-blue-500 font-bold">•</span> Craft modern UI with animation & motion</p>
                <p className="flex items-start gap-4"><span className="text-blue-500 font-bold">•</span> Continuously explore new technologies</p>
              </div>
            </div>
            {/* Keeping the user's initial GlowingEffect */}
            <GlowingEffect
              spread={40}
              glow
              proximity={64}
              inactiveZone={0.01}
              borderWidth={2}
            />
          </motion.div>

          {/* EDUCATION (Half Width Card) */}
          <motion.div
            variants={fadeUp}
            className="relative p-8 sm:p-10 rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 overflow-hidden group hover:border-blue-500/30 transition-colors duration-500 flex flex-col justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-xs sm:text-sm uppercase tracking-widest text-blue-400 font-semibold mb-6 relative z-10">
              Education
            </h3>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light relative z-10">
              Bachelor’s in Computer Science & Engineering with a strong
              understanding of algorithms, systems, and modern software
              architecture.
            </p>
          </motion.div>

          {/* CONTACT & CTA (Full Width Footer style) */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-950/40 to-slate-900/60 border border-blue-500/20 mt-2 backdrop-blur-xl"
          >
            <div className="flex flex-col mb-6 sm:mb-0 text-center sm:text-left">
              <span className="text-slate-400 text-sm mb-1">Get in touch directly</span>
              <a
                href="mailto:gowdaadwith@gmail.com"
                className="text-lg sm:text-2xl font-medium text-slate-200 hover:text-white transition-colors"
              >
                gowdaadwith@gmail.com
              </a>
            </div>

            <a
              href="#contact"
              className="
                px-8 py-4 sm:px-10 sm:py-5 rounded-full text-base sm:text-lg font-bold
                bg-blue-600 text-white shadow-lg
                hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]
                transition-all duration-300 transform hover:-translate-y-1
              "
            >
              Hire / Contact Me →
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Abouts;