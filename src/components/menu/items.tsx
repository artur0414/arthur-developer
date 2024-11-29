import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { socialMedia } from "../contacts/socialMedia";
import { bigShouldersText } from "@/app/[locale]/fonts";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface ItemsProps {
  handleOpen: (value: boolean) => void;
}

export default function Items({ handleOpen }: ItemsProps) {
  const t = useTranslations("Menu");
  const items = useTranslations("Menu.itemsList");
  const itemsList = ["item1", "item2", "item3", "item4"] as const;

  // Ref para el contenedor principal del modal
  const modalRef = useRef<HTMLDivElement>(null);

  // Función para manejar el clic fuera del modal
  const handleClickOutside = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleOpen(false);
    }
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      onClick={handleClickOutside} // Se ejecuta cuando se hace clic fuera del modal
      className="absolute left-0 top-0 bg-black/70 w-screen h-screen overflow-hidden"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative py-5 px-5 bg-custom-black w-[80%] h-screen flex flex-col gap-10 lg:w-[60%] lg:px-20"
        ref={modalRef} // Añadir la referencia para identificar el área del modal
      >
        <motion.h4
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={`${bigShouldersText.className} w-[70%] text-custom-beige text-3xl border-b-[1px] border-custom-beige pt-8 pb-16 md:px-4`}
        >
          {t("title")}
        </motion.h4>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="w-full border-b-[1px] border-custom-beige pb-8"
        >
          <ul>
            {itemsList.map((item) => (
              <li key={items(`${item}.id`)}>
                <Button
                  onClick={() => {
                    handleOpen(false);
                    handleScroll(items(`${item}.href`)); // Remueve el # del href
                  }}
                  variant={"ghost"}
                  className="h-10 px-0 text-custom-beige"
                >
                  <a className="w-auto scroll-smooth text-start relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-custom-beige hover:after:w-full after:transition-all after:duration-300 ">
                    {items(`${item}.name`)}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <ul>
            {socialMedia.map((item) => (
              <li key={item.id}>
                <Button
                  variant={"ghost"}
                  className="h-8 px-0 text-custom-beige"
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.url}
                    className="w-auto relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-custom-beige hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item.name}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}
