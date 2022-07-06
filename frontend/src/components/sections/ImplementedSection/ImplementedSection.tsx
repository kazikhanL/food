import styles from "./ImplementedSection.module.scss";
import SubTitle from "@components/elements/SubTitle/SubTitle";
import Slider from "@components/ui/Slider";
import { ImplementedSectionProps } from "./ImplementedSection.props";
import GalleryCard from "@components/cards/GalleryCard";
import GridGalleryBlock from "@components/blocks/GridGalleryBlock";

const ImplementedSection = ({ cards }: ImplementedSectionProps): JSX.Element => {
    const slides = cards.map((card) => <GalleryCard key={card.id} {...card} visibleImage="mobil" />);

    return (
        <section>
            <div className={`container ${styles.container}`}>
                <h2>Реализованные проекты</h2>
                <SubTitle>Окунитесь в атмосферу наших мероприятий</SubTitle>
                <GridGalleryBlock cards={cards} />
                <div className={styles.sliderWrapper}>
                    <Slider slides={slides} hasDots tabCapacity={3.7} mobCapacity={1.8} />
                </div>
            </div>
        </section>
    );
};

export default ImplementedSection;
