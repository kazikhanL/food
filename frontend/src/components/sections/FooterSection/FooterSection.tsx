import Link from "next/link";

import styles from "./FooterSection.module.scss";
import { IPageLink } from "@interfaces/IPageLink";
import { PHONE, EMAIL, ADDRESS, BEGINNING_OF_WORK, END_OF_WORK } from "@constants";
import { FooterSectionProps } from "./FooterSection.props";
import Logo from "@components/ui/Logo";
import FooterMenuList from "@components/lists/FooterMenuList";
import PanelFooterContacts from "@components/ui/PanelFooterContacts";

const FooterSection = ({ pages }: FooterSectionProps): JSX.Element => {
    const allPages: IPageLink[] = [...pages, { title: "Новости компании", url: "/news" }];

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.topBlock}>
                    <Logo />
                    <a className={styles.phone} href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}>{PHONE}</a>
                </div>
                <PanelFooterContacts />
                <div className={styles.wrapper}>
                    <div className={styles.contacts}>
                        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                        <p>{ADDRESS}</p>
                        <p>Ежедневно: {BEGINNING_OF_WORK} - {END_OF_WORK}</p>
                    </div>
                    <FooterMenuList pages={allPages} />
                    <div className={styles.bottom}>
                        <div className={styles.yandex}> Yandex metrika badge-widget </div>
                        <Link href="/privacy" prefetch={false}>
                            <a>Политика конфиденциальности</a>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
