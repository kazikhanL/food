import { motion } from "framer-motion";

import styles from "./GalleryModal.module.scss";
import { GalleryModalProps } from "./GalleryModal.props";
import Overlay from "../Overlay";
import Slider from "@components/ui/Slider";

const GalleryModal = ({
    isActive,
    galleryCards,
    selectedSlideIndex = 0,
    closeHandler,
}: GalleryModalProps): JSX.Element => {
    const slides: JSX.Element[] = galleryCards.map((card) => {
        const hasVideo = typeof card.video !== "undefined";

        if (hasVideo) {
            return <video src={card.video} controls />;
        } else {
            return <img src={card.modalImage} alt={`slide ${card.id}`} />;
        }
    });

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

export default GalleryModal;