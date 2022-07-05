import { ForwardedRef, forwardRef } from "react";

import styles from "./Input.module.scss";
import { InputProps } from "./Input.props";

const Input = forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    const {
        color = "dark",
        className = "",
        errorClassName = "",
        wrapperClassName = "",
        message,
        ...attrs
    } = props;

    return (
        <label className={`${styles.wrapper} ${wrapperClassName}`}>
            <input ref={ref} className={`${styles.input} ${className} ${styles[color]}`} {...attrs} />
            {message ? <p className={errorClassName}>{message}</p> : null}
        </label>
    );
});

export default Input;
