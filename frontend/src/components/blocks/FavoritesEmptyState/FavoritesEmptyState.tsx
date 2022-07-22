import styles from "./FavoritesEmptyState.module.scss";
import HeartIcon from "@components/icons/HeartIcon";

const FavoritesEmptyState = (): JSX.Element => {
    return (
        <div className={styles.block}>
            <p>В Избранном пока ничего нет..</p>
            <p>Добавляйте товары в Избранное с помощью <HeartIcon /></p>
        </div>
    );
};

export default FavoritesEmptyState;
