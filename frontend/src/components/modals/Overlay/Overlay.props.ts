import { ReactNode } from "react";

export interface OverlayProps {
    children: ReactNode;
    isOpen: boolean;
    closeHandler: () => void;
}