import styles from "./GalleryCard.module.scss";
import { IGalleryCard } from "@interfaces/IGalleryCard";
import PlayIcon from "@components/icons/PlayIcon";
import ZoomIcon from "@components/icons/ZoomIcon";

// TODO: сделать модалку на клик 

const GalleryCard = ({
    id,
    midImage,
    miniImage,
    phoneImage,
    video,
    visibleImage = "mobil",
}: IGalleryCard): JSX.Element => {
    const hasVideo = typeof video === "string";

    const getCurrentImage = (): string => {
        switch (visibleImage) {
            case "mid":
                return midImage;
            case "mini":
                return miniImage;
            case "mobil":
                return phoneImage;
            default:
                return midImage;
        }
    };

    return (
        <div className={styles.card}>
            <img src={getCurrentImage()} alt={`slide ${id}`} />
            {hasVideo ? (
                <button className={styles.playBtn}>
                    <PlayIcon />
                </button>
            ) : null}
            {hasVideo ? <div className={styles.overlay} /> : <div className={styles.overlay}><ZoomIcon /></div>}
        </div>
    );
};

export default GalleryCard;
