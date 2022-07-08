import styles from "./FormatSection.module.scss";
import { FormatSectionProps } from "./FormatSection.props";
import SubTitle from "@components/elements/SubTitle/SubTitle";
import Button from "@components/ui/Button";
import ButtonLink from "@components/ui/ButtonLink";

const FormatSection = ({ items }: FormatSectionProps): JSX.Element => {
    const [first, second, third] = items;

    return (
        <section>
            <div className="container">
                <h2>В каких форматах мы работаем</h2>
                <SubTitle>Выберите наиболее подходящий вариант для вашего мероприятия</SubTitle>

                <div className={styles.inner}>
                    <article>
                        <h3>{first.title}</h3>
                        {first.firstText.split(".").map((text, index) => <p key={index}>{text}</p>)}
                        <h4>{first.list.title}</h4>
                        <div className={styles.list}>
                            {first.list.text.map((text, index) => <p key={index}>{text}</p>)}
                        </div>
                        <ButtonLink href="#catalog" color="blue-transparent">
                            {first.buttomText ? first.buttomText : "Смотреть каталог"}
                        </ButtonLink>
                        <div className={styles.num}>1</div>
                    </article>
                    <article>
                        <h3>{second.title}</h3>
                        {second.firstText.split(".").map((text, index) => <p key={index}>{text}</p>)}
                        <h4>{second.list.title}</h4>
                        <div className={styles.list}>
                            {second.list.text.map((text, index) => <p key={index}>{text}</p>)}
                        </div>
                        <ButtonLink href="#catalog" color="blue">
                            {second.buttomText ? second.buttomText : "Смотреть каталог"}
                        </ButtonLink>
                        <div className={styles.num}>2</div>
                    </article>
                    <article>
                        <h3>{third.title}</h3>
                        {third.firstText.split(".").map((text, index) => <p key={index}>{text}</p>)}
                        <h4>{third.list.title}</h4>
                        <div className={styles.list}>
                            {third.list.text.map((text, index) => <p key={index}>{text}</p>)}
                        </div>
                        <Button color="dark">{third.buttomText ? third.buttomText : "Смотреть каталог"}</Button>
                        <div className={styles.num}>3</div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default FormatSection;