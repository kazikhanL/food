import { useEffect, useState } from "react";

import styles from "./BigCard.module.scss";
import { IBigCard, ICardAddition } from "@interfaces/cards/IBigCard";
import CardImageSlider from "@components/ui/CardImageSlider";
import Button from "@components/ui/Button";
import CartButton from "@components/ui/CartButton";
import FavoriteButton from "@components/ui/FavoriteButton";
import Select from "@components/ui/Select";
import priceToPretty from "@helpers/priceToPretty";
import { IOption } from "@interfaces/forms/IOption";
import CardAdditions from "./CardAdditions";
import { addBigCard, removeBigCard, updateBigCard } from "@store/slices/cartSlice";
import { addBigCardToFavorite, removeBigCardFromFavorite } from "@store/slices/favoriteSlice";
import { useAppDispatch, useAppSelector } from "@hooks/store";

const BigCard = (props: IBigCard): JSX.Element => {
    const { tags, title, price, images, branding, additions, description, topDescription } = props;

    const options: IOption[] = [
        { value: "1 сутки", message: "1 сутки" },
        { value: "2 суток", message: "2 суток" },
        { value: "3 суток", message: "3 суток" },
        { value: "4 суток", message: "4 суток" },
        { value: "5 суток", message: "5 суток" },
    ];

    const dispatch = useAppDispatch();

    const cardsFromFavorites = useAppSelector((state) => state.favorites.big);
    const addedFavoriteCard = cardsFromFavorites.find((card) => card.id === props.id);
    const hasInFavorites = addedFavoriteCard !== undefined;

    const cardsFromCart = useAppSelector((state) => state.cart.big);
    const addedCard = cardsFromCart.find((card) => card.id === props.id);
    const hasInStore = addedCard !== undefined;

    const [selectedDays, setSelectedDays] = useState<IOption>(hasInStore ? addedCard.selectedDays : options[0]);
    const [selectedAdditions, setSelectedAdditions] = useState<ICardAddition[]>(hasInStore ? addedCard.additions : additions);

    const changeAdditionsHandler = (addition: ICardAddition): void => {
        const index = selectedAdditions.findIndex((item) => item.title === addition.title);
        const copyAdditions = [...selectedAdditions];
        copyAdditions[index] = addition;
        
        setSelectedAdditions(copyAdditions);
    };

    const addToCartHandler = (): void => {
        if (hasInStore) {
            dispatch(removeBigCard(props));
        } else {
            dispatch(addBigCard({
                ...props,
                additions: selectedAdditions,
                amount: 1,
                selectedDays: selectedDays,
            }));
        }
    };

    const addToFavoritesHandler = (): void => {
        if (hasInFavorites) {
            dispatch(removeBigCardFromFavorite(props));
        } else {
            dispatch(addBigCardToFavorite(props));
        }
    };

    useEffect(() => {
        if (hasInStore) {
            dispatch(updateBigCard({
                ...props,
                amount: addedCard.amount,
                selectedDays: selectedDays,                
            }));
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedDays]);

    useEffect(() => {
        if (hasInStore) {
            dispatch(updateBigCard({
                ...props,
                amount: addedCard.amount,
                selectedDays: addedCard.selectedDays,                
                additions: selectedAdditions,
            }));
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedAdditions]);

    const calculatePrice = (): string => {
        let total = price;

        selectedAdditions.map((addition) => {
            if (addition.selected) {
                total += addition.price;
            }
        });

        const days = Number(selectedDays.value.slice(0, 1));
        
        return priceToPretty(total * days);
    };

    return (
        <div className={styles.wrapper}>
            <div>
                <CardImageSlider media={images} />
                <div className={styles.descrWrapper}>
                    {description.map((item, index) => (
                        <p key={index} className={styles.descr}>
                            <span>{item.title}</span>
                            {item.description}
                        </p>
                    ))}
                    {branding ? <p className={styles.branding}>Возможно брендирование корпуса</p> : null}
                </div>
            </div>
            <div>
                <p className={styles.title}>{title}</p>
                <div className={styles.tagsWrapper}>
                    {tags.map((tag) => <p key={tag} className={styles.tag}>{tag}</p>)}
                </div>
                <p className={styles.topDescr}>
                    <span>{topDescription.title}</span>
                    {topDescription.description}
                </p>
                <CardAdditions additions={selectedAdditions} changeHandler={changeAdditionsHandler} />
            </div>
            <div className={styles.footer}>
                <div>
                    <Select
                        className={styles.select}
                        options={options}
                        color="dark"
                        changeHandler={setSelectedDays}
                        defaultSelectedOption={selectedDays}
                    />
                    <p className={styles.price}>{calculatePrice()} ₽</p>
                </div>
                <div>
                    <Button className={styles.btn} color="gray">Быстрый заказ</Button>
                    <FavoriteButton size="small" isActive={hasInFavorites} onClick={addToFavoritesHandler} />
                    <CartButton className={styles.btn} size="big" isActive={hasInStore} onClick={addToCartHandler} />
                </div>
            </div>
        </div>
    );
};

export default BigCard;
