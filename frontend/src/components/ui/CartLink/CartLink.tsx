import Link from "next/link";

import styles from "./CartLink.module.scss";
import CartIcon from "@components/icons/CartIcon";
import { CartLinkProps } from "./CartLink.props";
import priceToPretty from "@helpers/priceToPretty";

const getStyleClasses = (isEmpty: boolean): string => {
    return isEmpty ? styles.link : `${styles.link} ${styles.active}`;
};


const CartLink = ({ totalPrice }: CartLinkProps): JSX.Element => {
    return (
        <Link href="/cart" prefetch={false}>
            <a className={getStyleClasses(totalPrice === 0)}>
                <CartIcon className={styles.icon} />
                <span>{priceToPretty(totalPrice)} ₽</span>
            </a>
        </Link>
    );
};

export default CartLink;
