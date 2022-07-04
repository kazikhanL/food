import styles from "./AssortmentSection.module.scss";
import { AssortmentSectionProps } from "./AssortmentSection.props";
import CatalogPromoCard from "@components/cards/CatalogPromoCard";
import SubTitle from "@components/elements/SubTitle/SubTitle";

const AssortmentSection = ({ cards }: AssortmentSectionProps): JSX.Element => {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2>Наш ассортимент</h2>
                <SubTitle>Оборудование и мебель для кейтеринга под ключ</SubTitle>
                <ul className={styles.list}>
                    {cards.map((card) => (
                        <li key={card.link}>
                            <CatalogPromoCard {...card} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default AssortmentSection;
