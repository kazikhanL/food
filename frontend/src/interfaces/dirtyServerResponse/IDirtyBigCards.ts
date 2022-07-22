import { IDirtyCardImage, IImageData } from "./IDirtyImage";
import { IDirtyDescrption } from "./IDirtySmallCards";
import { IDirtyText } from "./IDirtyPage";


export interface IDirtyCardAddition {
    id: string;
    title: string;
    price: number;
    selected: boolean;
    image: {
        data: IImageData;
    };
}

export interface IDirtyBigCard {
    id: string;
    attributes: {
        images: IDirtyCardImage[];
        title: string;
        topDescription: IDirtyDescrption;
        description: IDirtyDescrption[];
        tags: IDirtyText[];
        branding: boolean;
        price: number;
        additions: IDirtyCardAddition[];
    };
}

export interface IDirtyBigCards {
    bigCards: {
        data: IDirtyBigCard[];
        meta: {
            pagination: {
                total: number;
            };
        };
    };
}
