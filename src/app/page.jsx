"use client";

import Image from "next/image";
import { motion } from "framer-motion";


const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/Theoda.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-5xl md:text-5xl font-bold mt-60 text-center">
          Theoda Hettiarachchi
        </h1>
        <h3 className="text-4xl text-center text-shadow-lg mx-4">
          Full-Stack Developer
        </h3>
        <p className="text-gray-600 p-7 leading-relaxed mb-4 text-sm md:text-base lg:text-lg">
          Welcome to my portfolio! I'm Theoda Hettiarachchi, a third-year
          Information Technology undergraduate at the University of Moratuwa.
          Here, you will find a showcase of my passion for crafting software
          solutions that drive innovation and impact. With a strong foundation
          in programming languages like Java and C, and expertise in tools such
          as React, Node.js, and MongoDB, my experience spans a range of
          challenging projects, where I&lsquo;ve combined technical skills and
          innovative thinking to create effective solutions.
        </p>
        <h3 className="text-xl text-center italic text-shadow-lg mx-4">
        &quot;Building Innovation Through Code...&quot;
        </h3>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 mb-10 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg mb-10 ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
