
export interface IImageData {
    attributes: {
        url: string;
    };
}

export interface IDirtyImage {
    data: IImageData | null
}