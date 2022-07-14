import { IDirtyImage } from "./IDirtyImage";

export interface IDirtyDop {
    id: string;
    attributes: {
        image: IDirtyImage;
        title: string;
        price: number;
    };
}

export interface IDirtyDops {
    data: {
        dops: {
            data: IDirtyDop[];
        };
    };
}
