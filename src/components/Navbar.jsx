
function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav
      className="
      fixed w-full z-50 backdrop-blur-md 
      bg-white/70 dark:bg-black/60 
      border-b border-gray-300 dark:border-cyan-500/20
      transition-colors duration-500
    "
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* 🔥 Logo */}
        <a href="#hero">
          <h1 className="text-xl font-bold text-cyan-400 tracking-widest">
            ONG.dev
          </h1>
        </a>

        <div className="flex items-center gap-8">
          {/* Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-300">
            <li>
              <a
                href="#about"
                className="hover:text-cyan-500 dark:hover:text-cyan-400 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-cyan-500 dark:hover:text-cyan-400 transition"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-cyan-500 dark:hover:text-cyan-400 transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-cyan-500 dark:hover:text-cyan-400 transition"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* 🌙 Dark / Light Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative w-14 h-7 flex items-center 
              bg-gray-300 dark:bg-gray-700 
              rounded-full p-1 transition-colors duration-500"
          >
            <div
              className={`w-5 h-5 rounded-full 
                bg-white dark:bg-cyan-400 
                shadow-md transform transition-transform duration-500
                ${darkMode ? "translate-x-7" : ""}
              `}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
