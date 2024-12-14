import React from "react";
import "./style.css";

type BtnVariants = "default" | "reverse" | "borderless";

interface BtnProps extends React.PropsWithChildren {
    variant?: BtnVariants;
    className?: string;
    children: string;
    onClick?: (e?: React.SyntheticEvent) => void;
};

const Button: React.FC<BtnProps> = ({
    variant = "default",
    className = "",
    children,
    onClick
}) => (
    <button
        className={`btn btn-${variant} ${className}`}
        onClick={onClick}
    >
        {children}
    </button>
);

export default Button;
