"use client";

import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const Navbar = ({ className }: { className?: string }) => {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className={clsx(
          "flex w-fit fixed top-10 inset-x-0 mx-auto border border-white/[0.25] rounded-full bg-[var(--dialogColor50)] backdrop-blur-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-6 py-3 items-center space-x-6",
          className
        )}
      >
        {/* Navbar Buttons */}
        {["home", "about", "skills", "experience", "contact"].map(
          (section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="px-4 py-2 text-black rounded-md hover:bg-gray-200 transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          )
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
