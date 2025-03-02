"use client";

import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl mb-4 font-bold text-gray-900 dark:text-white">Contact Me</h1>
      
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-10 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {/* LinkedIn */}
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">LinkedIn</p>
          <a
            className="bg-gray-200 p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/tianyi-y-1546a9263/"
            target="_blank"
          >
            <BsLinkedin className="text-4xl" />
          </a>
        </div>

        {/* GitHub */}
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">GitHub</p>
          <a
            className="bg-gray-200 p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/tianyiiiiiii"
            target="_blank"
          >
            <FaGithubSquare className="text-4xl" />
          </a>
        </div>
      </motion.div>

      {/* Video */}
      <motion.video
        className="mt-6 w-64 sm:w-96 rounded-2xl shadow-lg"
        autoPlay
        loop
        muted
      >
        <source src="/dance.MP4" type="video/mp4" />
      </motion.video>

    </section>
  );
};

export default ContactSection;