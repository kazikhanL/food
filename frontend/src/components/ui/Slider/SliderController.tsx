import styles from "./Slider.module.scss";
import { ControllerProps } from "./Slider.props";
import RoundButton from "../RoundButton";

const SliderController = ({ onPrev, onNext, className }: ControllerProps): JSX.Element => {
    return (
        <>
            <RoundButton direction="left" onClick={onPrev} className={`${styles.leftBtn} ${className}`} /> 
            <RoundButton direction="right" onClick={onNext} className={`${styles.rightBtn} ${className}`} />
        </>
    );
};

export default SliderController;