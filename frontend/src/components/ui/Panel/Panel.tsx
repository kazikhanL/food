import styles from "./Panel.module.scss";
import SearchIcon from "@components/icons/SearchIcon";
import FavoriteLink from "../FavoriteLink";
import CartLink from "../CartLink";

const Panel = (): JSX.Element => {
    return (
        <div className={styles.panel}>
            <button className={styles.searchButton}>
                <SearchIcon />
            </button>
            <FavoriteLink count={0} />
            <CartLink totalPrice={0} />
        </div>
    );
};

export default Panel;
