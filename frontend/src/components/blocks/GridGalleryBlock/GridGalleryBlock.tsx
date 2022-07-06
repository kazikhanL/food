import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import styles from "./GridGalleryBlock.module.scss";
import { GridGalleryBlockProps } from "./GridGalleryBlock.props";
import GalleryCard from "@components/cards/GalleryCard";

const MediaSkelet = (): JSX.Element => <Skeleton width="100%" height="100%" borderRadius={20} />;

const GridGalleryBlock = ({ cards }: GridGalleryBlockProps): JSX.Element => {
    const images = cards.filter((card) => typeof card.video === "undefined");
    const videos = cards.filter((card) => typeof card.video !== "undefined");

    return (
        <div className={styles.parent}>
            <div>
                {videos[0] ? <GalleryCard {...videos[0]} visibleImage="mobil" /> : <MediaSkelet />}
            </div>
            <div>
                {images[0] ? <GalleryCard {...images[0]} visibleImage="mini" /> : <MediaSkelet />}
            </div>
            <div>
                {images[1] ? <GalleryCard {...images[1]} visibleImage="mini" /> : <MediaSkelet />}
            </div>
            <div>
                {videos[1] ? <GalleryCard {...videos[1]} visibleImage="mid" /> : <MediaSkelet />}
            </div>
            <div>
                {images[2] ? <GalleryCard {...images[2]} visibleImage="mini" /> : <MediaSkelet />}
            </div>
            <div>
                {images[3] ? <GalleryCard {...images[3]} visibleImage="mini" /> : <MediaSkelet />}
            </div>
            <div>
                {images[4] ? <GalleryCard {...images[4]} visibleImage="mini" /> : <MediaSkelet />}
            </div>
            <div>
                {images[5] ? <GalleryCard {...images[5]} visibleImage="mini" /> : <MediaSkelet />}
            </div>
        </div>
    );
};

export default GridGalleryBlock;
