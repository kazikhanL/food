import styles from "./FavoriteButton.module.scss";
import { FavoriteButtonProps } from "./FavoriteButton.props";
import HeartIcon from "@components/icons/HeartIcon";
import DoneIcon from "@components/icons/DoneIcon";

const FavoriteButton = ({ size, isActive, className = "", ...attrs }: FavoriteButtonProps): JSX.Element => {
    const classNames = `${styles.btn} ${styles[size]} ${className} ${isActive ? styles.active : ""}`;

    return (
        <button className={classNames} {...attrs}>
            <span className={styles.iconsWrapper}>
                <HeartIcon />
                <DoneIcon className={styles.doneIcon} />
            </span>
            <span>{isActive ? "В избранном" : "В избранное"}</span>
        </button>
    );
};

export default FavoriteButton;
