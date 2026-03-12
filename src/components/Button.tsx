type ButtonVariant = "primary" | "secondary"

type ButtonProps = {
    label:string
    onClick: () => void
    variant?: ButtonVariant
}

const styles: Record<ButtonVariant, React.CSSProperties> = {
    primary: {fontSize: "23px", color: "black", border: "solid", borderColor: "black"},
    secondary: {fontSize: "10px", color: "white", border: "none"}
}

export default function Button ({label, onClick, variant="primary"}: ButtonProps) {
    return (
        <button 
            onClick={onClick}
            style= {{...styles[variant],fontWeight:"bold", background: "#db8606", marginRight:"30px",}} > {label}</button>
    )
}