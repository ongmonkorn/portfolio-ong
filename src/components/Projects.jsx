
import Img_ongshop from '../assets/ongshop.jpg'
import Img_training from '../assets/training.jpg'

const projects = [
  {
    title: "ระบบบริหารจัดการโครงการอบรม",
    description: "ระบบจัดการโครงการอบรม ที่มีฟีเจอร์การจัดการผู้ใช้งาน โครงการ และการติดตามผลโครงการ",
    image: Img_training,
    tech: " Visual Studio Code / Html / CSS / JavaScript / PHP / MySQL",
    link: "https://github.com/ongmonkorn/projectmyapp.git",
  },
  {
    title: "Ong-Shop Fullstack",
    description: "เว็บไซต์ขายของออนไลน์ขนาดเล็ก ที่มีฟีเจอร์การจัดการสินค้า มีระบบตะกร้าสินค้า",
    image: Img_ongshop,
    tech: " Visual Studio Code / React / Javascript / Tailwind CSS / Nodejs / Express / PostgreSQL / JWT / bcryptjs",
    link: "https://ong-shop.vercel.app/"
  }
];

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center pt-32 px-6 bg-white dark:bg-black"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2

          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="text-gray-200">My </span>
          <span className="text-cyan-400">Projects</span>
        </h2>

        {/* Grid */}
        <div
          className="grid md:grid-cols-2 gap-12"

        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-100 dark:bg-gray-900/60 backdrop-blur-lg border border-cyan-500/20 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-cyan-500/30 transition"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">{project.description}</p>

                <p className="text-sm text-gray-500 mb-6">{project.tech}</p>

                <a
                  href={project.link}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  View →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
