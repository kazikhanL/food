import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { IOption } from "@interfaces/forms/IOption";


export interface SelectProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    color?: "companion" | "dark";
    options: IOption[];
    defaultSelectedOption?: IOption;
    wrapperClassName?: string;
    optionClassName?: string;
    optionActiveClassName?: string;
    optionsListClassName?: string;

    changeHandler: (option: IOption) => void;
}
