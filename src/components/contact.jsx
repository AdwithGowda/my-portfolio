import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, useGLTF, Environment } from '@react-three/drei'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

function EarthModel() {
    const { scene } = useGLTF('/earth.glb')
    return (
        <Float speed={1} rotationIntensity={1} floatIntensity={1.2}>
            <primitive object={scene} scale={2.2} />
        </Float>
    )
}
useGLTF.preload('/earth.glb')

const Contact = () => {
    const contactInfo = {
        email: "gowdaadwith@gmail.com",
        linkedin: "YOUR_LINKEDIN_URL",
        github: "YOUR_GITHUB_URL",
    }

    return (
        <section
            id="contact"
            className="relative min-h-screen flex flex-col items-center justify-center px-6 py-28 bg-slate-950
"
        >
            <h1 className="absolute top-[-5rem] left-0 right-0 text-center text-[15vw] font-black bg-gradient-to-b from-blue-400 to-transparent bg-clip-text text-transparent tracking-tighter pointer-events-none z-0">
                CONTACT
            </h1>

            <motion.div
                className="w-full max-w-5xl bg-slate-900/40 backdrop-blur-2xl border border-blue-500/30 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center md:items-start p-10 relative z-10 gap-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="flex-1">
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-100 mb-4">
                        Get In Touch ✨
                    </h2>

                    <p className="text-lg text-gray-300 leading-relaxed mb-8">
                        Open to new opportunities and conversations.
                        If you'd like to connect or discuss something,
                        I'd be glad to hear from you
                    </p>

                    <a
                        href={`mailto:${contactInfo.email}`}
                        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-lg font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition duration-300 shadow-lg mb-8"
                    >
                        <FaEnvelope className="mr-3 text-xl" />
                        Send a Message
                    </a>

                    <div>
                        <h3 className="text-xl font-semibold text-blue-200 mb-4">
                            Connect with me
                        </h3>
                        <div className="flex space-x-6">
                            <a
                                href={contactInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-400 transition hover:scale-125"
                            >
                                <FaLinkedin size={32} />
                            </a>

                            <a
                                href={contactInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-400 transition hover:scale-125"
                            >
                                <FaGithub size={32} />
                            </a>

                            <a
                                href={`mailto:${contactInfo.email}`}
                                className="text-gray-400 hover:text-blue-400 transition hover:scale-125"
                            >
                                <FaEnvelope size={32} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex-1 h-[300px] md:h-[350px] w-full cursor-grab">
                    <Canvas camera={{ position: [0, 0, 6], fov: 35 }}>
                        <ambientLight intensity={1.2} />
                        <directionalLight position={[5, 5, 5]} intensity={2} />

                        <Suspense fallback={null}>
                            <EarthModel />
                            <Environment preset="sunset" />
                        </Suspense>

                        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
                    </Canvas>
                </div>
            </motion.div>
        </section>
    )
}

export default Contact
