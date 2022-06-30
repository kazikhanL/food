import styles from "./PanelFooterContacts.module.scss";
import { PHONE, EMAIL, ADDRESS, BEGINNING_OF_WORK, END_OF_WORK } from "@constants";
import PhoneIcon from "@components/icons/PhoneIcon";
import EmailIcon from "@components/icons/EmailICon";
import LocationIcon from "@components/icons/LocationIcon";

const PanelFooterContacts = (): JSX.Element => {
    return (
        <ul className={styles.list}>
            <li>
                <div className={styles.iconWrapper}>
                    <PhoneIcon />
                </div>
                <a href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}>{PHONE}</a>
            </li>
            <li>
                <div className={styles.iconWrapper}>
                    <EmailIcon />
                </div>
                <a href={`tel:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
                <div className={styles.iconWrapper}>
                    <LocationIcon />
                </div>
                <div>
                    <p>{ADDRESS}</p>
                    <p>Ежедневно: {BEGINNING_OF_WORK} - {END_OF_WORK}</p>
                </div>
            </li>
        </ul>
    );
};

export default PanelFooterContacts;
