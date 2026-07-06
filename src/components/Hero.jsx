
import ProfilePic from "../assets/profile.jpg";

function Hero() {

  return (
    <section id="hero" className="min-h-screen flex items-center bg-white dark:bg-black px-6">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE (เหมือนเดิมของคุณ) */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-200">Hi, I'm </span>
            <span className="text-cyan-400">Thanakorn Prasanram</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-8">
            Passionate about coding and solving complex problems. I love collaborating with others to build modern, effective solutions that make an impact.
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
          <div className="relative" >
            {/* 🔥 Neon Pulse Ring */}
            <div
              className="absolute inset-0 rounded-full border-2 border-cyan-400"
              
            />

            {/* 🔥 Soft Glow Layer */}
            <div
              className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl"
              
            />

            {/* 🧑 รูปโปรไฟล์ */}
            <img
              src={ProfilePic}
              alt="Profile"
              className="relative w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-cyan-500 shadow-lg shadow-cyan-500/40"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
