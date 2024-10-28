"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const BeyondWork = () => {
  const works = [
    {
      id: 1,
      imageSrc: "/Rota ClubService.jpg",
      description: "Description for the first extracurricular activity or achievement.",
    },
    {
      id: 2,
      imageSrc: "/path-to-image2.jpg",
      description: "Description for the second extracurricular activity or achievement.",
    },
    {
      id: 3,
      imageSrc: "/path-to-image3.jpg",
      description: "Description for the third extracurricular activity or achievement.",
    },
  ];

  return (
    <div className="h-full overflow-scroll flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-12">
      {works.map((work, index) => (
        <div
          key={work.id}
          className={`flex flex-col lg:flex-row ${
            index % 2 === 1 ? "lg:flex-row-reverse" : ""
          } items-center gap-8`}
        >
          {/* Work Image */}
          <div className="lg:w-1/2 w-full ">
            <Image
              src={work.imageSrc}
              alt={`Work ${work.id}`}
              width={400}
              height={200}
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Work Description */}
          <div className="lg:w-1/2 w-full text-lg text-gray-700 p-4">
            <p>{work.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BeyondWork;
