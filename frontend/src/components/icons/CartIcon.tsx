import { IconProps } from "./Icon.props";

const CartIcon = ({ className = "" }: IconProps): JSX.Element => {
    return (
        <svg 
            width="23" 
            height="22" 
            viewBox="0 0 23 22" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path fillRule="evenodd" clipRule="evenodd" d="M1.14782 0C0.697813 0 0.333008 0.364805 0.333008 0.814815C0.333008 1.26482 0.697813 1.62963 1.14782 1.62963H2.98632L3.60287 5.02069C3.60449 5.03067 3.6063 5.04059 3.60828 5.05044L5.08433 13.1687C5.08597 13.1788 5.08779 13.1888 5.08979 13.1987L5.78225 17.0072C5.18887 17.5299 4.81449 18.2953 4.81449 19.1481C4.81449 20.7232 6.09131 22 7.66634 22C9.24138 22 10.5182 20.7232 10.5182 19.1481C10.5182 18.7108 10.4197 18.2964 10.2438 17.9259H15.6815C15.5055 18.2964 15.4071 18.7108 15.4071 19.1481C15.4071 20.7232 16.6839 22 18.2589 22C19.834 22 21.1108 20.7232 21.1108 19.1481C21.1108 17.5731 19.834 16.2963 18.2589 16.2963H7.30933L6.86488 13.8519H18.6767C19.2491 13.8519 19.8034 13.6509 20.2429 13.2841C20.6824 12.9173 20.9793 12.4079 21.0817 11.8447L22.3199 5.03465C22.3631 4.79693 22.2986 4.5523 22.1438 4.3668C21.989 4.1813 21.7598 4.07407 21.5182 4.07407H5.08711L4.58966 1.33811C4.52139 0.962629 4.3235 0.623014 4.0305 0.378479C3.73749 0.133943 3.36796 0 2.98632 0H1.14782ZM5.3834 5.7037L6.56859 12.2222H18.6767C18.8675 12.2222 19.0522 12.1553 19.1988 12.033C19.3453 11.9107 19.4442 11.7409 19.4783 11.5532L20.5419 5.7037H5.3834ZM17.0367 19.1481C17.0367 18.4731 17.5839 17.9259 18.2589 17.9259C18.9339 17.9259 19.4812 18.4731 19.4812 19.1481C19.4812 19.8232 18.9339 20.3704 18.2589 20.3704C17.5839 20.3704 17.0367 19.8232 17.0367 19.1481ZM7.66634 17.9259C6.99133 17.9259 6.44412 18.4731 6.44412 19.1481C6.44412 19.8232 6.99133 20.3704 7.66634 20.3704C8.34136 20.3704 8.88856 19.8232 8.88856 19.1481C8.88856 18.4731 8.34136 17.9259 7.66634 17.9259Z" fill="#343A40" />
        </svg>
    );
};

export default CartIcon;
