"use client";
import { useProjects } from "@/zustand/projectStore";
import { TProject } from "../../type/index";
import Title from "@/components/ui/Title";

const ProjectsPage = () => {
  const { projects, isLoading, isError } = useProjects();
  const handleDeleteProject = (projectId: string) => {
    console.log(projectId);
    // if (window.confirm("Are you sure you want to delete this project?")) {
    //   deleteProjectMutation.mutate(projectId);
    // }
  };
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Title firstTitle="Projects" lastTitle="Overview" />
      {isError && <div>Error fetching projects</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {projects.map((project: TProject) => (
            <div key={project.id} style={{ marginBottom: 16 }}>
              <div>Name: {project.name}</div>
              <div>Description: {project.description}</div>
              <button onClick={() => handleDeleteProject(project.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
