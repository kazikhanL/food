import { useEffect, useState } from "react";

import styles from "./SmallCard.module.scss";
import { ISmallCard } from "@interfaces/cards/ISmallCard";
import { IOption } from "@interfaces/forms/IOption";
import priceToPretty from "@helpers/priceToPretty";
import CardImageSlider from "@components/ui/CardImageSlider";
import Select from "@components/ui/Select";
import FavoriteButton from "@components/ui/FavoriteButton";
import CartButton from "@components/ui/CartButton";
import Counter from "@components/ui/Counter";
import { addSmallCard, removeSmallCard, updateSmallCard } from "@store/slices/cartSlice";
import { addSmallCardToFavorite, removeSmallCardFromFavorite } from "@store/slices/favoriteSlice";
import { useAppDispatch, useAppSelector } from "@hooks/store";


const SmallCard = (props: ISmallCard): JSX.Element => {
    const { images, title, description, branding, price, turnkey } = props;

    const options: IOption[] = [
        { value: "1 сутки", message: "1 сутки" },
        { value: "2 суток", message: "2 суток" },
        { value: "3 суток", message: "3 суток" },
        { value: "4 суток", message: "4 суток" },
        { value: "5 суток", message: "5 суток" },
    ];

    const dispatch = useAppDispatch();

    const cardsFromFavorites = useAppSelector((state) => state.favorites.small);
    const addedFavoriteCard = cardsFromFavorites.find((card) => card.id === props.id);
    const hasInFavorites = addedFavoriteCard !== undefined;

    const cardsFromCart = useAppSelector((state) => state.cart.small);
    const addedCard = cardsFromCart.find((card) => card.id === props.id);
    const hasInStore = addedCard !== undefined;

    const currentAmountItems = turnkey !== null ? turnkey.minItems : undefined;

    const [amountItems, setAmountItems] = useState<number | undefined>(hasInStore ? addedCard.amountItems : currentAmountItems);
    const [selectedDays, setSelectedDays] = useState<IOption>(hasInStore && addedCard.selectedDays ? addedCard.selectedDays : options[0]);


    const addToCartHandler = (): void => {
        if (hasInStore) {
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

    const addToFavoritesHandler = (): void => {
        if (hasInFavorites) {
            dispatch(removeSmallCardFromFavorite(props));
        } else {
            dispatch(addSmallCardToFavorite(props));
        }
    };

    const updateAmountItems = (num: number): void => {
        if (!turnkey) return;

        setAmountItems(num <= turnkey.minItems ? turnkey.minItems : num);
    };

    useEffect(() => {
        if (hasInStore) {
            dispatch(updateSmallCard({
                ...addedCard,
                amount: addedCard.amount,
                amountItems: amountItems,
            }));
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [amountItems]);

    useEffect(() => {
        if (hasInStore) {
            dispatch(updateSmallCard({
                ...addedCard,
                selectedDays: selectedDays,
            }));
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedDays]);

    const calculatePrice = (): string => {
        let total = price;

        if (turnkey) {
            const appendItems = amountItems as number - turnkey.minItems;
            total += appendItems * turnkey.itemPrice;
        } else {
            const days = Number(selectedDays.value.slice(0, 1));
            total *= days;
        }
        
        return priceToPretty(total);
    };

    return (
        <div className={styles.card}>
            <CardImageSlider media={images} />
            <p className={styles.title}>{title}</p>
            <div className={styles.description}>
                {description.map((item, index) => (
                    <p key={index}>
                        <span>{item.title}</span>
                        {item.description}
                    </p>
                ))}
            </div>
            {branding ? <p className={styles.branding}>Возможно брендирование корпуса</p> : null}
            {turnkey ? (
                <p className={styles.itemPrice}>
                    <span>Доп.порция</span>: +{turnkey.itemPrice} ₽
                </p>
            ) : null}
            <div className={styles.footer}>
                <div className={styles.footerTop}>
                    {turnkey ? (
                        <Counter
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
                    <div className={styles.price}>{calculatePrice()} ₽</div>
                </div>
                <div className={styles.footerBottom}>
                    <FavoriteButton size="big" isActive={hasInFavorites} onClick={addToFavoritesHandler} />
                    <CartButton size="big" isActive={hasInStore} onClick={addToCartHandler} />
                </div>
            </div>
        </div>
    );
};

export default SmallCard;