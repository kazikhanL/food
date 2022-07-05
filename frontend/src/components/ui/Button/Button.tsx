import styles from "./Button.module.scss";
import { ButtonProps, ButtonColor } from "./Button.props";

const getStyleClasses = (color: ButtonColor): string => {
    return styles[color];
};

const Button = ({ children, color = "white", className = "", ...props }: ButtonProps): JSX.Element => {
    return (
        <button
            className={`${styles.btn} ${getStyleClasses(color)} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
