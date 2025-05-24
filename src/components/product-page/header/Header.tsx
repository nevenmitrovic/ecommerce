import "./header.style.css";

import { capitalize } from "@/helpers/globalHelpers";

interface HeaderProps {
  category?: string;
  brand?: string;
}

const Header = ({ category, brand }: HeaderProps) => {
  return (
    <div className="header-title">
      Fable of {category && capitalize(category)} - {brand && capitalize(brand)}
    </div>
  );
};

export default Header;
