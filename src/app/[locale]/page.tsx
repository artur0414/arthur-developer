// Page component that contains all the components of the website

"use client";

import About from "@/components/about/about";
import Contacts from "@/components/contacts/contacts";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";
import { Loader } from "@/components/ui/loader";
import { useState, useEffect } from "react";

export default function Home() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true); // Marca como "hidratado" después del primer renderizado
  }, []);

  if (!isHydrated) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <main className="overflow-x-hidden h-full">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contacts />
    </main>
  );
}
