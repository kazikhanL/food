import styles from "./PartnerBlock.module.scss";
import { PartnerBlockProps } from "./PartnerBlock.props";
import ThunderIcon from "@components/icons/Thunder";
import FactIcon from "@components/icons/FactIcon";
import Button from "@components/ui/Button";

const PartnerBlock = ({ className = "" }: PartnerBlockProps): JSX.Element => {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            <div className={styles.fact}>
                <FactIcon />
            </div>
            <div className={styles.description}>
                <h3>Сверхвыгодная партнёрка!</h3>
                <p>Планируете массовое мероприятие? Мы готовы организовать питание под ключ полностью за свой счёт.</p>
                <p>От вас только предоставление площадки.</p>
                <Button className={styles.btn}>Хочу партнёрку!</Button>
            </div>
            <div className={styles.imgWrapper}>
                <picture>
                    <source srcSet="/images/megaphone.webp" type="image/webp" />
                    <img src="/images/megaphone.png" alt="Сверхвыгодная партнёрка!" width="275" height="206" />
                </picture>
                <ThunderIcon className={styles.thunder} />
                <ThunderIcon className={styles.thunder} />
                <ThunderIcon className={styles.thunder} />
            </div>
        </div>
    );
};

export default PartnerBlock;
