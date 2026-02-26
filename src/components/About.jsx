import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="snap-start min-h-screen flex items-center px-6 bg-white dark:bg-black relative overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-200">About </span>
            <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            สำเร็จการศึกษาสาขาวิทยาการคอมพิวเตอร์ มีประสบการณ์ฝึกสหกิจ 4 เดือน
            มีความรู้ ความสามารถในการเขียนโปรแกรมอยู่ในระดับหนึ่ง
            พร้อมเรียนรู้สิ่งใหม่ๆเสมอ
          </p>

          <p className="text-gray-400 leading-relaxed">
            สำเร็จการศึกษา : ปี 2567 <br/> GPA : 3.13
          </p>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-100 dark:bg-gray-900/60 backdrop-blur-lg border border-cyan-500/20 p-8 rounded-2xl shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 transition"
        >
          <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
            Developer Profile
          </h3>

          <div className="space-y-4 text-gray-300">
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span>Role</span>
              <span className="text-cyan-400">Software Developer (Entry-Level)</span>
            </div>

            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span>Focus</span>
              <span className="text-cyan-400">Security & Performance</span>
            </div>

            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span>Stack</span>
              <span className="text-cyan-400">html / css / JavaScript / php</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
