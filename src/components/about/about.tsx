// About component that contains the bio and skills the developer has

"use client";

import { bigShouldersText } from "@/app/[locale]/fonts";
import Image from "next/image";
import Skills from "./skills";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  return (
    <section id="about" className="w-full md:px-10 lg:px-40">
      <motion.h2
        ref={ref}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
        className={`${bigShouldersText.className} w-full text-9xl font-extrabold`}
      >
        {t("title")}
      </motion.h2>
      <motion.h3
        className={`${bigShouldersText.className} text-5xl w-full flex justify-end px-4 py-16 text-custom-brown font-extrabold`}
        ref={ref}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.7 }}
      >
        {t("subtitle")}
      </motion.h3>
      <div className="w-full pr-[25%] lg:px-10" ref={ref}>
        <div className="flex flex-col px-4 gap-4 py-4">
          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1 }}
            className={`${bigShouldersText.className} text-2xl font-extrabold text-custom-beige md:text-3xl`}
          >
            {t("bio")}
          </motion.h4>
          <motion.p
            className="leading-tight text-sm md:text-base text-custom-black-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 1 }}
          >
            {t("bioText1")}
          </motion.p>
          <motion.p
            className="leading-tight text-sm md:text-base text-custom-black-2 mt-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {t("bioText2")}
          </motion.p>
        </div>
        <Skills />
      </div>

      <div className="w-full flex justify-center py-8">
        <Image
          className="w-[70%]"
          src="/img/Artur2.jpg"
          alt={t("alt")}
          width={1200}
          height={800}
          priority
        />
      </div>
    </section>
  );
}
