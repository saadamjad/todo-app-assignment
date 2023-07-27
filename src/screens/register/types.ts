export interface ITaskProps {
  name: string;
  category: string;
  status: boolean;
  id: string;
  date: string;
  description: string;
}

export interface TaskItemProps {
  item?: ITaskProps;
}

export interface InputProps {
  height?: string;
}
