export interface ICardImage {
    default: string;
    modal: string;
}

export interface IDescription {
    title: string;
    description: string;
}

export interface ICard {
    id: number;
    images: ICardImage[];
    title: string;
    description: IDescription[];
    branding: boolean;
    price: number;
}
