import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import styles from "./CardImageSlider.module.scss";
import { CardImageSliderProps } from "./CardImageSlider.props";
import CardGalleryModal from "@components/modals/CardGalleryModal";

const CardImageSlider = ({ media }: CardImageSliderProps): JSX.Element => {
    const defaultImages = media.map((item) => item.default);
    const modalImages = media.map((item) => item.modal);

    const [isModalActive, serIsModalActive] = useState<boolean>(false);
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const openModal = (): void => serIsModalActive(true);
    const cloneModal = (): void => serIsModalActive(false);

    const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        defaultAnimation: {
            duration: 1500,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
    });

    const leaveHandler = (): void => instanceRef.current?.moveToIdx(0);

    const changeSlide = (index: number): void => {
        instanceRef.current?.moveToIdx(index);
    };

    return (
        <>
            <div className={styles.wrapper} onMouseLeave={leaveHandler} onClick={openModal}>
                <div ref={ref} className="keen-slider">
                    {defaultImages.map((image, index) => (
                        <img
                            key={index}
                            className="keen-slider__slide"
                            src={image}
                            alt="slide"
                            width="354"
                            height="265"
                        />
                    ))}
                </div>
                <div className={styles.switchWrapper}>
                    {defaultImages.map((_, index) => (
                        <span
                            key={index}
                            className={styles.switch}
                            onMouseEnter={changeSlide.bind(this, index)}
                        />
                    ))}
                </div>
                <div className={styles.dotsWrapper}>
                    {defaultImages.map((_, index) => (
                        <span
                            key={index}
                            className={currentSlide === index ? `${styles.dot} ${styles.dotActive}` : styles.dot}
                        />
                    ))}
                </div>
            </div>
            <CardGalleryModal 
                images={modalImages} 
                isActive={isModalActive} 
                closeHandler={cloneModal} 
                selectedSlideIndex={currentSlide} 
            />
        </>
    );
};

export default CardImageSlider;
