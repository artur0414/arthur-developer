// Hero component is a section that contains the main title of the website, a brief description and an image of the author.

"use client";

import { bigShouldersText } from "@/app/[locale]/fonts";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  return (
    <section className="w-full grid grid-cols-2 grid-rows-3 px-8 py-20 gap-6 overflow-x-hidden md:px-10 lg:px-40 lg:grid-rows-2 lg:gap-9">
      <motion.h1
        ref={ref}
        className={`text col-start-2 row-start-1 text-left flex justify-start md:items-center ${bigShouldersText.className} text-5xl font-extrabold md:col-start-1 md:row-span-2 md:text-8xl md:text-right md:justify-end text-custom-black-2 lg:text-9xl`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        ARTHUR <br /> DEV
      </motion.h1>

      <motion.p
        className="col-start-1 row-start-2 md:col-span-2 md:row-start-3 text-sm flex md:justify-center md:text-center lg:row-start-2 lg:col-start-2 lg:pt-10 lg:px-20 lg:text-lg text-custom-beige"
        ref={ref}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("description")}
      </motion.p>

      <motion.div
        ref={ref}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="col-start-2 row-start-3 md:row-start-1 flex justify-center py-9 md:py-0 "
      >
        {/* Provitional Image to display */}
        <Image
          className="md:w-[70%] "
          src="/img/arthur-hero.png"
          alt={t("alt")}
          width={1200}
          height={800}
          priority
        />
      </motion.div>
    </section>
  );
}
