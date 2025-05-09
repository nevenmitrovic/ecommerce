import "./button.style.css";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick: () => void;
  disabled?: boolean | undefined;
  classNam: "main-button" | "order-button";
}

const Button = ({ type, onClick, disabled, classNam, text }: ButtonProps) => {
  return (
    <button
      className={`button ${classNam}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
export default Button;
