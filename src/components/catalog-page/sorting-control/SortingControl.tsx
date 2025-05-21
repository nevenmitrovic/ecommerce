import "./sorting-control.style.css";

import Select from "@/components/common/select/Select";

import { capitalize } from "@/helpers/globalHelpers";

import { sortOptions } from "@/constants/navigation";

interface SortingControlProps {
  unit?: string;
}

const SortingControl = ({ unit }: SortingControlProps) => {
  return (
    <div className="sorting-control-container">
      <div className="unit">{unit ? capitalize(unit) : null}</div>
      <div className="sort-control">
        <span>Sort by</span>
        <Select options={sortOptions} onChange={() => {}} />
      </div>
    </div>
  );
};

export default SortingControl;
