import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export interface CartButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    size: "small" | "big";
    isActive: boolean;
}
