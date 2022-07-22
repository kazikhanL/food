import { useState } from "react";

import styles from "./FavoriteCards.module.scss";
import { IAddition } from "@interfaces/IAddition";
import { IOption } from "@interfaces/forms/IOption";
import CardImageSlider from "@components/ui/CardImageSlider";
import Select from "@components/ui/Select";
import CartButton from "@components/ui/CartButton";
import DeleteIcon from "@components/icons/DeleteIcon";
import { useAppDispatch, useAppSelector } from "@hooks/store";
import { addAdditionCard, removeAdditionCard } from "@store/slices/cartSlice";
import { removeAdditionFromFavorite } from "@store/slices/favoriteSlice";
import priceToPretty from "@helpers/priceToPretty";
import Counter from "@components/ui/Counter";

const FavoriteAdditionCard = (props: IAddition): JSX.Element => {
    const dispatch = useAppDispatch();
    const cardsFromCart = useAppSelector((state) => state.cart.addition);
    const addedCard = cardsFromCart.find((card) => card.id === props.id);
    const hasInCart = typeof addedCard !== "undefined";

    const { image, title, price } = props;

    const options: IOption[] = [
        { value: "1 сутки", message: "1 сутки" },
        { value: "2 суток", message: "2 суток" },
        { value: "3 суток", message: "3 суток" },
        { value: "4 суток", message: "4 суток" },
        { value: "5 суток", message: "5 суток" },
    ];

    const [selectedDays, setSelectedDays] = useState<IOption>(options[0]);

    const deleteFromFavorite = (): void => {
        dispatch(removeAdditionCard(props));
    };

    const addInCart = (): void => {
        if (hasInCart) {
            dispatch(removeAdditionCard(props));
        } else {
            dispatch(addAdditionCard({...props}));
        }
    };

    const calculatePrice = (): number => {
        return price * Number(selectedDays.value.slice(0, 1));
    };

    return (
        <div className={styles.card}>
            <div className={styles.gallery}>
                <img src={image} alt={title} className={styles.img} />
            </div>
            <div className={styles.wrapper}>
                <p className={styles.title}>{title}</p>
                <div className={styles.btnsWrapper}>
                    <button className={styles.delete} onClick={deleteFromFavorite}>
                        <DeleteIcon />
                        Удалить
                    </button>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.priceWrapper}>
                    <Select color="dark" options={options} changeHandler={setSelectedDays} defaultSelectedOption={selectedDays} />
                    <p className={styles.price}>{priceToPretty(calculatePrice())} ₽</p>
                </div>
                <CartButton className={styles.btn} size="big" isActive={hasInCart} onClick={addInCart} />
            </div>
        </div>
    );
};

export default FavoriteAdditionCard;
