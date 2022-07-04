import { INews } from "@interfaces/INews";

export type Direction = "default" | "reverse";

export interface NewsPromoProps extends INews {
    direction?: Direction;
}