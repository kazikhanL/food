export interface SliderProps {
    readonly slides: JSX.Element[];
    readonly spacing?: number;
    readonly selectedSlide?: number;
    readonly hasDots?: boolean;
    readonly hasControllers?: boolean;
    readonly mobCapacity?: number;
    readonly tabCapacity?: number;
    readonly deskCapacity?: number;
    readonly dotsClassName?: string;
    readonly dotActiveClassName?: string;
    readonly controllersClassName?: string;
}

export interface ControllerProps {
    className?: string;
    onPrev: () => void;
    onNext: () => void;
}

export interface DotsProps {
    className: string;
    dotActiveClassName: string;
    count: number;
    activeSlide: number,
    changeSlide: (index: number) => void;
}
