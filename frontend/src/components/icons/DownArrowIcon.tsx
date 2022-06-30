import { IconProps } from "./Icon.props";

const DownArrowIcon = ({ className = "" }: IconProps): JSX.Element => {
    return (
        <svg 
            width="30" 
            height="11" 
            viewBox="0 0 30 11" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M29 1L15 9L1 1" stroke="#343A40" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
};

export default DownArrowIcon;
