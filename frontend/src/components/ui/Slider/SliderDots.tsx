import styles from "./Slider.module.scss";
import { DotsProps } from "./Slider.props";

const getStyleClasses = (isActive: boolean): string => {
    return isActive ? `${styles.dotActive} ${styles.dot}` : styles.dot;
};

const SliderDots = ({ count, activeSlide, changeSlide }: DotsProps): JSX.Element => {
    const dots: number[] = [];

    for (let index = 0; index < count; index++) {
        dots.push(index);
    }

    return (
        <div className={styles.dots}>
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