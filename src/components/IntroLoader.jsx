import { motion } from "framer-motion"

function IntroLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3, duration: 1 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-[9999] overflow-hidden"
    >
      {/* Animated Grid */}
      <div className="grid-bg"></div>

      {/* Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

      <div className="relative text-center">

        <motion.h1
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          animate={{ opacity: 1, letterSpacing: "0.2em" }}
          transition={{ duration: 1.5 }}
          className="text-4xl md:text-6xl font-bold text-cyan-400"
        >
          ONG.dev
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "220px" }}
          transition={{ delay: 1.2, duration: 1 }}
          className="h-[2px] bg-cyan-400 mx-auto mt-6 shadow-lg shadow-cyan-500/60"
        />

      </div>
    </motion.div>
  )
}

export default IntroLoader