"use client";

import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="h-screen flex flex-col justify-center items-center text-center px-6">
      <div className="mb-44"></div>
      {/* <div className="mb-36"></div> */}
      <h1 className="text-4xl mb-4 font-bold text-gray-900 dark:text-white">About Me</h1>
      <div className="flex">
        <Image
          src="/snowboard.png"
          alt="Snowboarding"
          width={400}
          height={400}
          className="rounded-2xl m-4"
        />
        <Image
          src="/ski.jpg"
          alt="Skiing"
          width={400}
          height={400}
          className="rounded-2xl m-4"
        />
      </div>
      <p className="mt-4 text-lg text-gray-800 dark:text-gray-300 max-w-2xl">
        Passionate about solving complex problems, I aim to create data-driven solutions that drive sustainability and innovation. Adaptable and action-oriented, I thrive in dynamic, collaborative environments and am eager to explore new areas within data and machine learning.
      </p>
      <p className="mt-4 text-lg text-gray-800 dark:text-gray-300 max-w-2xl">
        Beyond academics and work, I find peace in the outdoors, whether it's skiing down snowy slopes, exploring new places through travel, or simply immersing myself in nature. There's a sense of clarity and balance in slowing down, embracing the natural world, and being fully present in the moment!
      </p>
    </section>
  );
};

export default AboutSection;
