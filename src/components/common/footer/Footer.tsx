import "./footer.style.css";

import FooterSection from "./FooterSection";

import { footerSections } from "@/constants/navigation";

const Footer = () => {
  return (
    <footer>
      <div className="footer-sections-container">
        {footerSections.map((section, index) => (
          <FooterSection key={index} items={section} />
        ))}
      </div>
    </footer>
  );
};
export default Footer;
