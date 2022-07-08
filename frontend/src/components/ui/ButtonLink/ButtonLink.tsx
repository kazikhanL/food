import Link from "next/link";

import styles from "./ButtonLink.module.scss";
import { ButtonLinkProps, Color } from "./ButtonLink.props";

const getStyleClasses = (color: Color): string => {
    switch (color) {
        case "dark":
            return styles.dark;
        case "blue":
            return styles.blue;
        case "blue-transparent":
            return styles.blueTransparent;
        default:
            return styles.dark;
    }
};

const ButtonLink = ({
    color = "dark",
    className = "",
    href,
    children,
    ...props
}: ButtonLinkProps): JSX.Element => {
    return (
        <Link href={href ? href : "/"} prefetch={false}>
            <a className={`${styles.link} ${className} ${getStyleClasses(color)}`} {...props}>{children}</a>
        </Link>
    );
};

export default ButtonLink;
