import styles from "./PromoSection.module.scss";
import { IPromoProps } from "@interfaces/IPromoProps";
import DescriptionBlock from "@components/blocks/DescriptionBlock";
import BlobShapeIcon from "@components/icons/BlobShapeIcon";
import LeftDecorShapeIcon from "@components/icons/LeftDecorShapeIcon";

const PromoSection = ({ image, title, description }: IPromoProps): JSX.Element => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.wrapper}`}>
                <DescriptionBlock title={title} description={description} className={styles.description} />
                <picture className={styles.imageWrapper}>
                    <img
                        className={styles.image}
                        src={image}
                        alt="main image"
                        width="905"
                        height="712"
                    />
                </picture>
            </div>
            <BlobShapeIcon className={styles.blob} />
            <LeftDecorShapeIcon className={styles.decor} />
        </section>
    );
};

export default PromoSection;
