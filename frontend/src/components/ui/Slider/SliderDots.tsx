import styles from "./Slider.module.scss";
import { DotsProps } from "./Slider.props";

const SliderDots = ({ 
    count, 
    activeSlide, 
    changeSlide, 
    className, 
    dotActiveClassName,
}: DotsProps): JSX.Element => {
    const dots: number[] = [];

    for (let index = 0; index < count; index++) {
        dots.push(index);
    }

    const getStyleClasses = (isActive: boolean): string => {
        return isActive ? `${styles.dotActive} ${styles.dot} ${dotActiveClassName}` : styles.dot;
    };

    return (
        <div className={`${styles.dots} ${className}`}>
            {dots.map((index) => (
                <button
                    key={index}
                    onClick={changeSlide.bind(this, index)}
                    className={getStyleClasses(index === activeSlide)}
                />
            ))}
        </div>
    );
};

export default SliderDots;


// TODO : ЗАКОНЧИТЬ DOTS -> адапитв слайдера