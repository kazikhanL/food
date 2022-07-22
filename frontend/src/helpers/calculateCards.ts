import { IStoreBigCard, IStoreSmallCard, IStoreAdditionCard } from "@interfaces/store";

export const calculateBigCard = (card: IStoreBigCard): number => {
    let total = card.price;

    card.additions.map((addition) => {
        if (addition.selected) {
            total += addition.price;
        }
    });

    total *= card.amount * Number(card.selectedDays.value.slice(0, 1));

    return total;
};

export const calculateSmallCard = (card: IStoreSmallCard): number => {
    let total = card.price;

    if (card.turnkey) {
        const appendItems = card.amountItems as number - card.turnkey.minItems;
        total += appendItems * card.turnkey.itemPrice;
    } else {
        if (card.selectedDays) {
            const days = Number(card.selectedDays.value.slice(0, 1));
            total *= days;
        }
    }
    
    total *= card.amount;

    return total;
};

export const calculateAdditionCard = (card: IStoreAdditionCard): number => {
    return card.price * card.amount;
};
