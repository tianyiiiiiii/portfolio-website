"use client";

import React from "react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl mb-6 font-bold text-gray-900 dark:text-white">My Experience</h1>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">May 2024 - Aug 2024</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Laconic Technology Co., Ltd, Bangkok, Thailand</h3>
          <h3 className="mb-2 text-lg text-gray-900 dark:text-white">R&D Software Developer and Data Mining Specialist Intern</h3>
          <p className="text-left font-normal text-gray-500 dark:text-gray-400">
            - Ideated and implemented 5+ product features for Payni.io, a cryptocurrency platform
            supporting both crypto and fiat transactions.
          </p>
          <p className="text-left font-normal text-gray-500 dark:text-gray-400">
            - Enhanced user experience by collaborating on the UI/UX designs and refine new interfaces
          </p>
          <p className="text-left font-normal text-gray-500 dark:text-gray-400">
            - Developed website features using React.js and Next.js for front-end and integrating Spring
            Boot for backend operations.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">Dec 2022 - Aug 2023</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Building and Construction Authority, Singapore</h3>
          <h3 className="mb-2 text-lg text-gray-900 dark:text-white">Environment and Sustainability Executive</h3>
          <p className="text-left font-normal text-gray-500 dark:text-gray-400">
            - Cleaned, compiled, and managed datasets for over 600 Green Mark-certified buildings
          </p>
          <p className="text-left font-normal text-gray-500 dark:text-gray-400">
            - Reconnected with over 200 Building Owners to update building data and follow-up to
            encourage recertification of expired GM Certificates.
          </p>
        </li>

      </ol>
    </section>
  );
};

export default ExperienceSection;





