import styles from "./PartnerCard.module.scss";
import { IPartnerCard } from "@interfaces/IPartnerCard";

const PartnerCard = ({ index, title, description }: IPartnerCard): JSX.Element => {
    return (
        <div className={styles.card}>
            <article className={styles.wrapper}>
                <h3>{title}</h3>
                {description.map((text, index) => <p key={index}>{text}</p>)}
                <div className={styles.num}>{index}</div>
            </article>
        </div>
    );
};

export default PartnerCard;