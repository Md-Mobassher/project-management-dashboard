"use client";

import ProjectDetails from "@/components/ui/ProjectDetails";
import Title from "@/components/ui/Title";
import { useProjectById } from "@/zustand/projectStore";

type TParams = {
  params: {
    projectId: string;
  };
};
const ProjectDetailPage = ({ params }: TParams) => {
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
