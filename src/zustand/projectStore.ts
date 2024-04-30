import { create } from "zustand";
import { TProject } from "@/type";
import { useProjectsQuery } from "@/api/projectMockApi";

const useProjectStore = create((set) => ({
  projects: [],
  setProjects: (projects: TProject[]) => set({ projects }),
  addProject: (project: TProject) =>
    set((state) => ({ projects: [...state.projects, project] })),
  deleteProject: (projectId: string) =>
    set((state) => ({
      projects: state.projects.filter(
        (project: TProject) => project.id !== projectId
      ),
    })),
}));

export const useProjects = () => {
  const { data, isLoading, isError } = useProjectsQuery();

  if (isLoading || isError) {
    return { projects: [], isLoading, isError };
  }

  useProjectStore.setState({ projects: data });

  return { projects: data, isLoading, isError };
};

export default useProjectStore;
