import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import styles from "./Slider.module.scss";
import { SliderProps } from "./Slider.props";
import SliderController from "./SliderController";
import SliderDots from "./SliderDots";

const Slider = ({
    slides,
    spacing = 15,
    disabled = false,
    drag = true,
    hasDots = false,
    hasControllers = false,
    selectedSlide = 0,
    mobCapacity = 1.3,
    tabCapacity = 2.3,
    deskCapacity = 3,
    dotsClassName = "",
    dotActiveClassName = "",
    controllersClassName = "",
}: SliderProps): JSX.Element => {
    const [currentSlide, setCurrentSlide] = useState<number>(selectedSlide);
    const [currentCapacity, setCurrentCapacity] = useState<number>(deskCapacity);

    const updateCapcity = (): void => {
        const [MAX_TAB_SIZE, MAX_MOB_SIZE]: number[] = [950, 600];

        const isDesk: boolean = window.innerWidth > MAX_TAB_SIZE;
        const isMob: boolean = window.innerWidth <= MAX_MOB_SIZE;

        if (isMob) {
            setCurrentCapacity(mobCapacity);
        } else if (isDesk) {
            setCurrentCapacity(deskCapacity);
        } else {
            setCurrentCapacity(tabCapacity);
        }
    };

    useEffect(() => {
        updateCapcity();

        window.addEventListener("resize", updateCapcity);

        return () => window.removeEventListener("resize", updateCapcity);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [sliderRef, instanceRef] = useKeenSlider<HTMLUListElement>({
        initial: selectedSlide,
        mode: "free-snap",
        loop: true,
        disabled: disabled,
        drag: drag,
        slides: { perView: currentCapacity, spacing: spacing },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
    });

    const nextSlide = (): void => instanceRef.current?.next();
    const prevSlide = (): void => instanceRef.current?.prev();
    const changeSlide = (index: number): void => instanceRef.current?.moveToIdx(index);

    return (
        <div className={styles.wrapper}>
            <ul ref={sliderRef} className="keen-slider">
                {slides.map((slide, index) => (
                    <li key={index} className="keen-slider__slide">
                        {slide}
                    </li>
                ))}
            </ul>
            {hasControllers ? (
                <SliderController
                    onPrev={prevSlide}
                    onNext={nextSlide}
                    className={controllersClassName}
                />
            ) : null}
            {hasDots ? (
                <SliderDots
                    count={Math.ceil(slides.length)}
                    activeSlide={currentSlide}
                    changeSlide={changeSlide}
                    className={dotsClassName}
                    dotActiveClassName={dotActiveClassName}
                />
            ) : null}
        </div>
    );
};

export default Slider;
