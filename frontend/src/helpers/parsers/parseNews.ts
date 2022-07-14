import { INews } from "@interfaces/INews";
import { IDirtyNews } from "@interfaces/dirtyServerResponse/IDirtyNews";
import { IDirtyNewsItem } from "@interfaces/dirtyServerResponse/IDirtyNews";

import { SERVER } from "@constants";

export const parseNewsItem = (dirtyItem: IDirtyNewsItem): INews => {
    return {
        id: Number(dirtyItem.id),
        metaTitle: dirtyItem.attributes.meta.metaTitle,
        metaDescription: dirtyItem.attributes.meta.metaDescription,
        image: `${SERVER}${dirtyItem.attributes.image.data.attributes.url}`,
        title: dirtyItem.attributes.mainTitle,
        description: dirtyItem.attributes.description.split("\n").map((str) => str.replace(/[\\n]/g, "")),
        date: dirtyItem.attributes.date,
    };
};

export const parseNews = (dirtyNews: IDirtyNews): INews[] => {
    return dirtyNews.data.news.data.map((dirtyItem) => parseNewsItem(dirtyItem));
};
