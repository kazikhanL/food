import { useState } from "react";

import styles from "./ImplementedSection.module.scss";
import SubTitle from "@components/elements/SubTitle/SubTitle";
import Slider from "@components/ui/Slider";
import { ImplementedSectionProps } from "./ImplementedSection.props";
import GalleryCard from "@components/cards/GalleryCard";
import GridGalleryBlock from "@components/blocks/GridGalleryBlock";
import GalleryModal from "@components/modals/GalleryModal";

const ImplementedSection = ({ cards }: ImplementedSectionProps): JSX.Element => {
    const [activeModal, setActiveModal] = useState<boolean>(false);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const closeModal = (): void => setActiveModal(false);

    const slideClickHandler = (index: number): void => {
        setActiveIndex(index);
        setActiveModal(true);
    };

    const slides = cards.map((card, index) => (
        <div key={card.id} onClick={slideClickHandler.bind(this, index)}>
            <GalleryCard {...card} visibleImage="mobil" />
        </div>
    ));

    return (
        <section>
            <div className={`container ${styles.container}`}>
                <h2>Реализованные проекты</h2>
                <SubTitle>Окунитесь в атмосферу наших мероприятий</SubTitle>
                <GridGalleryBlock cards={cards} slideClickHandler={slideClickHandler} />
                <div className={styles.sliderWrapper}>
                    <Slider slides={slides} hasDots tabCapacity={3.7} mobCapacity={1.8} />
                </div>
            </div>
            <GalleryModal
                isActive={activeModal}
                galleryCards={cards}
                closeHandler={closeModal}
                selectedSlideIndex={activeIndex}
            />
        </section>
    );
};

export default ImplementedSection;
