import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export type ButtonColor = "white";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    color?: ButtonColor;
}
