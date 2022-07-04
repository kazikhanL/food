import styles from "./RoundButton.module.scss";
import { RoundButtonProps, Direction } from "./RoundButton.props";
import ArrowIcon from "@components/icons/ArrowIcon";

const getStyleClasses = (direction: Direction, userClass: string): string => {
    return direction === "left" ? `${styles.btn} ${styles.left} ${userClass}` : `${styles.btn} ${userClass}`;
};

const RoundButton = ({ direction = "right", className = "", ...props }: RoundButtonProps): JSX.Element => {
    return (
        <button
            className={getStyleClasses(direction, className)}
            {...props}
        >
            <ArrowIcon />
        </button>
    );
};

export default RoundButton;
