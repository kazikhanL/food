import Link from "next/link";

import styles from "./NewsPromo.module.scss";
import { NewsPromoProps, Direction } from "./NewsPromoProps";
import translateTitle from "@helpers/translateTitle";
import ArrowIcon from "@components/icons/ArrowIcon";

const getStyleClasses = (direction: Direction): string => {
    return direction === "default" ? styles.card : `${styles.card} ${styles.reverse}`;
};

const NewsPromo = ({
    image,
    title,
    description,
    direction = "default",
}: NewsPromoProps): JSX.Element => {
    return (
        <div className={getStyleClasses(direction)}>
            <div className={styles.description}>
                <h3>{title}</h3>
                <p>{description[0].slice(0, 175)}...</p>
                <div className={styles.info}>
                    <span>Подробнее</span>
                    <ArrowIcon />
                </div>
            </div>
            <img className={styles.image} src={image} alt={title} width="508" height="381" />
            <Link href={`/news/${translateTitle(title)}`} prefetch={false}>
                <a className={styles.link}>{title}</a>
            </Link>
        </div>
    );
};

export default NewsPromo;
