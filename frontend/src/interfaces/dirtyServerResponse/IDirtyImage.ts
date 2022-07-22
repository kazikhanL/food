
export interface IImageData {
    attributes: {
        url: string;
    };
}

export interface IDirtyImage {
    data: IImageData | null
}

export interface IDirtyCardImage {
    default: {
        data: IImageData;
    };
    modal: {
        data: IImageData;
    };
}