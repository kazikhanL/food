export interface CounterProps {
    current: number;
    changeHandler: (num: number) => void;
    text?: string;
    color?: "dark" | "gray";
    className?: string;
}
