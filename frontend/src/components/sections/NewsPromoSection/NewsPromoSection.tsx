import styles from "./NewsPromoSection.module.scss";
import { NewsPromoSectionProps } from "./NewsPromoSectionProps";
import NewsPromo from "@components/cards/NewsPromo";
import Slider from "@components/ui/Slider";
import ButtonLink from "@components/ui/ButtonLink";
import ArrowIcon from "@components/icons/ArrowIcon";

const NewsPromoSection = ({ news }: NewsPromoSectionProps): JSX.Element => {
    const slides = news.map((item, index) => (
        <NewsPromo
            key={item.title}
            {...item}
            direction={index % 2 === 0 ? "default" : "reverse"}
        />
    ));

    return (
        <section className={styles.section}>
            <div className={`container ${styles.header}`}>
                <h2>Новости компании</h2>
                <ButtonLink href="/news" className={styles.link}>
                    Смотреть все
                    <ArrowIcon />
                </ButtonLink>
            </div>
            <div className={`container ${styles.newsContainer}`}>
                    <Slider
                        slides={slides}
                        deskCapacity={2}
                        tabCapacity={2.2}
                        mobCapacity={1.2}
                        hasControllers
                        hasDots
                    />
                </div>
        </section>
    );
};

export default NewsPromoSection;
