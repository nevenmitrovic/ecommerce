import "./sorting-control.style.css";

import Select from "@/components/common/select/Select";

import { capitalize } from "@/helpers/globalHelpers";

import { sortOptions } from "@/constants/navigation";
import { useContext } from "react";
import { SortContext } from "@/contexts/SortContext";

interface SortingControlProps {
  unit?: string;
}

const SortingControl = ({ unit }: SortingControlProps) => {
  const { sortConfig, handleSortConfig } = useContext(SortContext);

  return (
    <div className="sorting-control-container">
      <div className="unit">{unit ? capitalize(unit) : null}</div>
      <div className="sort-control">
        <span>Sort by</span>
        <Select
          options={sortOptions}
          value={sortConfig}
          onChange={handleSortConfig}
        />
      </div>
    </div>
  );
};

export default SortingControl;
