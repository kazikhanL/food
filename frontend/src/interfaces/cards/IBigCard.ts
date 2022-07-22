import { ICard } from "./ICard";

export interface ICardAddition {
    id: number;
    title: string;
    price: number;
    image: string;
    selected: boolean;
}

export interface IBigCard extends ICard {
    tags: string[];
    topDescription: {
        title: string;
        description: string;
    };
    additions: ICardAddition[];
}