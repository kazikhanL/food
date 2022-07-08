import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

export type Color = "dark" | "blue-transparent" | "blue";

export interface ButtonLinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    color?: Color;
}