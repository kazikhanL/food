import { IPageLink } from "@interfaces/IPageLink";

export interface BreadcrumbsProps {
    crumbs?: IPageLink[]; 
    current: string;
}