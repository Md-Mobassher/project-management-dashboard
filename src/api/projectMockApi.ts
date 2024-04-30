import { useQuery } from "react-query";

export const fetchProjects = async () => {
  const response = await fetch("data/projects.json");
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return response.json();
};

export const useProjectsQuery = () => {
  return useQuery("projects", fetchProjects);
};
