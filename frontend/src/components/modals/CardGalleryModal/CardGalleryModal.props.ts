export interface CardGalleryModalProps {
    images: string[];
    isActive: boolean;
    selectedSlideIndex?: number;
    closeHandler: () => void;
}
