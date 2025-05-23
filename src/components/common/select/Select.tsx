import "./select.style.css";

import { getOptionTitle } from "@/helpers/globalHelpers";

interface ISelectProps {
  options: string[];
  onChange: () => void;
}

const Select = ({ options, onChange }: ISelectProps) => {
  return (
    <>
      <select
        name="sort-control-element"
        id="sort-control-element"
        onChange={onChange}
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
