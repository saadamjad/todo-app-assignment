interface Option {
	label: string;
	id: number;
}

export interface RadioGroupProps {
	options: Option[];
	selectedValue: number;
	onValueChange: (value: number) => void;
}
