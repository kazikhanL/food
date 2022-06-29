const priceToPretty = (price: number | string): string => {
    return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export default priceToPretty;
