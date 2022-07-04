import { DetailedHTMLProps, HTMLAttributes, AnchorHTMLAttributes } from "react";

export type Color = "dark";

export interface ButtonLinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    color?: Color;
}