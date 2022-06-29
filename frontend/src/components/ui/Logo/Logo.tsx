import Link from "next/link";

import styles from "./Logo.module.scss";
import TruckIcon from "@components/icons/TuckIcon";

const Logo = (): JSX.Element => {
    return (
        <Link href="/" prefetch={false}>
            <a className={styles.wrapper}>
                <TruckIcon />
                <span>Food<br />truck</span>
            </a>
        </Link>
    );
};

export default Logo;
