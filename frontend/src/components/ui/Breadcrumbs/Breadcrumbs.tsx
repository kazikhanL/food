import Link from "next/link";

import styles from "./Breadcrumbs.module.scss";
import { BreadcrumbsProps } from "./Breadcrumbs.props";
import ArrowIcon from "@components/icons/ArrowIcon";

const Breadcrumbs = ({ current, crumbs }: BreadcrumbsProps): JSX.Element => {
    const crumbsElements = crumbs ? crumbs.map((crumb) => (
        <div className={styles.linkWrapper} key={crumb.url}>
            <Link href={crumb.url}>
                <a className={styles.link}>{crumb.title}</a>
            </Link>
            <ArrowIcon className={styles.arrow} />
        </div>
    )) : null;

    return (
        <div className={`container ${styles.section}`}>
            <div className={styles.wrapper}>
                <Link href="/" prefetch={false}>
                    <a className={styles.link}>Главная</a>
                </Link>
                <ArrowIcon className={styles.arrow} />
                {crumbsElements}
                <p className={styles.current}>{current}</p>
            </div>
        </div>
    );
};

export default Breadcrumbs;