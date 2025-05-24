import "./select.style.css";

import { getOptionTitle } from "@/helpers/globalHelpers";

interface ISelectProps {
  options: string[];
  value: string;
  onChange: (selectValue: string) => void;
}

const Select = ({ options, value, onChange }: ISelectProps) => {
  return (
    <>
      <select
        name="sort-control-element"
        id="sort-control-element"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="sort-control-element"
      >
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {getOptionTitle(option)}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Select;
