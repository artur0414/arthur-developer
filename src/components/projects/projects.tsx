// Component of projects that contains the projects of the website and a button to see all the projects

"use client";

import { bigShouldersText } from "@/app/[locale]/fonts";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SeeAllButton from "./seeAllButton";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("Projects");
  const [title, setTitle] = useState<string>(t("titles").split(" ")[0]);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  // switch the title every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      const titles = t("titles").split(" ");
      setTitle((prevTitle) => {
        const currentIndex = titles.indexOf(prevTitle);
        const nextIndex = (currentIndex + 1) % titles.length;
        return titles[nextIndex];
      });
    }, 1000);
    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [t]);

  return (
    <section id="projects" className="w-full flex flex-col py-20 lg:px-40">
      <h2
        className={`${bigShouldersText.className} text-7xl font-extrabold py-20 md:text-9xl`}
      >
        {title}
      </h2>
      <div className="w-full border-t-2 border-b-2 border-custom-beige flex flex-col">
        <div className="w-full py-4 px-4">
          <h3
            className={`${bigShouldersText.className} text-2xl font-bold text-custom-black-2 md:text-3xl`}
          >
            {t("projectsList.project1.name")}
          </h3>
          <p
            className={`${bigShouldersText.className} text-lg font-semibold text-custom-beige md:text-1xl`}
          >
            {t("projectsList.project1.description")}
          </p>
        </div>
        <motion.div
          className="w-full py-8 md:pb-16"
          ref={ref}
          initial={{ x: -100 }}
          animate={{ x: inView ? 0 : 100 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://github.com/artur0414/cacao-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="w-[80%] filter saturate-[0.8]"
              src="/img/cacao-api.png"
              alt={t("projectsList.project1.alt")}
              width={1200}
              height={800}
              priority
            />
          </a>
        </motion.div>
      </div>
      <div className="w-full border-b-2 border-custom-beige flex flex-col">
        <div className="w-full py-4 px-4">
          <h3
            className={`${bigShouldersText.className} text-2xl font-bold text-custom-black-2 md:text-3xl`}
          >
            {t("projectsList.project2.name")}
          </h3>
          <p
            className={`${bigShouldersText.className} text-lg font-semibold text-custom-beige md:text-1xl`}
          >
            {t("projectsList.project2.description")}
          </p>
        </div>
        <motion.div
          ref={ref}
          initial={{ x: 100 }}
          animate={{ x: inView ? 0 : -100 }}
          transition={{ duration: 0.5 }}
          className="w-full py-8 flex justify-end md:pb-16"
        >
          <a
            href="https://codepen.io/Artur-Acosta/pen/NWVrdmV"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="w-[60%] filter"
              src="/img/jake.png"
              alt={t("projectsList.project2.alt")}
              width={1200}
              height={800}
              priority
            />
          </a>
        </motion.div>
      </div>
      <motion.div
        ref={ref}
        className="flex justify-center w-full py-[52px] relative"
        initial={{ y: 0, opacity: 0 }} //
        animate={{
          scale: inView ? 1.4 : 0,
          y: inView ? 200 : 0,
          opacity: inView ? 1 : 0,
        }}
        transition={{ duration: 1.2 }}
      >
        <SeeAllButton />
      </motion.div>
    </section>
  );
}
