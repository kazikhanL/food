import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export interface FavoriteButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    size: "small" | "big";
    isActive: boolean;
}
