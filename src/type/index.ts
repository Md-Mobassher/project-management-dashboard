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
  assignedTo: TMember[];
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
}
