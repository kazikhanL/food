import { IconProps } from "./Icon.props";

const FormatBlobShape = ({ className = "" }: IconProps): JSX.Element => {
    return (
        <svg 
            width="688" 
            height="533" 
            viewBox="0 0 688 533" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M158.501 30.5C58.9005 -46.3 -49.4991 38.4999 -41.4994 143.5V583H676C753 451.5 409.617 516.043 404 451.5C402.1 429.664 473.836 364.191 461.5 330.5C440.938 274.343 343.447 292.82 292.5 261.5C200.814 205.136 258.1 107.3 158.501 30.5Z" fill="#F6F7FA" />
        </svg>
    );
};

export default FormatBlobShape;