import { ChangeEvent, useRef, useState } from "react";

import styles from "./BigCard.module.scss";
import { ICardAddition } from "@interfaces/cards/IBigCard";
import DoneIcon from "@components/icons/DoneIcon";
import ToolTip from "@components/modals/ToolTip";

type Possition = { x: number, y: number };

type AdditionItemProps = {
    info: ICardAddition,
    changeHandler: (addition: ICardAddition) => void;
};

const AdditionItem = ({ info, changeHandler }: AdditionItemProps): JSX.Element => {
    const { title, price, image, selected } = info;
    const [isActive, setIsActive] = useState<boolean>(false);
    const [possition, setPossition] = useState<Possition>({ x: 0, y: 0 });

    const ref = useRef<HTMLSpanElement>(null);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        changeHandler({...info, selected: event.target.checked});
    };

    const mouseEnterHandler = (): void => {
        if (ref.current) {
            const possInfo = ref.current.getBoundingClientRect();
            const PADDING = 15;
            const HEIGHT = 100;

            setIsActive(true);
            setPossition({ x: possInfo.right + PADDING, y: possInfo.top - HEIGHT });   
        }
    };

    const mouseLeaveHandler = (): void => setIsActive(false);

    return (
        <label>
            <input type="checkbox" checked={selected} onChange={onChangeHandler} />
            <span className={styles.iconWrapper}>
                <DoneIcon />
            </span>
            <span>{title}</span>
            <span className={styles.additionPrice}>+{price}₽</span>
            <span ref={ref} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className={styles.tooltip}>?</span>
            <ToolTip isActive={isActive} x={possition.x} y={possition.y} image={image} title={title} />
        </label>
    );
};

export default AdditionItem;
