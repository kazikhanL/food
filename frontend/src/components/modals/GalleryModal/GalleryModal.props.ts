import { IGalleryCard } from "@interfaces/IGalleryCard";

export interface GalleryModalProps {
    isActive: boolean;
    galleryCards: IGalleryCard[];
    selectedSlideIndex?: number;
    closeHandler: () => void;
}
