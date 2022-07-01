import { motion, Transition, Variants } from "framer-motion";

import styles from "./Accordion.module.scss";
import { AccordionProps } from "./Accordion.props";

const getStyleClasses = (isActive: boolean): string => {
    return isActive ? `${styles.accordion} ${styles.active}` : styles.accordion;
};

const Accordion = ({ question, answer, isActive }: AccordionProps): JSX.Element => {
    const transition: Transition = { duration: 0.5 };

    const variants: Variants = {
        hidden: { height: 0 },
        visible: { height: "auto" },
    };

    return (
        <article className={getStyleClasses(isActive)}>
            <header>
                <h3 className={styles.title}>{question}</h3>
                <div className={styles.icon} />
            </header>
            <motion.div
                initial={isActive ? "visible" : "hidden"}
                animate={isActive ? "visible" : "hidden"}
                variants={variants}
                transition={transition}
                className={styles.answer}
            >
                <p>{answer}</p>
            </motion.div>
        </article>
    );
};

export default Accordion;
