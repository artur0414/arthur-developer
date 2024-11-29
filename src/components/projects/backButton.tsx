// Button to go back to the previous page

"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function BackButton() {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0 }} // Comienza desde arriba y transparente
      animate={{ opacity: 1 }} // Se mueve y se hace visible cuando está en vista
      transition={{ duration: 0.5, delay: 0.5 }} // Duración de la animación
      className="absolute bottom-8 flex justify-center w-full z-50 md:justify-start md:px-4 lg:px-8"
    >
      <Button
        onClick={() => router.back()}
        variant={"secondary"}
        size={"lg"}
        className="bg-custom-yellow/90"
      >
        Go Back
      </Button>
    </motion.div>
  );
}
