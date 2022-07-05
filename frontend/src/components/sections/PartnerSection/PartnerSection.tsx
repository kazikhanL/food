import styles from "./PartnerSection.module.scss";
import { PartnerSectionProps } from "./PartnerSection.props";
import SubTitle from "@components/elements/SubTitle/SubTitle";
import PartnerBlock from "@components/blocks/PartnerBlock";
import PartnerCard from "@components/cards/PartnerCard";
import Slider from "@components/ui/Slider";

const PartnerSection = ({ descriptionCards }: PartnerSectionProps): JSX.Element => {
    const slides = descriptionCards.map((item) => <PartnerCard key={item.index} {...item} />);

    return (
        <section>
            <div className={`container ${styles.container}`}>
                <h2>Почему мы</h2>
                <SubTitle>Все юридические и физические заботы берём на себя!</SubTitle>

                <ul className={styles.list}>
                    {descriptionCards.map((item) => (
                        <li key={item.index}>
                            <PartnerCard {...item} />
                        </li>
                    ))}
                </ul>

                <div className={styles.sliderWrapper}>
                    <Slider
                        hasDots
                        slides={slides}
                        spacing={0}
                        tabCapacity={2.7}
                    />
                </div>
                <PartnerBlock />
            </div>
        </section>
    );
};

export default PartnerSection;
