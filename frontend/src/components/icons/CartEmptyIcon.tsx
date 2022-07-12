import { IconProps } from "./Icon.props";

const CartEmptyIcon = ({ className = "" }: IconProps): JSX.Element => {
    return (
        <svg
            width="25"
            height="20"
            viewBox="0 0 25 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M1.75561 0.222208C1.21783 0.222208 0.777832 0.662207 0.777832 1.19998C0.777832 1.73776 1.21783 2.17776 1.75561 2.17776H3.92529L6.49195 12.4444C6.70902 13.3146 7.48929 13.9111 8.38591 13.9111H20.5778C21.4598 13.9111 22.2087 13.3264 22.4414 12.4747L24.9778 3.15554H22.9303L20.5778 11.9555H8.38591L5.81925 1.68887C5.7135 1.26775 5.46946 0.894315 5.12624 0.628385C4.78301 0.362455 4.36045 0.219425 3.92627 0.222208H1.75561ZM19.3556 13.9111C17.7471 13.9111 16.4222 15.236 16.4222 16.8444C16.4222 18.4528 17.7471 19.7777 19.3556 19.7777C20.964 19.7777 22.2889 18.4528 22.2889 16.8444C22.2889 15.236 20.964 13.9111 19.3556 13.9111ZM10.5556 13.9111C8.94715 13.9111 7.62226 15.236 7.62226 16.8444C7.62226 18.4528 8.94715 19.7777 10.5556 19.7777C12.164 19.7777 13.4889 18.4528 13.4889 16.8444C13.4889 15.236 12.164 13.9111 10.5556 13.9111ZM10.5556 15.8666C11.1061 15.8666 11.5334 16.2949 11.5334 16.8444C11.5334 17.3949 11.1051 17.8222 10.5556 17.8222C10.0051 17.8222 9.57782 17.3939 9.57782 16.8444C9.57782 16.2939 10.0061 15.8666 10.5556 15.8666ZM19.3556 15.8666C19.9061 15.8666 20.3334 16.2949 20.3334 16.8444C20.3334 17.3949 19.9051 17.8222 19.3556 17.8222C18.8051 17.8222 18.3778 17.3939 18.3778 16.8444C18.3778 16.2939 18.8061 15.8666 19.3556 15.8666Z" fill="white" />
        </svg>
    );
};

export default CartEmptyIcon;