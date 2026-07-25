


interface ButtonProps {
    title: string;
    onClick: () => void;
}

const Button = ({ title, onClick }: ButtonProps) => {
    return (
        <div onClick={onClick} className="button-style">
            <span>{title}</span>
        </div>
    )
}

export default Button