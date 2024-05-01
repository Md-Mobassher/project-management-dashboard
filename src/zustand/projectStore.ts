import { create } from "zustand";
import { State, TMember, TProject, TTask } from "@/type";
import { useProjectsQuery } from "@/api/projectMockApi";

const useProjectStore = create<State>((set) => ({
  login: false,
  setLogin: (login: boolean) => set({ login }),

  projects: [],
  setProjects: (projects: TProject[]) => set({ projects }),

  addProject: (project: TProject) =>
    set((state) => ({ projects: [...state.projects, project] })),

  editProject: (projectId: string, newData: Partial<TProject>) =>
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === projectId ? { ...project, ...newData } : project
      ),
    })),

  deleteProject: (projectId: string) =>
    set((state) => ({
      projects: state.projects.filter(
        (project: TProject) => project.id !== projectId
      ),
    })),

  addTask: (projectId: string, task: TTask) =>
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === projectId
          ? { ...project, tasks: [...project.tasks, task] }
          : project
      ),
    })),

  assignTeamMember: (projectId: string, taskId: string, teamMember: TMember) =>
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks: project.tasks.map((task) =>
                task.id === taskId
                  ? { ...task, assignedTo: [...task.assignedTo, teamMember] }
                  : task
              ),
            }
          : project
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

export const useProjectById = (projectId: string) => {
  const projects = useProjectStore((state) => state.projects);

  const project = projects.find((project) => project.id === projectId);
  return project;
};

export default useProjectStore;
