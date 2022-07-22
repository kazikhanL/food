import { IImageData } from "./IDirtyImage";
import { IDirtyMeta } from "./IDirtyMeta";

export interface IDirtyNewsItem {
    id: string;
    attributes: {
        meta: IDirtyMeta;
        mainTitle: string;
        image: {
            data: IImageData;
        };
        description: string;
        date: string;
    };
}

export interface IDirtyNews {
    data: {
        news: {
            data: IDirtyNewsItem[]
        }
    };
}
