import { IconProps } from "./Icon.props";

const ZoomIcon = ({ className = "" }: IconProps): JSX.Element => {
    return (
        <svg
            width="53"
            height="53"
            viewBox="0 0 53 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M23.1429 43.2857C34.2674 43.2857 43.2857 34.2674 43.2857 23.1429C43.2857 12.0183 34.2674 3 23.1429 3C12.0183 3 3 12.0183 3 23.1429C3 34.2674 12.0183 43.2857 23.1429 43.2857Z" stroke="white" strokeWidth="4.47619" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M38.25 38.25L50 50" stroke="white" strokeWidth="4.47619" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.4287 23.143H29.8573M23.143 16.4287V29.8573V16.4287Z" stroke="white" strokeWidth="4.47619" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default ZoomIcon;
