export interface IGalleryCard {
    id: number;
    midImage: string;
    miniImage: string;
    phoneImage: string;
    modalImage?: string | undefined | null;
    video?: string | undefined | null;
    visibleImage?: "mini" | "mid" | "mobil" | undefined | null;
}