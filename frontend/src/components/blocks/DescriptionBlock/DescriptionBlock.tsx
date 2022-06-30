import { useEffect, useRef, useState } from "react";
import { motion, Variants, Transition } from "framer-motion";

import styles from "./DescriptionBlock.module.scss";
import { DescriptionBlockProps } from "./DescriptionBlock.props";
import DownArrowIcon from "@components/icons/DownArrowIcon";

const DescriptionBlock = ({ title, description, className = "" }: DescriptionBlockProps): JSX.Element => {
    const PADDING: number = 27;
    const DEFAULT_POSITION: number = 10;
    const MAX_OUTSIDE_POSITION: number = -600;

    const titleRef = useRef<HTMLHeadingElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState<number>(DEFAULT_POSITION);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleIsOpen = (): void => setIsOpen((state) => !state);

    const updatePosition = (): void => {
        if (titleRef.current && wrapperRef.current) {
            setPosition(-wrapperRef.current.offsetHeight + titleRef.current.offsetHeight + PADDING);
        } else {
            setPosition(DEFAULT_POSITION);
        }
    };

    useEffect(() => {
        updatePosition();
    }, [wrapperRef, titleRef, isOpen]);

    useEffect(() => {
        window.addEventListener("resize", updatePosition);

        return () => window.removeEventListener("resize", updatePosition);
    }, []);

    const variants: Variants = {
        visible: { bottom: DEFAULT_POSITION },
        hide: { bottom: position },
        hidden: { bottom: wrapperRef.current ? wrapperRef.current.offsetHeight : MAX_OUTSIDE_POSITION },
    };

    const transition: Transition = { duration: 1 };

    return (
        <motion.div
            ref={wrapperRef}
            initial="hidden"
            animate={isOpen ? "hide" : "visible"}
            variants={variants}
            transition={transition}
            onClick={toggleIsOpen}
            className={`${styles.wrapper} ${className}`}
        >
            <h1 className={styles.title} ref={titleRef}>{title}</h1>
            <div className={styles.textWrapper}>
                {description.map((text) => <p key={text}>{text}</p>)}
            </div>
            <button className={styles.arrow}>
                <DownArrowIcon />
            </button>
        </motion.div>
    );
};

export default DescriptionBlock;
