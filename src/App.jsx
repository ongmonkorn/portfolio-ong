import { useEffect, useState } from "react";
import IntroLoader from "./components/IntroLoader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  // 🔥 Intro Loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  // 🔥 โหลด theme จาก localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setDarkMode(false);
    }
  }, []);

  // 🔥 อัปเดต class dark บน <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      {loading && <IntroLoader />}

      {!loading && (
        <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory transition-colors duration-500 bg-white dark:bg-black text-black dark:text-gray-200">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;
