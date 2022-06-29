import Link from "next/link";

import styles from "./FavoriteLink.module.scss";
import { FavoriteLinkProps } from "./FavoriteLink.props";
import HeartIcon from "@components/icons/HeartIcon";

const getStyleClasses = (isEmpty: boolean): string => {
    return isEmpty ? styles.link : `${styles.link} ${styles.active}`;
};

const FavoriteLink = ({ count }: FavoriteLinkProps): JSX.Element => {
    return (
        <Link href="/favorites" prefetch={false}>
            <a className={getStyleClasses(count === 0)}>
                <HeartIcon className={styles.icon} />
                {count > 0 ? <span>{count}</span> : null}
            </a>
        </Link>
    );
};

export default FavoriteLink;
