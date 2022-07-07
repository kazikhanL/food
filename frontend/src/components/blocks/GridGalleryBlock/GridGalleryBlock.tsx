import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import styles from "./GridGalleryBlock.module.scss";
import { GridGalleryBlockProps } from "./GridGalleryBlock.props";
import GalleryCard from "@components/cards/GalleryCard";

const MediaSkelet = (): JSX.Element => <Skeleton width="100%" height="100%" borderRadius={20} />;

const GridGalleryBlock = ({ cards, slideClickHandler }: GridGalleryBlockProps): JSX.Element => {
    const images = cards.filter((card) => typeof card.video === "undefined");
    const videos = cards.filter((card) => typeof card.video !== "undefined");

    return (
        <>
            <div className={styles.parent}>
                <div>
                    {videos[0] ? (
                        <div onClick={() => slideClickHandler(0)}>
                            <GalleryCard {...videos[0]} visibleImage="mobil" />
                        </div>
                    ) : <MediaSkelet />}
                </div>
                <div>
                    {images[0] ? (
                        <div onClick={() => slideClickHandler(1)}>
                            <GalleryCard {...images[0]} visibleImage="mini" />
                        </div>
                    ) : <MediaSkelet />}
                </div>
                <div>
                    {images[1] ? (
                        <div onClick={() => slideClickHandler(2)}>
                            <GalleryCard {...images[1]} visibleImage="mini" />
                        </div>
                    ) : <MediaSkelet />}
                </div>
                <div>
                    {videos[1] ? (
                        <div onClick={() => slideClickHandler(3)}>
                            <GalleryCard {...videos[1]} visibleImage="mid" />
                        </div>
                    ) : <MediaSkelet />}
                </div>
                <div>
                    {images[2] ? (
                        <div onClick={() => slideClickHandler(4)}>
                            <GalleryCard {...images[2]} visibleImage="mini" />
                        </div>
                    ) : <MediaSkelet />}
                </div>
                <div>
                    {images[3] ? (
                        <div onClick={() => slideClickHandler(5)}>
                            <GalleryCard {...images[3]} visibleImage="mini" />
                        </div>
                    ) : <MediaSkelet />}
                </div>
                <div>
                    {images[4] ? (
                        <div onClick={() => slideClickHandler(6)}>
                            <GalleryCard {...images[4]} visibleImage="mini" />
                        </div>
                    ) : <MediaSkelet />}
                </div>
                <div>
                    {images[5] ? (
                        <div onClick={() => slideClickHandler(7)}>
                            <GalleryCard {...images[5]} visibleImage="mini" />
                        </div>
                    ) : <MediaSkelet />}
                </div>
            </div>
        </>
    );
};

export default GridGalleryBlock;
