import styles from "./NewsSection.module.scss";
import { INews } from "@interfaces/INews";

const NewsSection = ({ image, title, description, date }: INews): JSX.Element => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.wrapper}>
                    <img src={image} alt={title} width="508" height="381" />
                    <h1>{title}</h1>
                    {description.map((text, index) => <p key={index}>{text}</p>)}
                    <div className={styles.date}>{date}</div>
                </div>
            </div>
        </section>
    );
};

export default NewsSection;