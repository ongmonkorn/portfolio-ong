import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend",
    tech: "Html, CSS, JavaScript, React, Tailwind CSS",
  },
  {
    title: "Backend",
    tech: "Node.js, REST API",
  },
  {
    title: "Database",
    tech: "MySQL, SQL Server",
  },
  {
    title: "DevOps",
    tech: "GitHub, Git, Deployment, Postman, Navicat",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center px-6 bg-white dark:bg-black snap-start"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="text-gray-200">My </span>
          <span className="text-cyan-400">Skills</span>
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="bg-gray-100 dark:bg-gray-900/60 backdrop-blur-lg border border-cyan-500/20 p-8 rounded-2xl hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-2 transition"
            >
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                {skill.title}
              </h3>
              <p className="text-gray-400">{skill.tech}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
