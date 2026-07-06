import React from 'react';

const education = [
  {
    year: "2019-2024",
    university: "BURIRAM RAJABHAT UNIVERSITY",
    degree: "Bachelor of Science in Computer Science",
    description: "Starting university in the Faculty of Science, majoring in Computer Science, is a significant step for students interested in computer technology and software development. This program focuses on both theoretical and practical aspects of computer systems, programming, and application development.",
  },
  {
    year: "Oct 2023 – Feb 2024",
    university: "Ditruz Co., Ltd.",
    degree: "Back-End Developer (Internship)",
    // เปลี่ยนมาใช้ ` ` (Backtick) แล้วกด Enter ขึ้นบรรทัดใหม่ในนี้ได้เลยครับ 
    description: `• Developed RESTful APIs using C# and ASP.NET Core framework in Visual Studio.
                  • Designed and optimized relational databases using Microsoft SQL Server and managed them through Navicat.
                  • Wrote clean, maintainable backend code and participated in API testing and debugging.`,
  }
];

function Education() {
  return (
    <section id="education" className="min-h-screen flex items-center pt-32 px-6 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gray-/00"> Education </span>
          <span className="text-cyan-400"> & Work </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((item, index) => ( // เปลี่ยนชื่อตัวแปรในลูปเป็น item จะได้ไม่ซ้ำกับชื่ออาร์เรย์ครับ
            <div
              key={index}
              className="p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900"
            >
              <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-zinc-800 px-3 py-1 rounded-full">
                {item.year}
              </span>
              <h1 className="text-2xl font-bold text-cyan-400 mt-4 mb-1">
                {item.university}
              </h1>
              <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-3">
                {item.degree}
              </h3>
              {/* จุดสำคัญ: เพิ่มคลาส whitespace-pre-line ตรงนี้ครับ */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;