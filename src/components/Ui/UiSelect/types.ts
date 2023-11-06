export type TIUiSelectOption =
  | {
      label: string;
      value: unknown;
    }
  | string;

export interface IUiSelectProps {
  options: TIUiSelectOption[];
  defaultOption: TIUiSelectOption | TIUiSelectOption[];
  multiple?: boolean;
  searchable?: boolean;
}
