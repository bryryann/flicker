import React from "react";
import "./style.css";

type BtnVariants = "default" | "danger";

interface BtnProps extends React.PropsWithChildren {
    variant: BtnVariants;
    children: string;
    onClick?: (e?: React.SyntheticEvent) => void;
};

const Button: React.FC<BtnProps> = (props) => (
    <button
        className={`btn btn-${props.variant}`}
        onClick={props.onClick}
    >
        {props.children}
    </button>
);

export default Button;
