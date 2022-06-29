import styles from "./HeaderSection.module.scss";
import { HeaderSectionProps } from "./HeaderSection.props";
import HeaderTopBlock from "@components/blocks/HeaderTopBlock";
import Logo from "@components/ui/Logo";
import HeaderMenuList from "@components/lists/HeaderMenuList";
import Panel from "@components/ui/Panel";
import PanelContacts from "@components/ui/PanelContacts";

const HeaderSection = ({ pages }: HeaderSectionProps): JSX.Element => {
    return (
        <header className={styles.header}>
            <HeaderTopBlock />
            <div className={styles.headerBottom}>
                <nav className={`container ${styles.headerBottomInner}`}>
                    <Logo />
                    <HeaderMenuList pages={pages} />
                    <Panel />
                    <PanelContacts />
                </nav>
            </div>
        </header>
    );
};

export default HeaderSection;
