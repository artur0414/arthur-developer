// Language component for the header of the website that contains the language dropdown menu with the languages EN and ES.
"use client";

import { bigShouldersText } from "@/app/[locale]/fonts";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export default function Language() {
  const router = useRouter();
  const localActive = useLocale();

  const t = useTranslations("Header");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={`${bigShouldersText.className} text-2xl md:text-3xl lg:text-4xl outline-none focus:ring-0 text-custom-black-2`}
          variant={"ghost"}
          size={"sm"}
        >
          {t("language")}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="bg-custom-yellow/80 hover:bg-custom-yellow"
      >
        <DropdownMenuItem>
          <Button
            onClick={() => router.push(localActive === "es" ? "en" : "es")}
            variant={"ghost"}
            className="justify-center"
          >
            {t("switch")}
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
