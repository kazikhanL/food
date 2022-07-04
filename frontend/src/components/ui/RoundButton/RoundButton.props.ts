import { DetailedHTMLProps, HTMLAttributes } from "react";

export type Direction = "left" | "right";

export interface RoundButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    direction?: Direction;
}
