import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import ProfilePic from "../assets/profile.jpg";

function Hero() {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section id="hero" className="snap-start min-h-screen flex items-center bg-white dark:bg-black px-6">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE (เหมือนเดิมของคุณ) */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-200">Hi, I'm </span>
            <span className="text-cyan-400">Thanakorn Prasanram</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-8">
            Software Developer (Entry-Level)
          </p>
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="#projects"
              className="bg-cyan-500 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/30"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center md:justify-end perspective-[1000px]">
          <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="relative"
          >
            {/* 🔥 Neon Pulse Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-cyan-400"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 0.2, 0.6],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* 🔥 Soft Glow Layer */}
            <motion.div
              className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* 🧑 รูปโปรไฟล์ */}
            <img
              src={ProfilePic}
              alt="Profile"
              className="relative w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-cyan-500 shadow-lg shadow-cyan-500/40"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
