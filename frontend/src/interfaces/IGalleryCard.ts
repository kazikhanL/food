export interface IGalleryCard {
    id: number;
    midImage: string;
    miniImage: string;
    phoneImage: string;
    modalImage?: string;
    video?: string;
    visibleImage?: "mini" | "mid" | "mobil";
}