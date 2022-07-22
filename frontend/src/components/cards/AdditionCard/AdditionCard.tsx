import styles from "./AdditionCard.module.scss";
import { IAddition } from "@interfaces/IAddition";
import priceToPretty from "@helpers/priceToPretty";
import CartEmptyIcon from "@components/icons/CartEmptyIcon";
import DoneIcon from "@components/icons/DoneIcon";

import { useAppDispatch, useAppSelector } from "@hooks/store";
import { addAdditionCard, removeAdditionCard } from "@store/slices/cartSlice";

const getButtonStyles = (active: boolean): string => {
    return active ? `${styles.iconsWrapper} ${styles.active}` : styles.iconsWrapper;
};

const AdditionCard = (props: IAddition): JSX.Element => {
    const { image, title, price } = props;

    const dispatch = useAppDispatch();
    const cardsFromCart = useAppSelector((state) => state.cart.addition);
    const hasInStore = cardsFromCart.find((addition) => addition.id === props.id) !== undefined;

    const clickHandler = (): void => {
        if (hasInStore) {
            dispatch(removeAdditionCard(props));
        } else {
            dispatch(addAdditionCard(props));
        }
    };

    return (
        <div className={styles.cardWrapper}>
            <div className={styles.card}>
                <img src={image} alt={title} width="272" height="204" />
                <p>{title}</p>
                <div className={styles.footer}>
                    <p>+ {priceToPretty(price)}₽</p>
                    <button onClick={clickHandler} className={getButtonStyles(hasInStore)}>
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
