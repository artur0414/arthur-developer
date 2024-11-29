// Projects component that contains all the projects of the website and a button to come back to the home page. It also contains an array of projects that are displayed in the website.

"use client";

import { bigShouldersText } from "@/app/[locale]/fonts";
import Image from "next/image";
import { motion } from "framer-motion";
import BackButton from "./backButton";
import { useTranslations } from "next-intl";

export default function ProjectsComponent() {
  const t = useTranslations("Projects.projectsList"); // Hook para acceder a las traducciones
  const projects = ["project1", "project2", "project3"] as const;

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute bg-custom-white w-screen h-screen flex flex-col gap-10 z-50 overflow-x-hidden md:p-4 lg:p-10 scroll-hidden"
      >
        <div>
          <h2 className={`${bigShouldersText.className} text-5xl`}>PROJECTS</h2>
        </div>
        <div className="grid w-full gap-4 md:grid-cols-2 md:gap-10 lg:gap-20 lg:p-10">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={t(`${project}.id`)}
                initial={{ y: 100, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.5,
                }}
                className={`relative w-full flex flex-col justify-start py-10 ${
                  index % 2 === 0
                    ? "md:row-span-2 justify-center"
                    : "md:row-span-5 justify-center"
                }`}
              >
                <div>
                  <h3
                    className={`text-custom-black-2 text-7xl z-50 mb-4 px-4 ${
                      index % 2 === 0 ? "text-left" : "text-right"
                    }`}
                  >
                    {t(`${project}.name`)}
                  </h3>

                  <div className={`w-[95%] overflow-y-auto`}>
                    <a
                      href={t(`${project}.url`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        className="w-full p-4 filter saturate-[0.8] "
                        src={t(`${project}.image`)}
                        alt={t(`${project}.alt`)}
                        width={1200}
                        height={800}
                      />
                    </a>
                  </div>
                </div>
                <p
                  className={`text-base py-4 px-6 leading-tight text-custom-beige  ${
                    index % 2 === 0 ? "" : "w-full"
                  }`}
                >
                  {t(`${project}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      <BackButton />
    </>
  );
}
