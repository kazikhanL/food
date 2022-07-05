import { ForwardedRef, forwardRef, useState } from "react";
import { motion, AnimatePresence, Variants, Transition } from "framer-motion";

import styles from "./Select.module.scss";
import { SelectProps } from "./Select.props";
import { IOption } from "@interfaces/forms/IOption";
import ArrowIcon from "@components/icons/ArrowIcon";

const Select = forwardRef((props: SelectProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    const {
        options,
        defaultSelectedOption = options[0],
        changeHandler,
        color = "companion",
        className = "",
        ...attrs
    } = props;

    const [visibleOptions, setVisibleOptions] = useState<boolean>(false);
    const [currentOption, setCurrentOption] = useState<IOption>(defaultSelectedOption);

    const toggleVisible = (): void => setVisibleOptions((state) => !state);

    const onChange = (option: IOption): void => {
        setCurrentOption(option);
        changeHandler(option);
    };

    const optionsTransition: Transition = { duration: 0.5 };

    const optionsVarians: Variants = {
        hidden: { scale: 0 },
        visible: { scale: 1 },
    };

    return (
        <div className={`${styles.wrapper} ${className} ${styles[color]}`} onClick={toggleVisible}>
            <input ref={ref} type="text" {...attrs} readOnly hidden />
            <p className={visibleOptions ? `${styles.title} ${styles.visible}` : styles.title}>
                {currentOption.message}
                <ArrowIcon />
            </p>
            <AnimatePresence>
                {visibleOptions ? (
                    <motion.ul
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={optionsVarians}
                        transition={optionsTransition}
                        className={styles.list}
                    >
                        {options.map((option) => (
                            <li key={option.value} onClick={onChange.bind(this, option)}>{option.message}</li>
                        ))}
                    </motion.ul>
                ) : null}
            </AnimatePresence>
            {visibleOptions ? <div className={styles.overlay} /> : null}
        </div>
    );
});

export default Select;