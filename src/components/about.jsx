import { motion } from "framer-motion";
import { GlowingEffect } from "../components/glowing-effect";

const Abouts = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="abouts"
      className="relative min-h-screen w-full bg-slate-950 text-white px-5 sm:px-6 py-28 md:py-40 overflow-hidden"
    >
      {/* ===== MOBILE HORIZONTAL ABOUT ===== */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="
          md:hidden
          text-center
          text-[18vw]
          font-black
          tracking-tight
          bg-linear-to-b from-blue-400 to-transparent
          bg-clip-text text-transparent
          leading-none
          select-none
          mb-20
        "
      >
        ABOUT
      </motion.h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_3px_2fr] gap-14 md:gap-16 relative">
        {/* ===== DESKTOP VERTICAL ABOUT ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:flex sticky top-32 justify-end"
        >
          <div className="relative -translate-x-12">
            <span
              className="
                block
                text-[12vw]
                font-black tracking-tight
                bg-linear-to-b from-blue-400 to-transparent
                bg-clip-text text-transparent
                leading-none
                select-none
                rotate-180
              "
              style={{ writingMode: "vertical-rl" }}
            >
              ABOUT
            </span>

            <div className="absolute inset-0 blur-[80px] bg-blue-500/20 -z-10" />
          </div>
        </motion.div>

        {/* ===== CENTER TIMELINE (DESKTOP ONLY) ===== */}
        <div className="hidden md:flex justify-center">
          <div className="w-[3px] bg-linear-to-b from-blue-400/80 via-cyan-300/40 to-transparent rounded-full" />
        </div>

        {/* ===== CONTENT ===== */}
        <div className="flex flex-col gap-16 md:gap-20">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h3 className="text-sm uppercase tracking-widest text-blue-300 mb-3">
              Who I Am
            </h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Hello, I’m <span className="text-blue-300">Adwith</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              A Full-Stack Developer with experience in MERN and Django stacks.
              I enjoy blending strong computer science fundamentals with elegant
              UI design and smooth interactions.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="relative p-6 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10"
          >
            <h3 className="text-sm uppercase tracking-widest text-blue-300 mb-3">
              What I Do
            </h3>
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
              • Build scalable full-stack applications<br />
              • Craft modern UI with animation & motion<br />
              • Continuously explore new technologies
            </p>

            <GlowingEffect
              spread={45}
              glow
              proximity={70}
              inactiveZone={0.01}
              borderWidth={3}
            />
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h3 className="text-sm uppercase tracking-widest text-blue-300 mb-3">
              Education
            </h3>
            <p className="text-gray-300 text-base sm:text-lg">
              Bachelor’s in Computer Science & Engineering with a strong
              understanding of algorithms, systems, and modern software
              architecture.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6"
          >
            <a
              href="mailto:gowdaadwith@gmail.com"
              className="text-base sm:text-lg text-blue-300 underline hover:text-cyan-300 transition"
            >
              gowdaadwith@gmail.com
            </a>

            <a
              href="#contact"
              className="
                px-7 py-3 rounded-full text-base sm:text-lg font-medium
                bg-linear-to-r from-blue-600 to-cyan-500
                hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]
                transition
              "
            >
              Hire / Contact Me →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Abouts;
