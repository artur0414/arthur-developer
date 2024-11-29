//contacts component that contains the social media links and the year of the website. It also contains an array of social media links to be displayed on the website.

"use client";

import { bigShouldersText } from "@/app/[locale]/fonts";
import { socialMedia } from "@/components/contacts/socialMedia";
import { sociaMediaProps } from "@/types/socialMedia";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

export default function Contacts() {
  const t = useTranslations("Contact");
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  return (
    <motion.section
      id="contacts"
      className="md:px-10 lg:px-40 w-full"
      ref={ref}
      initial={{ y: 0 }}
      animate={{ y: inView ? 400 : 0 }}
      transition={{ duration: 1.2 }}
    >
      <h2
        className={`${bigShouldersText.className} w-full text-7xl font-extrabold pb-24`}
      >
        {t("title")}
      </h2>
      <p className="w-full px-4 py-10 leading-tight text-sm text-custom-brown">
        {t("description")}
      </p>
      <div className="w-full border-t-[1px] border-b-[1px] border-custom-beige flex flex-col py-8">
        <h3
          className={`${bigShouldersText.className} w-full text-lg font-extrabold pt-16 pb-4 px-4 text-custom-black-2`}
        >
          {t("social")}
        </h3>
        <ul className="w-full flex flex-col pb-12 px-4">
          {socialMedia.map((social: sociaMediaProps) => (
            <li key={social.id} className="h-4 md:h-6">
              <a
                href={`${social.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs text-custom-beige`}
              >
                {social.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full py-4 flex justify-center items-center flex-col gap-4">
        <p className="text-lg text-custom-brown">{t("outro")}</p>
        <p
          className={`${bigShouldersText.className} text-5xl text-custom-beige`}
        >
          {t("year")}
        </p>
      </div>
    </motion.section>
  );
}
