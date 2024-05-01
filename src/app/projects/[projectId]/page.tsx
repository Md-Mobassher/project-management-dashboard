"use client";

import Loading from "@/components/shared/Loading";
import ProjectDetails from "@/components/ui/ProjectDetails";
import Title from "@/components/ui/Title";
import { TProject } from "@/type";
import { useProjectById } from "@/zustand/projectStore";
import { useEffect, useState } from "react";

type TParams = {
  params: {
    projectId: string;
  };
};
const ProjectDetailPage = ({ params }: TParams) => {
  // const [projectData, setProjectData] = useState<TProject | null>(null);
  const projectId = params.projectId;
  const project = useProjectById(projectId);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 min-h-screen">
      <Title firstTitle="Projects" lastTitle="Details" />

      <div className=" my-10">{project && <ProjectDetails {...project} />}</div>
    </div>
  );
};

export default ProjectDetailPage;
