import { IDirtyImage } from "./IDirtyImage";
import { IDirtyMeta } from "./IDirtyMeta";

export interface IDirtyNewsItem {
    id: string;
    attributes: {
        meta: IDirtyMeta;
        mainTitle: string;
        image: IDirtyImage;
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
