export type TIUiSelectOption = {
  label: string;
  category?: string | number;
  [key: string]: string | number | undefined;
};

export type TUiSelectProps = {
  options: Array<TIUiSelectOption>;
  multiple?: boolean;
  searchable?: boolean;
  grouping?: boolean;
  defaultOption?: TIUiSelectOption | TIUiSelectOption[];
};
