export interface IMenuItem {
  icon?: string;
  text: string;
  id: string;
}

export interface ISettings {
  buttonCLose?: boolean | undefined,
  icon?: boolean | undefined,
  line?: boolean | undefined
}

export interface IMenuListProps {
  data: IMenuItem[];
  settings?: ISettings;
}
