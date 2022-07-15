import { motion } from "framer-motion";

import styles from "./CardGalleryModal.module.scss";
import { CardGalleryModalProps } from "./CardGalleryModal.props";
import Overlay from "../Overlay";
import Slider from "@components/ui/Slider";

const CardGalleryModal = ({ images, isActive, closeHandler, selectedSlideIndex }: CardGalleryModalProps): JSX.Element => {
    const slides: JSX.Element[] = images.map((url, index) => (
        <img
            key={index}
            src={url}
            alt="slide"
            width="800"
            height="600"
            className={styles.slide}
        />
    ));

    return (
        <Overlay
            isOpen={isActive}
            closeHandler={closeHandler}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={styles.wrapper}
            >
                <Slider
                    slides={slides}
                    selectedSlide={selectedSlideIndex}
                    deskCapacity={1}
                    tabCapacity={1}
                    mobCapacity={1}
                    spacing={20}
                    hasDots
                    hasControllers
                    dotsClassName={styles.dots}
                    dotActiveClassName={styles.activeDot}
                    controllersClassName={styles.btn}
                />
            </motion.div>
        </Overlay>
    );
};

export default CardGalleryModal;