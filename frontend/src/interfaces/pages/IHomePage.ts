import { IPromoProps } from "@interfaces/IPromoProps";
import { IPartnerCard } from "@interfaces/IPartnerCard";
import { IGalleryCard } from "@interfaces/IGalleryCard";
import { IPromoCard } from "@interfaces/IPromoCard";
import { INews } from "@interfaces/INews";
import { IFAQItem } from "@interfaces/IFAQ";
import { ISeoProps } from "@interfaces/ISeoProps";
import { IPageLink } from "@interfaces/IPageLink";

export interface IHomePage {
    readonly promo: IPromoProps;
    readonly partnerCards: IPartnerCard[];
    readonly galleryCards: IGalleryCard[];
    readonly promoCards: IPromoCard[];
    readonly news: INews[];
    readonly faq: IFAQItem[];
    readonly seo: ISeoProps;
    readonly menu: IPageLink[];
}
