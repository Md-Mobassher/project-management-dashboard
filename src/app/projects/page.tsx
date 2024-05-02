"use client";
import useProjectStore, { useProjects } from "@/zustand/projectStore";
import { TaskFormData, TProject } from "../../type/index";
import Title from "@/components/ui/Title";
import Loading from "@/components/shared/Loading";
import ProjectOverviewCard from "@/components/ui/ProjectOverviewCard";

const ProjectsPage = () => {
  // const { projects, isLoading, isError } = useProjects();
  let projects = useProjectStore((state) => state.projects);

  if (!projects) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 min-h-screen">
      <Title firstTitle="Projects" lastTitle="Overview" />
      {/* {isError && (
        <div className="text-red-500 text-center my-10">
          Error fetching projects
        </div>
      )}
      {isLoading ? (
        <Loading />
      ) : ( */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-10">
        {projects.map((project: TProject) => (
          <ProjectOverviewCard key={project.id} {...project} />
        ))}
      </div>
      {/* )} */}
    </div>
  );
};

export default ProjectsPage;
