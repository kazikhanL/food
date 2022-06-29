import styles from "./PanelContacts.module.scss";
import SearchIcon from "@components/icons/SearchIcon";
import EmailIcon from "@components/icons/EmailICon";
import PhoneIcon from "@components/icons/PhoneIcon";
import { EMAIL, PHONE } from "@constants";

const PanelContacts = (): JSX.Element => {
    return (
        <div className={styles.panel}>
            <button className={styles.searchButton}>
                <SearchIcon />
            </button>
            <a className={styles.link} href={`mailto:${EMAIL}`}>
                <EmailIcon />
            </a>
            <a className={styles.link} href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}>
                <PhoneIcon />
            </a>
        </div>
    );
};

export default PanelContacts;