// See all button component for projects page that redirects to the projects page when clicked on it

"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function SeeAllButton() {
  const t = useTranslations("Projects");
  const router = useRouter();

  return (
    <>
      <Button onClick={() => router.push("/projects")} size={"icon"}>
        {t("button")}
      </Button>
    </>
  );
}
