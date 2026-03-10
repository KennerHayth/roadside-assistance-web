import React from "react";

type Variant = "primary" | "secondary" | "danger";

type ButtonType = "button" | "submit" | "reset";

type ButtonProps = {
    desc: string;
    onClick: () => void;
    type?: ButtonType;
    disabled?: boolean;
    variant?: Variant
};

const styleselector = (variant: Variant, disabled:boolean): React.CSSProperties => ({
    backgroundColor: disabled ? "#ccc" : variant === "primary" ? "#48ff00" : variant === "secondary" ? "#fffb00" : variant === "danger" ? "#ff0101" : "#2701ff",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.7 : 1,
    fontSize: "16px",
})

const Button: React.FC<ButtonProps> = ({
    desc,
    onClick,
    type = "button",
    disabled = false,
    variant = "primary",
}) => (
    <button
    type={type}
    onClick={onClick}
    disabled = {disabled}
    style={styleselector(variant, disabled)}
    >
        {desc}
    </button>
    );

export default Button