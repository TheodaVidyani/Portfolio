"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const BeyondWork = () => {
  const works = [
    {
      id: 1,
      imageSrc: "/RotaTreasurer.jpg",
      description:
        "I have taken on the role of Treasurer of the Rotaract Club of the University of Moratuwa for the RI year 2024-25 during the 29th installation ceremony that took place on November 3rd! It’s an incredible honor to serve alongside such passionate and dedicated individuals, and I’m looking forward to making this year one of impact, growth, and meaningful connections.",
    },
    {
      id: 2,
      imageSrc: "/IEEE.jpg",
      description:
        "Proud to have participated in HackElite 1.0 with Team ThreeBestBits! It was an inspiring journey of creativity and collaboration. Huge thanks to the IEEE WIE Student Branch, University of Moratuwa, for hosting this memorable event!",
    },
    {
      id: 3,
      imageSrc: "/Rota ClubService.jpg",
      description:
        "I have taken on the role of Co-Director of the Club Service Avenue of the Rotaract Club of the University of Moratuwa for the RI year 2023-24 during the 28th installation ceremony that took place on September 24th! It was a great platform to contribute my skills and collaborate with a fantastic RotaractMora team to make our projects even more successful.",
    },
    {
      id: 4,
      imageSrc: "/UniCode.jpg",
      description:
        "Team UniCode secured the 9th place in Coderush 2023, organized by INTECS on the 4th of November 2023 at University of Moratuwa premises.This accomplishment was made possible through the incredible teamwork, dedication, and support of my talented team members. Grateful for the shared effort that led us to this milestone!",
    },
    {
      id: 5,
      imageSrc: "/HackMoral.jpg",
      description:
        "I was thrilled to participate in HackMoral 6.0, a mini hackathon organized by INTECS at the Faculty of Information Technology, University of Moratuwa. Grateful for the opportunity to put my skills to the test.",
    },
    {
      id: 6,
      imageSrc: "/DataStorm.jpg",
      description:
        "I got the opportunity to chair Data Storm 4.0, an Advanced Analytics Competition organized by the Rotaract Clubs of the University of Moratuwa and the Faculty of Science, University of Colombo, and powered by OCTAVE - John Keells Group (April 2022). The experience was truly memorable and filled with invaluable lessons.",
    },
    {
      id: 7,
      imageSrc: "/EGallella.jpg",
      description:
        "Honored to have secured 1st place in the Verse Category at E-Gallella 2022, organized by the IT Faculty of the University of Moratuwa. This experience was truly rewarding, and I am grateful for the opportunity to showcase my skills and be part of such a prestigious event!.",
    },
    {
      id: 8,
      imageSrc: "/UCSC.jpg",
      description:
        "I'm very excited to share that I've reached a significant milestone in my Bachelor of Information Technology (BIT) degree from the University of Colombo by successfully completing the first year. This accomplishment has been rewarded with a Diploma in Information Technology (DIT), marking a proud step forward in my academic journey!",
    },
  ];

  return (
    <div className="h-full overflow-scroll flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-12">
      {works.map((work, index) => (
        <motion.div
          key={work.id}
          className={`flex flex-col lg:flex-row ${
            index % 2 === 1 ? "lg:flex-row-reverse" : ""
          } items-center gap-8`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: index === 0 ? 0.8 : index * 0.2 + 0.1,
          }}
        >
          {/* Work Image */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="md:w-1/2 w-full"
          >
            <Image
              src={work.imageSrc}
              alt={`Work ${work.id}`}
              width={400}
              height={100}
              className="w-full h-auto rounded-xl"
            />
          </motion.div>
          {/* LINE */}
          <motion.div
            className="w-1 h-full bg-gray-600 rounded relative"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
          />
          {/* Work Description */}
          <motion.div
            className={`md:w-1/2 w-full text-lg text-gray-700 p-4 ${
              index % 2 === 0 ? "text-left" : "text-right"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
          >
            <p>{work.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default BeyondWork;
