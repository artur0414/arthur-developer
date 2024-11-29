// Skills component that contains the list of skills the developer has using an array of objects (skills) to map through them and display them

"use client";

import { bigShouldersText } from "@/app/[locale]/fonts";
import { skillsList } from "@/components/about/skillsList";
import { SkillsProps } from "@/types/skills";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

export default function Skills() {
  const t = useTranslations("About");
  const { ref, inView } = useInView({
    triggerOnce: false, // Para que se active cada vez que entre en la vista
    threshold: 0.5, // El 50% del elemento debe ser visible
  });
  return (
    <div className="flex flex-col px-4 py-24 gap-4" ref={ref}>
      <motion.h4
        className={`${bigShouldersText.className} text-2xl font-extrabold text-custom-beige`}
        initial={{ opacity: 0, y: 50 }} // Comienza más abajo y transparente
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Subir el texto al entrar
        transition={{ duration: 0.8 }}
      >
        {t("skills")}
      </motion.h4>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }} // Aparece al entrar
        transition={{ duration: 0.8, delay: 0.2 }} // Retraso para la lista
      >
        {skillsList.map((skill: SkillsProps) => (
          <motion.li
            key={skill.id}
            initial={{ opacity: 0, y: 30 }} // Comienza más abajo y transparente
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }} // Subir el texto al entrar
            transition={{ duration: 0.8 }}
          >
            <h5 className="leading-tight text-xs py-[1px] md:text-base md:py-0 text-custom-black-2">
              {skill.name}
            </h5>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
