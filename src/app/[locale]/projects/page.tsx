// Project page component that contains all the projects

"use client";

import { Loader } from "@/components/ui/loader";
import dynamic from "next/dynamic";

export default function ProjectsPage() {
  const ProjectsComponent = dynamic(
    () => import("@/components/projects/projectsPage"),
    {
      loading: () => <Loader />,
    }
  );

  return <ProjectsComponent />;
}
