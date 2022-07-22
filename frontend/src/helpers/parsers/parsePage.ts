import { SERVER } from "@constants";

import { IPromoProps } from "@interfaces/IPromoProps";
import { IPartnerCard } from "@interfaces/IPartnerCard";
import { IGalleryCard } from "@interfaces/IGalleryCard";
import { IPromoCard } from "@interfaces/IPromoCard";
import { ISeoProps } from "@interfaces/ISeoProps";
import { ISecondaryPage } from "@interfaces/pages/ISecondaryPage";
import { IFormat } from "@interfaces/IFormat";
import { IFormatItem } from "@interfaces/IFormatItem";
import { IDirtyDop } from "@interfaces/dirtyServerResponse/IDirtyDops";
import { IAddition } from "@interfaces/IAddition";
import { IHomePage } from "@interfaces/pages/IHomePage";
import { IPageLink } from "@interfaces/IPageLink";
import {
    IDirtyFormat,
    IDirtyFormatItem,
    IDirtyPage,
    IDirtySeo,
    IDirtyPages,
    IDirtyPromo,
    IDirtySpecialization,
    IDirtyPromoInfo,
    IDirtyMainPage,
    IDirtyPartnerItem,
    IDirtyMedia,
} from "@interfaces/dirtyServerResponse/IDirtyPage";

import translateTitle from "@helpers/translateTitle";

const parsePromo = (dirtyPromo: IDirtyPromo): IPromoProps => {
    return {
        image: `${SERVER}${dirtyPromo.image.data?.attributes.url}`,
        title: dirtyPromo.mainTitle,
        description: dirtyPromo.description.map((item) => item.text),
    };
};

const parseFormatItems = (dirtyFormatItems: IDirtyFormatItem[]): IFormatItem[] => {
    return dirtyFormatItems.map((item) => ({
        title: item.topTitle,
        firstText: item.text.split("\n").map((str) => str.replace(/[\\n]/g, "")),
        list: {
            title: item.bottomTitle,
            text: item.description.split("\n").map((str) => str.replace(/[\\n]/g, "")),
        },
        buttonText: item.buttonText,
    }));
};

const parseFormat = (dirtyFormat: IDirtyFormat): IFormat => {
    return {
        title: dirtyFormat.title,
        items: parseFormatItems(dirtyFormat.items),
    };
};

const parseSeo = (dirtySeo: IDirtySeo): ISeoProps => {
    return {
        image: `${SERVER}${dirtySeo.image.data?.attributes.url}`,
        title: dirtySeo.title,
        description: dirtySeo.description.split("."),
    };
};

export const parseDop = (dirtyDop: IDirtyDop): IAddition => {
    return {
        id: Number(dirtyDop.id),
        image: `${SERVER}${dirtyDop.attributes.image.data?.attributes.url}`,
        title: dirtyDop.attributes.title,
        price: dirtyDop.attributes.price,
    };
};

export const parseSpecialize = (dirtyItem: IDirtySpecialization): IPromoCard => {
    return {
        title: dirtyItem.attributes.promoInfo.title,
        characteristics: dirtyItem.attributes.promoInfo.characteristics.map((item) => item.text),
        description: dirtyItem.attributes.promoInfo.description.split("\n").map((str) => str.replace(/[\\n]/g, "")),
        image: `${SERVER}${dirtyItem.attributes.promoInfo.image.data?.attributes.url}`,
        link: `/catalog/${translateTitle(dirtyItem.attributes.promoInfo.title)}`,
    };
};

export const parsePromoInfo = (dirtyInfo: IDirtyPromoInfo): IPromoCard => {
    return {
        title: dirtyInfo.title,
        characteristics: dirtyInfo.characteristics.map((item) => item.text),
        description: dirtyInfo.description.split("."),
        image: `${SERVER}${dirtyInfo.image.data?.attributes.url}`,
        link: `/catalog/${translateTitle(dirtyInfo.title)}`,
    };
};

export const parseMenu = (pages: ISecondaryPage[]): IPageLink[] => {
    const menuItems = pages.map((page) => ({
        title: page.promo.title,
        url: `/catalog/${translateTitle(page.promo.title)}`,
    }));

    const mainPageLink: IPageLink = { title: "Главная страница", url: "/" };

    return [mainPageLink, ...menuItems];
};

export const parseSecondaryPage = (dirtyPage: IDirtyPage): ISecondaryPage => {
    return {
        id: Number(dirtyPage.id),
        promo: parsePromo(dirtyPage.attributes.promo),
        promoInfo: parsePromoInfo(dirtyPage.attributes.promoInfo),
        format: parseFormat(dirtyPage.attributes.formats),
        seo: parseSeo(dirtyPage.attributes.seo),
        additions: dirtyPage.attributes.dops.data.map((addition) => parseDop(addition)),
        specialize: dirtyPage.attributes.specialization.data.map((item) => parseSpecialize(item)),
        menu: [],
        cardType: dirtyPage.attributes.cardType,
    };
};

export const parseSecondaryPages = (dirtyPages: IDirtyPages): ISecondaryPage[] => {
    return dirtyPages.data.pages.data.map((dirtyPage) => parseSecondaryPage(dirtyPage));
};

const parsePatnerSection = (items: IDirtyPartnerItem[]): IPartnerCard[] => {
    const cards: IPartnerCard[] = items.map((item) => ({
        index: Number(item.id),
        title: item.title,
        description: item.description.split("/n").map((str) => str.replace(/[\\n]/g, "")),
    }));

    return cards;
};

const parseGalleryCards = (cards: IDirtyMedia[]): IGalleryCard[] => {
    const media: IGalleryCard[] = cards.map((card) => {
        const hasVideo: boolean = card.video.data !== null;

        return {
            id: Number(card.id),
            miniImage: `${SERVER}${card.miniImage.data?.attributes.url}`,
            midImage: `${SERVER}${card.midImage.data?.attributes.url}`,
            phoneImage: `${SERVER}${card.phoneImage.data?.attributes.url}`,
            modalImage: hasVideo ? null : `${SERVER}${card.modalImage.data?.attributes.url}`,
            video: hasVideo ? `${SERVER}${card.video.data?.attributes.url}` : null,
        };
    });

    return media;
};

export const parseMainPage = (dirtyPage: IDirtyMainPage): IHomePage => {
    return {
        menu: [],
        promo: parsePromo(dirtyPage.data.mainPage.data.attributes.promo),
        partnerCards: parsePatnerSection(dirtyPage.data.mainPage.data.attributes.PartnerSection),
        galleryCards: parseGalleryCards(dirtyPage.data.mainPage.data.attributes.gallery),
        faq: dirtyPage.data.mainPage.data.attributes.FAQ,
        promoCards: [],
        news: [],
        seo: parseSeo(dirtyPage.data.mainPage.data.attributes.seo),
    };
};
