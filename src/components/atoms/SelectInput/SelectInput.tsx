import Select, { Props as SelectProps } from "react-select";

interface OptionType {
  label: string;
  value: string;
}

interface SelectInputProps extends Partial<SelectProps<OptionType>> {
  isMulti?: boolean;
  isClearable?: boolean;
}

export const SelectInput = ({
  isMulti = false,
  isClearable = false,
  ...props
}: SelectInputProps) => {
  return (
    <Select
      isMulti={isMulti}
      isClearable={isClearable}
      className="text-black"
      {...props}
    />
  );
};
