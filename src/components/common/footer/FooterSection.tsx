import "./footer-section.style.css";

import { NavLink } from "react-router";

interface FooterSectionItem {
  label: string;
  path: string;
}
interface FooterSectionProps {
  items: FooterSectionItem[];
}

const FooterSection = ({ items }: FooterSectionProps) => {
  return (
    <div className="footer-section">
      <ul>
        {items.map((item) => {
          return (
            <li key={item.label}>
              <NavLink to={item.path}>{item.label}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default FooterSection;
