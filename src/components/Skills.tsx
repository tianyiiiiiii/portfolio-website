"use client";

import React from "react";

export const skillsData = [
  {
    category: "Programming",
    skills: ["Python", "Java", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    category: "Data Analysis & Visualization",
    skills: ["R (RStudio)", "Tableau", "ERD", "Econometrics", "Computer Vision"],
  },
  {
    category: "Machine Learning",
    skills: ["Scikit-learn", "Pandas", "NumPy", "Seaborn", "PyTorch", "OpenCV", "Deep Learning"],
  },
  {
    category: "Software Development",
    skills: ["Next.js", "React", "Spring Boot", "Tailwind", "Bootstrap", "TypeScript/JSX", "Vue.js"],
  },
  {
    category: "Office Productivity",
    skills: ["Microsoft Office Suite (Excel, Word, PowerPoint)", "Project Management Software"],
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <h1 className="text-4xl mb-6 font-bold text-gray-900 dark:text-white">My Skills</h1>

      <div className="w-full max-w-5xl space-y-8">
        {skillsData.map((categoryItem, index) => (
          <div key={index} className="text-left mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
              {categoryItem.category}
            </h2>
            <ul className="flex grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {categoryItem.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="bg-white dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 
                            rounded-2xl px-6 py-3 shadow-md text-center inline-block"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
