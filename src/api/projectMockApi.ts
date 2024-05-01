import { useQuery } from "react-query";

// fetch all projects
export const fetchAllProjects = async () => {
  const response = await fetch("data/projects.json");
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  const projectsData = response.json();
  return projectsData;
};

export const useProjectsQuery = () => {
  return useQuery("projects", fetchAllProjects);
};
