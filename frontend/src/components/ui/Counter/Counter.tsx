import { ChangeEvent } from "react";

import styles from "./Counter.module.scss";
import { CounterProps } from "./Counter.props";

const Counter = ({
    current,
    changeHandler,
    color = "dark",
    text = "порций",
    className = "",
}: CounterProps): JSX.Element => {
    const addHandler = () => changeHandler(current + 1);
    const removeHandler = () => changeHandler(current - 1);
    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => changeHandler(Number(event.target.value));

    return (
        <div className={`${styles.wrapper} ${styles[color]} ${className}`}>
            <button className={styles.btn} onClick={removeHandler}>
                <span className={styles.minus} />
            </button>
            <div className={styles.inputWrapper}>
                <input value={current} onInput={inputChangeHandler} type="number" />
                <span>{text}</span>
            </div>
            <button className={styles.btn} onClick={addHandler} >
                <span className={styles.plus} />
            </button>
        </div>
    );
};

export default Counter;
