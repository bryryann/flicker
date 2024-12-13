import React from "react";
import "./style.css";

type BtnVariants = "default" | "danger";

interface BtnProps {
    variant: BtnVariants;
    content: string;
    onClick?: (e?: React.SyntheticEvent) => void;
};

const Button: React.FC<BtnProps> = (props) => (
    <button
        className={`btn btn-${props.variant}`}
        onClick={props.onClick}
    >
        {props.content}
    </button>
);

export default Button;
