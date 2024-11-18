"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Laboratory Information Management System",
    desc: "To simplify the report generation process and tracking reports online. Through this system, patients can register for blood test appointments, make online payments, access their blood test results, view lab details, and track their reports online.",
    img: "/sw project.png",
    link: "https://www.linkedin.com/posts/theoda-hettiarachchi-8536b2266_excited-to-share-our-latest-project-laboratory-activity-7235585553725825024-Zeyy?utm_source=share&utm_medium=member_desktop",
  },

  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Note App",
    desc: "To simplify note management by allowing users to create, edit, delete and organize notes with tagging functionality. Also implemented tag-based filtering.",
    img: "/note app.png",
    link: "https://drive.google.com/file/d/1R98yMbWvUVOEyCtDV-YEb3bo66eVuiIJ/view?usp=sharing",
  },

  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "ToDo App",
    desc: "To make task management simple, providing a user-friendly interface and a robust backend for handling daily tasks. Real-time notifications powered by Toast Messages enhance the user experience.",
    img: "/ToDo.png",
    link: "https://drive.google.com/file/d/1cb5phfEKpaQZfUGPP5WMkObvP77tii-i/view?usp=sharing",
  },

  // {
  //   id: 4,
  //   color: "from-purple-300 to-red-300",
  //   title: "Spotify Music App",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  //   img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   link: "https://lama.dev",
  // },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-20 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-lg mt-50 font-bold md:text-2xl lg:text-4xl xl:text-4xl">
                    {item.title}
                  </h1>
                  <div className="relative w-45 h-40 md:w-65 md:h-60 lg:w-[450px] lg:h-[200px] xl:w-[470px] xl:h-[240px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w106 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-1 mb-40 text-sm md:p-2 md:text-md lg:p-3 lg:text-lg bg-white text-gray-600 font-semibold rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full-Stack Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
