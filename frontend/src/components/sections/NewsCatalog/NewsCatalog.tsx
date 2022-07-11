import styles from "./NewsCatalog.module.scss";
import { NewsCatalogProps } from "./NewsCatalog.props";
import NewsPromo from "@components/cards/NewsPromo";


const NewsCatalog = ({ news }: NewsCatalogProps): JSX.Element => {
    return (
        <section className={styles.section}>
            <div className="container">
                <h1>Новости компании</h1>
                <ul className={styles.list}>
                    {news.map((newsItem, index) => (
                        <li key={newsItem.title}>
                            <NewsPromo {...newsItem} direction={index % 2 === 0 ? "default" : "reverse"} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default NewsCatalog;
