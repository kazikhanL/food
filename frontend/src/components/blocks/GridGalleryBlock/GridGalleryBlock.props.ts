import { IGalleryCard } from "@interfaces/IGalleryCard";

export interface GridGalleryBlockProps {
    cards: IGalleryCard[];
    slideClickHandler: (index: number) => void
}