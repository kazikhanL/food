import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export type ButtonColor = "white" | "dark" | "accent-transparent";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    color?: ButtonColor;
}
