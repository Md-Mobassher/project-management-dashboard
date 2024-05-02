"use client";
import useProjectStore, { useProjects } from "@/zustand/projectStore";
import { TaskFormData, TProject } from "../../type/index";
import Title from "@/components/ui/Title";
import Loading from "@/components/shared/Loading";
import ProjectOverviewCard from "@/components/ui/ProjectOverviewCard";

const ProjectsPage = () => {
  const projects = useProjectStore((state) => state.projects);

  if (!projects) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 min-h-screen">
      <Title firstTitle="Projects" lastTitle="Overview" />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-10">
        {projects.map((project: TProject) => (
          <ProjectOverviewCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
