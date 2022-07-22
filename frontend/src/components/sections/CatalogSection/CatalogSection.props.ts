
export interface CatalogProps {
    type: string;
    pageID: number;
    pageTitle: string;
}

export interface CatalogFilter {
    page: number;
    pageSize: number
    sort: string;
}