import { IconProps } from "./Icon.props";

const DoneIcon = ({ className = "" }: IconProps): JSX.Element => {
    return (
        <svg 
            width="11" 
            height="8" 
            viewBox="0 0 11 8" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M1.55566 4L4.55566 7L9.55566 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default DoneIcon;
