import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, Variants, Transition } from "framer-motion";

import styles from "./SeoSection.module.scss";
import { ISeoProps } from "@interfaces/ISeoProps";
import toWebpFormat from "@helpers/toWebpFormat";
import ArrowIcon from "@components/icons/ArrowIcon";

const SeoSection = ({ image, title, description }: ISeoProps): JSX.Element => {
    const MAX_TAB_SIZE: number = 950;
    const MAX_MOB_SIZE: number = 500;
    const DEFAULT_HEIGHT: number = 365;

    const imageRef = useRef<HTMLImageElement>(null);

    const [isMobil, setIsMobil] = useState<boolean>(false);
    const [isDesktop, setIsDesktop] = useState<boolean>(false);
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [blockHeight, setBlockHeight] = useState<number>(DEFAULT_HEIGHT);

    const showFull = (): void => setIsClicked(true);

    const updateBlockHeight = (): void => {
        if (imageRef.current) {
            setBlockHeight(imageRef.current.clientHeight);
        } else {
            setBlockHeight(DEFAULT_HEIGHT);
        }
    };

    useEffect(() => {
        updateBlockHeight();

        window.addEventListener("resize", updateBlockHeight);

        return () => window.removeEventListener("resize", updateBlockHeight);
    }, []);

    useEffect(() => {
        setIsMobil(window.innerWidth <= MAX_MOB_SIZE);
        setIsDesktop(window.innerWidth > MAX_TAB_SIZE);
    }, [blockHeight]);

    const blockTransition: Transition = { duration: 0.5 };

    const blockVariants: Variants = {
        full: { height: "auto" },
        short: { height: blockHeight },
        mobShort: { height: blockHeight + 150 },
    };

    const buttonTransition: Transition = { duration: 0.3 };

    const buttonVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const getBlockAnimationName = (): string => {
        if (isMobil) {
            return isClicked ? "full" : "mobShort";
        } else if (isDesktop) {
            return "full";
        } else {
            return isClicked ? "full" : "short";
        }
    };

    return (
        <section className={styles.section}>
            <div className="container">
                <h2>{title}</h2>
                <motion.div
                    initial="full"
                    animate={getBlockAnimationName()}
                    variants={blockVariants}
                    transition={blockTransition}
                    className={styles.description}
                >
                    <picture>
                        <source srcSet={toWebpFormat(image)} type="image/webp" />
                        <img ref={imageRef} src={image} alt={title} width="486" height="365" />
                    </picture>
                    {description.map((text, index) => <p key={index}>{text}</p>)}
                    <AnimatePresence>
                        {!isClicked ? (
                            <motion.button
                                initial="visible"
                                animate={"visible"}
                                exit="hidden"
                                variants={buttonVariants}
                                transition={buttonTransition}
                                onClick={showFull}
                            >
                                Читать далее
                                <ArrowIcon />
                            </motion.button>
                        ) : null}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default SeoSection;
