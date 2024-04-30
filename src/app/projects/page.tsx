"use client";
import { useProjects } from "@/zustand/projectStore";
import { TProject } from "../../type/index";
import Title from "@/components/ui/Title";
import Loading from "@/components/shared/Loading";
import ProjectCard from "@/components/ui/ProjectCard";

const ProjectsPage = () => {
  const { projects, isLoading, isError } = useProjects();
  const handleDeleteProject = (projectId: string) => {
    console.log(projectId);
    // if (window.confirm("Are you sure you want to delete this project?")) {
    //   deleteProjectMutation.mutate(projectId);
    // }
  };
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 min-h-screen">
      <Title firstTitle="Projects" lastTitle="Overview" />
      {isError && (
        <div className="text-red-500 text-center my-10">
          Error fetching projects
        </div>
      )}
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-10">
          {projects.map((project: TProject) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
