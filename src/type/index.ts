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
  projects: TProject[];
  setProjects: (projects: TProject[]) => void;
  deleteProject: (projectId: string) => void;
  addTask: (projectId: string, task: TTask) => void;
}

export interface TaskFormProps {
  projectId?: string;
  initialData?: TProject;
  visible: boolean;
  onCreate: (values: TaskFormData) => void;
  onCancel: () => void;
}

export interface TaskFormData {
  title: string;
  description: string;
  deadline: string;
  assignedTo: string;
}
