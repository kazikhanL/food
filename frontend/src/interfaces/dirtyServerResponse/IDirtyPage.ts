import { IDirtyImage } from "./IDirtyImage";
import { IDirtyMeta } from "./IDirtyMeta";
import { IDirtyDop } from "./IDirtyDops";
import { IFAQItem } from "@interfaces/IFAQ";

export interface IDirtyText {
    text: string;
}

export interface IDirtyPromo {
    mainTitle: string;
    description: IDirtyText[]
    image: IDirtyImage;
}

export interface IDirtyPromoInfo {
    id: number;
    image: IDirtyImage;
    title: string;
    characteristics: IDirtyText[];
    description: string;
}

export interface IDirtyFormatItem {
    topTitle: string;
    text: string;
    bottomTitle: string;
    description: string;
    buttonText: string;
}

export interface IDirtyFormat {
    title: string;
    items: IDirtyFormatItem[];
}

export interface IDirtySeo {
    title: string;
    description: string;
    image: IDirtyImage;
}

export interface IDirtySpecialization {
    attributes: {
        promoInfo: IDirtyPromoInfo
    }
}

export interface IDirtyPage {
    id: string;
    attributes: {
        meta: IDirtyMeta;
        promo: IDirtyPromo;
        promoInfo: IDirtyPromoInfo;
        formats: IDirtyFormat;
        seo: IDirtySeo;
        dops: {
            data: IDirtyDop[];
        };
        specialization: {
            data: IDirtySpecialization[];
        };
    };
}

export interface IDirtyPages {
    data: {
        pages: {
            data: IDirtyPage[];
        };
    };
}

export interface IDirtyPartnerItem {
    id: string;
    title: string;
    description: string;
}

export interface IDirtyMedia {
    id: string;
    miniImage: IDirtyImage;
    midImage: IDirtyImage;
    phoneImage: IDirtyImage;
    modalImage: IDirtyImage;
    video: IDirtyImage;
}

export interface IDirtyMainPage {
    data: {
        mainPage: {
            data: {
                attributes: {
                    meta: IDirtyMeta;
                    promo: IDirtyPromo;
                    PartnerSection: IDirtyPartnerItem[];
                    gallery: IDirtyMedia[];
                    FAQ: IFAQItem[];
                    seo: IDirtySeo;
                };
            };
        };
    };
}