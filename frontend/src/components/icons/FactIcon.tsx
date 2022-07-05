import { IconProps } from "./Icon.props";

const FactIcon = ({ className = "" }: IconProps): JSX.Element => {
    return (
        <svg 
            width="6" 
            height="35" 
            viewBox="0 0 6 35" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M4.18875 24.88H1.78875L1.06875 10V0.399998H4.90875V10L4.18875 24.88ZM5.62875 31.84C5.62875 32.576 5.37275 33.2 4.86075 33.712C4.34875 34.224 3.72475 34.48 2.98875 34.48C2.25275 34.48 1.62875 34.224 1.11675 33.712C0.60475 33.2 0.34875 32.576 0.34875 31.84C0.34875 31.104 0.60475 30.48 1.11675 29.968C1.62875 29.456 2.25275 29.2 2.98875 29.2C3.72475 29.2 4.34875 29.456 4.86075 29.968C5.37275 30.48 5.62875 31.104 5.62875 31.84Z" fill="white" />
        </svg>
    );
};

export default FactIcon;
