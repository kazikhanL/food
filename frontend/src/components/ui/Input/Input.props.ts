import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    color?: "dark";
    errorClassName?: string;
    wrapperClassName?: string;
    message?: string | undefined | null;
}