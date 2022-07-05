export interface SliderProps {
    readonly slides: JSX.Element[];
    readonly spacing?: number;
    readonly selectedSlide?: number;
    readonly hasDots?: boolean;
    readonly hasControllers?: boolean;
    readonly mobCapacity?: number;
    readonly tabCapacity?: number;
    readonly deskCapacity?: number;
}

export interface ControllerProps {
    onPrev: () => void;
    onNext: () => void;
    maxSlides: number;
    currentSlide: number;
}

export interface DotsProps {
    count: number;
    activeSlide: number,
    changeSlide: (index: number) => void;
}
