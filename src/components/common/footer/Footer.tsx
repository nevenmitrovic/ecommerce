import "./footer.style.css";

import FooterSection from "./FooterSection";
import Subscribe from "@/components/common/subscribe/Subscribe";

import { footerSections } from "@/constants/navigation";

const Footer = () => {
  return (
    <footer>
      <div className="footer-sections-container">
        {footerSections.map((section, index) => (
          <FooterSection key={index} items={section} />
        ))}
      </div>
      <Subscribe />
    </footer>
  );
};
export default Footer;
