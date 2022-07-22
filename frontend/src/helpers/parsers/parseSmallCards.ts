import { IDirtySmallCard, IDirtySmallCards } from "@interfaces/dirtyServerResponse/IDirtySmallCards";
import { ISmallCard } from "@interfaces/cards/ISmallCard";
import { SERVER } from "@constants";

export const parseSmallCard = (dirtyCard: IDirtySmallCard): ISmallCard => {
    return {
        id: Number(dirtyCard.id),
        images: dirtyCard.attributes.images.map((dirtyImage) => ({
            default: `${SERVER}${dirtyImage.default.data.attributes.url}`,
            modal: `${SERVER}${dirtyImage.modal.data.attributes.url}`,
        })),
        title: dirtyCard.attributes.title,
        description: dirtyCard.attributes.description.map((item) => (({
            title: item.title,
            description: item.description,
        }))),
        branding: dirtyCard.attributes.branding,
        price: dirtyCard.attributes.price,
        turnkey: dirtyCard.attributes.turnkey,
    };
};

export type ResponseSmallCards = {
    cards: ISmallCard[];
    total: number;
}

export const parseSmallCards = (dirtyCards: IDirtySmallCards): ResponseSmallCards => {
    const cards = dirtyCards.smallCards.data.map((card) => parseSmallCard(card));

    return {
        cards: cards,
        total: dirtyCards.smallCards.meta.pagination.total,
    };
};