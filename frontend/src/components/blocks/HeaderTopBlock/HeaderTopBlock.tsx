import styles from "./HeaderTopBlock.module.scss";
import { PHONE, EMAIL, ADDRESS, BEGINNING_OF_WORK, END_OF_WORK } from "@constants";

const HeaderTopBlock = (): JSX.Element => {
    return (
        <div className={styles.headerTop}>
            <div className={`container ${styles.headerTopInner}`}>
                <a href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}>{PHONE}</a>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                <p>{ADDRESS}</p>
                <p>Ежедневно: {BEGINNING_OF_WORK} - {END_OF_WORK}</p>
            </div>
        </div>
    );
};

export default HeaderTopBlock;
