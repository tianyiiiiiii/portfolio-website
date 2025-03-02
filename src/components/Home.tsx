"use client";

import React from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HomeSection = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-6">
      <div className="mb-36"></div>
      <Image
        src="/pfp.jpg"
        alt="Profile Picture"
        width={600}
        height={600}
        className="rounded-2xl m-6 mt-6"
      />
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Hi, I'm Tianyi 👋
      </h1>
      <p className="mt-4 mb-4 text-lg text-gray-800 dark:text-gray-300 max-w-2xl">
        I'm a Business Analytics Undergraduate at the National University of Singapore, School of Computing, currently pursuing a Machine Learning-based Analytics Specialisation!
        Eager to explore new areas within the fields of data and ML.
      </p>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="/" 
          onClick={(e) => {
            e.preventDefault(); 
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="group bg-gray-200 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>


        <a
          className="group bg-gray-200 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/resume.pdf"
          download="resume.pdf"
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-gray-200 p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/tianyi-y-1546a9263/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-gray-200 p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/tianyiiiiiii"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default HomeSection;
