export interface AutoCompleteProps<T> extends Omit<React.HTMLProps<HTMLDivElement>, 'defaultValue' | 'onSelect'> {
    options: T[];
    defaultValue?: T;
    getOptionLabel: (option: T) => string;
    onSelect?: (option: T) => void;
    renderOption?: (option: T) => React.ReactNode;
    renderInput: (params: any) => React.ReactNode;
  }
  