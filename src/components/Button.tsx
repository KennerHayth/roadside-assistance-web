type ButtonVariant = "primary" | "secondary"

type ButtonProps = {
    label:string
    onClick: () => void
    variant?: ButtonVariant
}

const styles: Record<ButtonVariant, React.CSSProperties> = {
    primary: {fontSize: "20px", color: "white", border: "solid", borderColor: "black"},
    secondary: {fontSize: "10px", color: "white", border: "none"}
}

export default function Button ({label, onClick, variant="primary"}: ButtonProps) {
    return (
        <button 
            onClick={onClick}
            style= {{...styles[variant], backgroundColor: "none",textDecoration: "underline", marginRight:"30px"}} > {label}</button>
    )
}