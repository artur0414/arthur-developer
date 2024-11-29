// Menu component: When the user clicks on the menu button, the Items component will be displayed with the navigation items and social media links.

"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import Items from "./items";
import { useTranslations } from "next-intl";

export default function Menu() {
  const t = useTranslations("Menu");
  const [isOpen, setIsOpen] = useState(false);
  const [menuTitle, setMenuTitle] = useState(t("open"));

  const handleOpen = (value: boolean) => {
    setIsOpen(value);
    setMenuTitle(value ? t("close") : t("open"));
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    setMenuTitle((prev) => (prev === t("open") ? t("close") : t("open")));
  };

  return (
    <>
      <Button
        onClick={handleToggle}
        className="absolute top-[50%] right-0 z-10 cursor-none"
      >
        {menuTitle}
      </Button>
      {isOpen && <Items handleOpen={handleOpen} />}
    </>
  );
}
