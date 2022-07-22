import { useState } from "react";

import styles from "./FavoriteCards.module.scss";
import { ISmallCard } from "@interfaces/cards/ISmallCard";
import { IOption } from "@interfaces/forms/IOption";
import CardImageSlider from "@components/ui/CardImageSlider";
import Select from "@components/ui/Select";
import CartButton from "@components/ui/CartButton";
import DeleteIcon from "@components/icons/DeleteIcon";
import { useAppDispatch, useAppSelector } from "@hooks/store";
import { addSmallCard, removeSmallCard, updateSmallCard } from "@store/slices/cartSlice";
import { removeSmallCardFromFavorite } from "@store/slices/favoriteSlice";
import priceToPretty from "@helpers/priceToPretty";
import Counter from "@components/ui/Counter";

const FavoriteSmallCard = (props: ISmallCard): JSX.Element => {
    const dispatch = useAppDispatch();
    const cardsFromCart = useAppSelector((state) => state.cart.small);
    const addedCard = cardsFromCart.find((card) => card.id === props.id);
    const hasInCart = typeof addedCard !== "undefined";

    const { images, title, price, turnkey } = props;

    const options: IOption[] = [
        { value: "1 сутки", message: "1 сутки" },
        { value: "2 суток", message: "2 суток" },
        { value: "3 суток", message: "3 суток" },
        { value: "4 суток", message: "4 суток" },
        { value: "5 суток", message: "5 суток" },
    ];

    const currentAmountItems = turnkey !== null ? turnkey.minItems : undefined;

    const [amountItems, setAmountItems] = useState<number | undefined>(hasInCart ? addedCard.amountItems : currentAmountItems);
    const [selectedDays, setSelectedDays] = useState<IOption>(hasInCart && addedCard.selectedDays ? addedCard.selectedDays : options[0]);

    const deleteFromFavorite = (): void => {
        dispatch(removeSmallCardFromFavorite(props));
    };

    const addInCart = (): void => {
        if (hasInCart) {
            dispatch(removeSmallCard(props));
        } else {
            dispatch(addSmallCard({
                ...props,
                amount: 1,
                amountItems: amountItems,
                selectedDays: turnkey === null ? selectedDays : undefined,
            }));
        }
    };

    const updateAmountItems = (num: number): void => {
        if (!turnkey) return;

        setAmountItems(num <= turnkey.minItems ? turnkey.minItems : num);
    };


    const calculatePrice = (): number => {
        let total = price;

        if (turnkey) {
            const appendItems = amountItems as number - turnkey.minItems;
            total += appendItems * turnkey.itemPrice;
        } else {
            const days = Number(selectedDays.value.slice(0, 1));
            total *= days;
        }

        return total;
    };

    return (
        <div className={styles.card}>
            <div className={styles.gallery}>
                <CardImageSlider media={images} />
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
                    {turnkey ? (
                        <Counter
                            className={styles.counter}
                            current={amountItems as number}
                            changeHandler={updateAmountItems}
                        />
                    ) : (
                        <Select
                            className={styles.select}
                            color="dark"
                            changeHandler={setSelectedDays}
                            options={options}
                            defaultSelectedOption={selectedDays}
                        />
                    )}
                    <p className={styles.price}>{priceToPretty(calculatePrice())} ₽</p>
                </div>
                <CartButton className={styles.btn} size="big" isActive={hasInCart} onClick={addInCart} />
            </div>
        </div>
    );
};

export default FavoriteSmallCard;
