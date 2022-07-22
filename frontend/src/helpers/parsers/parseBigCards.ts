import { SERVER } from "@constants";
import { IBigCard } from "@interfaces/cards/IBigCard";
import { IDirtyBigCard, IDirtyBigCards } from "@interfaces/dirtyServerResponse/IDirtyBigCards";

export const parseBigCard = (dirtyCard: IDirtyBigCard): IBigCard => {
    return {
        id: Number(dirtyCard.id),
        images: dirtyCard.attributes.images.map((item) => ({
            default: `${SERVER}${item.default.data.attributes.url}`,
            modal: `${SERVER}${item.modal.data.attributes.url}`,
        })),
        title: dirtyCard.attributes.title,
        topDescription: {
            title: dirtyCard.attributes.topDescription.title,
            description: dirtyCard.attributes.topDescription.description,
        },
        description: dirtyCard.attributes.description.map((item) => ({
            title: item.title,
            description: item.description,
        })),
        tags: dirtyCard.attributes.tags.map((item) => item.text),
        branding: dirtyCard.attributes.branding,
        price: dirtyCard.attributes.price,
        additions: dirtyCard.attributes.additions.map((item) => ({
            id: Number(item.id),
            image: `${SERVER}${item.image.data.attributes.url}`,
            title: item.title,
            price: item.price,
            selected: item.selected,
        })),
    };
};

export type ResponseBigCards = {
    cards: IBigCard[];
    total: number;
}

export const parseBigCards = (dirtyCards: IDirtyBigCards): ResponseBigCards => {
    return {
        cards: dirtyCards.bigCards.data.map((dirtyCard) => parseBigCard(dirtyCard)),
        total: dirtyCards.bigCards.meta.pagination.total,
    };
};
