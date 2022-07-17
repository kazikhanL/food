import styles from "./SmallCard.module.scss";
import { ISmallCard } from "@interfaces/cards/ISmallCard";
import { IOption } from "@interfaces/forms/IOption";
import priceToPretty from "@helpers/priceToPretty";
import CardImageSlider from "@components/ui/CardImageSlider";
import Select from "@components/ui/Select";
import FavoriteButton from "@components/ui/FavoriteButton";


const SmallCard = (props: ISmallCard): JSX.Element => {
    const { images, title, description, branding, price, turnkey } = props;

    const options: IOption[] = [
        { value: "1 сутки", message: "1 сутки" },
        { value: "2 суток", message: "2 суток" },
        { value: "3 суток", message: "3 суток" },
        { value: "4 суток", message: "4 суток" },
        { value: "5 суток", message: "5 суток" },
    ];

    return (
        <div className={styles.card}>
            <CardImageSlider media={images} />
            <p className={styles.title}>{title}</p>
            <div className={styles.description}>
                {description.map((item, index) => (
                    <p key={index}>
                        <span>{item.title}</span>
                        {item.description}
                    </p>
                ))}
            </div>
            {branding ? <p className={styles.branding}>Возможно брендирование корпуса</p> : null}
            {turnkey ? (
                <p className={styles.itemPrice}>
                    <span>Доп.порция</span>: +{turnkey.itemPrice} ₽
                </p>
            ) : null}
            <div className={styles.footer}>
                <div className={styles.footerTop}>
                    {turnkey ? <div>counter</div> : (
                        <Select className={styles.select} color="dark" changeHandler={(e) => { console.log(e); }} options={options} />
                    )}
                    <div className={styles.price}>{priceToPretty(price)} ₽</div>
                </div>
                <div className={styles.footerBottom}>
                    <FavoriteButton size="big" isActive />
                </div>
            </div>
        </div>
    );
};

export default SmallCard;