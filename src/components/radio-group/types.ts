interface Option {
  label: string;
  value: boolean | null;
}

export interface RadioGroupProps {
  options: Option[];
  selectedValue: string | null;
  onValueChange: (value: string) => void;
}
