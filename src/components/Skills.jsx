

const skills = [
  {
    title: "Frontend",
    tech: "Html, CSS, JavaScript, React, Tailwind CSS",
  },
  {
    title: "Backend",
    tech: "Node.js, REST API, Express",
  },
  {
    title: "Database",
    tech: "MySQL, SQL Server, PostgreSQL",
  },
  {
    title: "DevOps",
    tech: "GitHub, Git, Deployment, Postman, Navicat, JWT, bcryptjs",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center pt-32 px-6 bg-white dark:bg-black"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2

          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="text-gray-200">My </span>
          <span className="text-cyan-400">Skills</span>
        </h2>

        <div
          className="grid md:grid-cols-2 gap-10"

        >
          {skills.map((skill, index) => (
            <div
              key={index}

              className="bg-gray-100 dark:bg-gray-900/60 backdrop-blur-lg border border-cyan-500/20 p-8 rounded-2xl hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-2 transition"
            >
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                {skill.title}
              </h3>
              <p className="text-gray-400">{skill.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
