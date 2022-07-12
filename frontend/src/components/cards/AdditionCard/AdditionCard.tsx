import styles from "./AdditionCard.module.scss";
import { IAddition } from "@interfaces/IAddition";
import { useState } from "react";
import priceToPretty from "@helpers/priceToPretty";
import CartEmptyIcon from "@components/icons/CartEmptyIcon";
import DoneIcon from "@components/icons/DoneIcon";

const getButtonStyles = (active: boolean): string => {
    return active ? `${styles.iconsWrapper} ${styles.active}` : styles.iconsWrapper;
};

const AdditionCard = ({ image, title, price }: IAddition): JSX.Element => {
    const [active, setActive] = useState<boolean>(false);

    const toggleActive = (): void => setActive((currState) => !currState);

    return (
        <div className={styles.cardWrapper}>
            <div className={styles.card}>
                <img src={image} alt={title} width="272" height="204" />
                <p>{title}</p>
                <div className={styles.footer}>
                    <p>+ {priceToPretty(price)}₽</p>
                    <button onClick={toggleActive} className={getButtonStyles(active)}>
                        <div className={styles.plus} />
                        <DoneIcon className={styles.done} />
                        <CartEmptyIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdditionCard;
