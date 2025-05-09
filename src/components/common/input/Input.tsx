import "./input.style.css";

import { useId } from "react";

interface InputProps {
  type: "text" | "email" | "password" | "number";
  placeholder: string;
  required?: boolean;
  label?: string;
  color?: "white";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  type,
  placeholder,
  required,
  label,
  color,
  onChange,
}: InputProps) => {
  const id = useId();

  return (
    <div className="input-container">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        style={{
          color:
            color === "white" ? "var(--clr-white)" : "var(--clr-secondary)",
        }}
        type={type}
        id={id}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
