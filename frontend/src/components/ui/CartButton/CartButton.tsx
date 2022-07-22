import styles from "./CartButton.module.scss";
import { CartButtonProps } from "./CartButton.props";
import CartEmptyIcon from "@components/icons/CartEmptyIcon";
import DoneIcon from "@components/icons/DoneIcon";

const CartButton = ({ size, isActive, className = "", ...attrs }: CartButtonProps): JSX.Element => {
    const classNames = `${styles.btn} ${styles[size]} ${className} ${isActive ? styles.active : ""}`;

    return (
        <button className={classNames} {...attrs}>
            <span className={styles.iconsWrapper}>
                <span className={styles.plus} />
                <CartEmptyIcon className={styles.cart} />
                <DoneIcon className={styles.doneIcon} />
            </span>
            <span>{isActive ? "Добавлено" : "Добавить"}</span>
        </button>
    );
};

export default CartButton;