import Link from "next/link";

import styles from "./CatalogPromoCard.module.scss";
import { IPromoCard } from "@interfaces/IPromoCard";
import toWebpFormat from "@helpers/toWebpFormat";
import StarIcon from "@components/icons/StarIcon";

const CatalogPromoCard = ({
    image,
    title,
    description,
    characteristics,
    link
}: IPromoCard): JSX.Element => {
    return (
        <div className={styles.card}>
            <div className={styles.inner}>
                <picture>
                    <source srcSet={toWebpFormat(image)} type="image/webp" />
                    <img className={styles.image} src={image} alt={title} width="345" height="265" />
                </picture>
                <div className={styles.description}>
                    <h3>{title}</h3>
                    {description.map((text, index) => <p key={index}>{text}</p>)}
                </div>
                <ul className={styles.characters}>
                {characteristics.map((text, index) => (
                    <li key={index}>
                        <StarIcon className={styles.star} />
                        <p>{text}</p>
                    </li>
                ))}
            </ul>
            </div>

            <Link href={link} prefetch={false}>
                <a className={styles.link}>Подробнее</a>
            </Link>
        </div>
    );
};

export default CatalogPromoCard;
