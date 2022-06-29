import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./HeaderMenuList.module.scss";
import { HeaderMenuListProps } from "./HeaderMenuList.props";

const getStyleClasses = (currentPath: string, pageUrl: string): string => {
    return currentPath === pageUrl ? `${styles.link} ${styles.active}` : styles.link;
};

const HeaderMenuList = ({ pages }: HeaderMenuListProps): JSX.Element => {
    const router = useRouter();

    return (
        <ul className={styles.list}>
            {pages.map((page) => (
                <li key={page.url}>
                    <Link href={page.url} prefetch={false}>
                        <a className={getStyleClasses(router.asPath, page.url)}>{page.title}</a>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default HeaderMenuList;
