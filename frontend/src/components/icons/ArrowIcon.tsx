import { IconProps } from "./Icon.props";

const ArrowIcon = ({ className = "" }: IconProps): JSX.Element => {
    return (
        <svg 
            width="8" 
            height="14" 
            viewBox="0 0 8 14" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M0.857004 1.00014L6.57129 6.71442L0.857004 12.4287" stroke="#343A40" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
    );
};

export default ArrowIcon;
