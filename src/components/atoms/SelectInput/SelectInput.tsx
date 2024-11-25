import Select, { ActionMeta, MultiValue, SingleValue } from "react-select";

interface SelectInputProps {
  options: { label: string; value: string }[];
  value:
    | SingleValue<{ label: string; value: string }>
    | MultiValue<{ label: string; value: string }>
    | null;
  onChange: (
    newValue:
      | SingleValue<{ label: string; value: string }>
      | MultiValue<{ label: string; value: string }>,
    actionMeta: ActionMeta<{ label: string; value: string }>
  ) => void;
  isMulti?: boolean;
  placeholder: string;
  isClearable?: boolean;
}

export const SelectInput = ({
  options,
  value,
  onChange,
  isMulti = false,
  placeholder,
  isClearable = false,
  ...props
}: SelectInputProps) => {
  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
      isMulti={isMulti}
      placeholder={placeholder}
      className="text-black"
      isClearable={isClearable}
      {...props}
    />
  );
};
