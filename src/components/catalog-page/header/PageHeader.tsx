import "./page-header.style.css";

interface PageHeaderProps {
  unit?: string;
}

const PageHeader = ({ unit }: PageHeaderProps) => {
  return <h1 className="page-header">FABLE OF {unit?.toUpperCase()}</h1>;
};

export default PageHeader;
