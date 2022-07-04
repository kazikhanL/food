import styles from "./SubTitle.module.scss";
import { SubTitleProps } from "./SubTitle.props";

const SubTitle = ({ children, className = "" }: SubTitleProps): JSX.Element => {
    return (
        <p className={`${className} ${styles.subTitle}`}>{children}</p>
    );
};

export default SubTitle;
