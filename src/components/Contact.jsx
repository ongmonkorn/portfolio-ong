// import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-6 bg-white dark:bg-black relative overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          <span className="text-gray-200">Contact </span>
          <span className="text-cyan-400">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Email Button */}
          <a
            href="mailto:ongtama.ong@gmail.com"
            className="bg-cyan-500 px-8 py-4 rounded-xl font-semibold text-black hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/30"
          >
            Email Me
          </a>

          {/* GitHub Button */}
          <a
            href="https://github.com/ongmonkorn"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition"
          >
            GitHub
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.instagram.com/eun0ng.zip/"
            className="border border-gray-600 px-8 py-4 rounded-xl font-semibold hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
