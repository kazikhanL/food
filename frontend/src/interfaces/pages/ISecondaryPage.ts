import { IPromoProps } from "@interfaces/IPromoProps";
import { IFormat } from "@interfaces/IFormat";
import { ISeoProps } from "@interfaces/ISeoProps";
import { IAddition } from "@interfaces/IAddition";
import { IPromoCard } from "@interfaces/IPromoCard";
import { IPageLink } from "@interfaces/IPageLink";

export interface ISecondaryPage {
    id: number;
    readonly promo: IPromoProps;
    readonly promoInfo: IPromoCard;
    readonly format: IFormat;
    readonly seo: ISeoProps;
    readonly additions: IAddition[];
    readonly specialize: IPromoCard[];
    readonly menu: IPageLink[];
}
