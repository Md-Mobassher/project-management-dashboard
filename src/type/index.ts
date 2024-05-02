export type TMember = {
  id: string;
  name: string;
  role: string;
};

export type TTask = {
  id: string;
  title: string;
  description: string;
  deadline: string;
  status: string;
  assignedTo: TMember[] | [];
};

export type TProject = {
  id: string;
  name: string;
  description: string;
  deadline: string;
  status: string;
  image: string;
  tasks: TTask[];
};
export interface State {
  login: boolean;
  projects: TProject[];
  setProjects: (projects: TProject[]) => void;
  singleProject: TProject | null;
  setSingleProject: (id: string) => void;
  addProject: (project: TProject) => void;
  editProject: (projectId: string, newData: Partial<TProject>) => void;
  deleteProject: (id: string) => void;
  addTask: (id: string, task: TTask) => void;
}

export interface TaskFormProps {
  projectId?: string;
  initialData?: TProject;
  visible: boolean;
  onCreate: (values: TaskFormData) => void;
  onCancel: () => void;
}

export interface TaskFormData {
  id: string;
  name: string;
  title?: string;
  description: string;
  deadline: string;
  status: string;
  image: string;
}

export type TParams = {
  params: {
    projectId: string;
  };
};
