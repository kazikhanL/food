import { IconProps } from "./Icon.props";

const PlayIcon = ({ className = "" }: IconProps): JSX.Element => {
    return (
        <svg 
            width="80" 
            height="80" 
            viewBox="0 0 80 80" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M40 0C17.92 0 0 17.92 0 40C0 62.08 17.92 80 40 80C62.08 80 80 62.08 80 40C80 17.92 62.08 0 40 0ZM32 58V22L56 40L32 58Z" fill="white" />
        </svg>
    );
};

export default PlayIcon;
