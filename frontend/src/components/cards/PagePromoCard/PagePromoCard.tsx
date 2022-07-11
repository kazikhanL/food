import Link from "next/link";

import styles from "./PagePromoCard.module.scss";
import { IPagePromoLink } from "@interfaces/IPagePromoLink";

const PagePromoCard = ({ image, title, url }: IPagePromoLink): JSX.Element => {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.card}>
                <img src={image} alt={title} width="384" height="234" />
                <h3>{title}</h3>
                <Link href={url} prefetch={false}>
                    <a>Подробнее</a>
                </Link>
            </div>
        </div>
    );
};

export default PagePromoCard;
