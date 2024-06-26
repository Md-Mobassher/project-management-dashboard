import { create } from "zustand";
import { State, TMember, TProject, TTask } from "@/type";
import { useProjectsQuery } from "@/api/projectMockApi";

export const useProjectStore = create<State>((set) => ({
  login: false,
  setLogin: (login: boolean) => set({ login }),

  projects: [],
  setProjects: (projects: TProject[]) => set({ projects }),

  singleProject: null,
  setSingleProject: (projectId: string | null) =>
    set((state) => ({
      ...state,
      singleProject: projectId
        ? state.projects.find((project) => project.id === projectId)
        : null,
    })),

  addProject: (project: TProject) =>
    set((state) => ({ projects: [...state.projects, project] })),

  editProject: (projectId: string, newData: Partial<TProject>) => {
    set((state) => {
      // Map over the projects and update the project with the matching projectId
      const updatedProjects = state.projects.map((project) =>
        project.id === projectId ? { ...project, ...newData } : project
      );

      // Find the updated project with the matching projectId
      const updatedProject = updatedProjects.find(
        (project) => project.id === projectId
      );

      return {
        ...state,
        projects: updatedProjects,
        singleProject: updatedProject,
      };
    });
  },

  deleteProject: (projectId: string) =>
    set((state) => ({
      projects: state.projects.filter(
        (project: TProject) => project.id !== projectId
      ),
    })),

  addTask: (projectId: string, task: TTask) => {
    console.log(projectId, task);
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === projectId
          ? { ...project, tasks: [...project.tasks, task] }
          : project
      ),
    }));
  },

  editTask: (projectId: string, taskId: string, newData: Partial<TTask>) => {
    set((state) => {
      // Map over the projects and find the project with the matching projectId
      const updatedProjects = state.projects.map((project) => {
        if (project.id === projectId) {
          // Map over the tasks of the project and update the task with the matching taskId
          const updatedTasks = project.tasks.map((task) =>
            task.id === taskId ? { ...task, ...newData } : task
          );
          // Return the updated project with the updated tasks
          return { ...project, tasks: updatedTasks };
        }
        // Return unchanged project if projectId does not match
        return project;
      });

      // Return the updated state with the updated projects
      return { ...state, projects: updatedProjects };
    });
  },

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

export default useProjectStore;
