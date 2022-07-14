import { INews } from "@interfaces/INews";
import { IPageLink } from "@interfaces/IPageLink";

export interface INewsItemPage {
    menu: IPageLink[];
    info: INews;
}