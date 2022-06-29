import { IconProps } from "./Icon.props";

const HeartIcon = ({ className = "" }: IconProps): JSX.Element => {
    return (
        <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M10.0212 2.37963L10.6663 3.04276L11.3114 2.37963C13.7888 -0.166895 18.2478 0.741459 19.8512 3.87277C20.6232 5.38029 20.7593 7.49689 19.4335 10.1125C18.1404 12.6637 15.4586 15.671 10.6663 18.9172C5.87403 15.6713 3.19224 12.6641 1.89914 10.113C0.573417 7.49753 0.709492 5.38087 1.48146 3.87325C3.08495 0.741705 7.544 -0.166826 10.0212 2.37963Z" stroke="#707786" strokeWidth="1.8" />
        </svg>
    );
};

export default HeartIcon;
