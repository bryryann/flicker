import React from "react";
import "./style.css";

type InputTypes = "text" | "password" | "email";

type InputVariants = "outlined" | "underlined";

interface InputProps {
    variant?: InputVariants;
    type?: InputTypes;
    placeholder: string;
    label: string;
    name: string;
    value: string;
    setValue: (e: React.SyntheticEvent) => void;
}

const Input: React.FC<InputProps> = ({
    variant = "outlined",
    type = "text",
    placeholder,
    label,
    name,
    value,
    setValue
}) => (
    <div className={`input input-${variant}`}>
        <label htmlFor={name}>{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={setValue}
            placeholder={placeholder}
        />
    </div>
);

export default Input;
