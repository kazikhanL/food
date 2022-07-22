import { IBigCard } from "@interfaces/cards/IBigCard";
import { IAddition } from "@interfaces/IAddition";
import { ISmallCard } from "@interfaces/cards/ISmallCard";
import { IOption } from "@interfaces/forms/IOption";

export interface IStoreBigCard extends IBigCard {
    amount: number;
    selectedDays: IOption;
}

export interface IStoreSmallCard extends ISmallCard {
    amount: number;
    amountItems?: number;
    selectedDays?: IOption;
}

export interface IStoreAdditionCard extends IAddition {
    amount: number;
}
