import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./FooterMenuList.module.scss";
import { FooterMenuListProps } from "./FooterMenuList.props";

const getStyleClasses = (currentPath: string, pageUrl: string): string => {
    return currentPath === pageUrl ? `${styles.link} ${styles.active}` : styles.link;
};

const FooterMenuList = ({ pages }: FooterMenuListProps): JSX.Element => {
    const router = useRouter();

    return (
        <ul className={styles.list}>
            {pages.map((page) => (
                <li key={page.url}>
                    <Link href={page.url}>
                        <a className={getStyleClasses(router.asPath, page.url)}>{page.title}</a>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default FooterMenuList;
