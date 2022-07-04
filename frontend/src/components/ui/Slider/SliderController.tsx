import styles from "./Slider.module.scss";
import { ControllerProps } from "./Slider.props";
import RoundButton from "../RoundButton";

const SliderController = ({ onPrev, onNext, currentSlide, maxSlides }: ControllerProps): JSX.Element => {
    return (
        <>
            <RoundButton direction="left" onClick={onPrev} className={styles.leftBtn} /> 
            <RoundButton direction="right" onClick={onNext} className={styles.rightBtn} />
        </>
    );
};

export default SliderController;