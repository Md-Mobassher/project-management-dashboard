import { useQuery } from "react-query";
import { TProject } from "@/type";

// fetch all projects
export const fetchAllProjects = async () => {
  const response = await fetch("data/projects.json");
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  const projectsData = response.json();
  return projectsData;
};

// fetch a project by ID
export const fetchProjectById = async (
  projectId: string
): Promise<TProject | undefined> => {
  const projects = await fetchAllProjects();

  const project = projects.find(
    (project: TProject) => project.id === projectId
  );
  return project;
};

export const useProjectsQuery = () => {
  return useQuery("projects", fetchAllProjects);
};

export const useProjectByIdQuery = (projectId: string) => {
  return useQuery(["project", projectId], () => fetchProjectById(projectId));
};
