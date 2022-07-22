import { IDirtyCardImage } from "./IDirtyImage";

export interface IDirtyDescrption {
    title: string;
    description: string;
}

export interface IDirtyTurnkey {
    minItems: number;
    itemPrice: number;
}

export interface IDirtySmallCard {
    id: string;
    attributes: {
        images: IDirtyCardImage[],
        title: string;
        description: IDirtyDescrption[];
        branding: boolean;
        price: number;
        turnkey: IDirtyTurnkey | null;
        page: {
            data: {
                id: string;
            };
        };
    }
}

export interface IDirtySmallCards {
    smallCards: {
        data: IDirtySmallCard[];
        meta: {
            pagination: {
                total: number;
            };
        };
    }
}
