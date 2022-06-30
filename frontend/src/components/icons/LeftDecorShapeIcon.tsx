import { IconProps } from "./Icon.props";

const LeftDecorShapeIcon = ({ className = "" }: IconProps): JSX.Element => {
    return (
        <svg 
            width="419" 
            height="996" 
            viewBox="0 0 419 996" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M0 996V0H231.23C332.023 0 440.162 122.06 415.423 252.709C390.917 382.133 348.228 332 231.23 557.085C140.863 730.935 351.786 846.114 0 996Z" fill="#F6F7FA" />
        </svg>
    );
};

export default LeftDecorShapeIcon;
