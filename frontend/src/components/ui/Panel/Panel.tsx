import styles from "./Panel.module.scss";
import SearchIcon from "@components/icons/SearchIcon";
import FavoriteLink from "../FavoriteLink";
import CartLink from "../CartLink";
import { useAppSelector } from "@hooks/store";
import { calculateAdditionCard, calculateBigCard, calculateSmallCard } from "@helpers/calculateCards";

const Panel = (): JSX.Element => {
    const cartCards = useAppSelector((state) => state.cart);
    const favoriteCards = useAppSelector((state) => state.favorites);
    const favoriteLength = favoriteCards.addition.length + favoriteCards.small.length + favoriteCards.big.length;

    let totalPrice = 0;

    totalPrice += cartCards.big.reduce((sum, card) => sum + calculateBigCard(card), 0);
    totalPrice += cartCards.small.reduce((sum, card) => sum += calculateSmallCard(card), 0);
    totalPrice += cartCards.addition.reduce((sum, card) => sum += calculateAdditionCard(card), 0);

    return (
        <div className={styles.panel}>
            <button className={styles.searchButton}>
                <SearchIcon />
            </button>
            <FavoriteLink count={favoriteLength} />
            <CartLink totalPrice={totalPrice} />
        </div>
    );
};

export default Panel;
