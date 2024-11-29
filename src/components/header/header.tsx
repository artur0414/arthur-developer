//Header component that contains the logo and the language switcher

import Image from "next/image";
import { Button } from "../ui/button";
import Language from "./language";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <header
      id="home"
      className="w-full h-[10vh] flex items-center justify-between px-4 md:px-10 md:h-[14vh] lg:px-40 lg:h-[16vh]"
    >
      <Button variant={"ghost"} size={"sm"}>
        <a href="">
          <Image
            src="/img/logo.svg"
            alt={t("alt")}
            width={30}
            height={30}
            className="md:w-10 md:h-10 lg:w-12 lg:h-12"
            priority
          />
        </a>
      </Button>
      <Language />
    </header>
  );
}
