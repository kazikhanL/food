import { ICard } from "./ICard";

interface ITurnkey {
    minItems: number;
    itemPrice: number;
}

export interface ISmallCard extends ICard {
    turnkey: ITurnkey | null;
}
