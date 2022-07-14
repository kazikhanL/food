import styles from "./FormatSection.module.scss";
import { FormatSectionProps } from "./FormatSection.props";
import SubTitle from "@components/elements/SubTitle/SubTitle";
import Button from "@components/ui/Button";
import ButtonLink from "@components/ui/ButtonLink";
import FormatBlobShape from "@components/icons/FormatBlobShape";

const FormatSection = ({ title, items }: FormatSectionProps): JSX.Element => {
    const [first, second, third] = items;

    return (
        <section className={styles.section}>
            <div className="container">
                <h2>{title}</h2>
                <SubTitle>Выберите наиболее подходящий вариант для вашего мероприятия</SubTitle>

                <div className={styles.inner}>
                    <article>
                        <h3>{first.title}</h3>
                        {first.firstText.map((text, index) => <p key={index}>{text}</p>)}
                        <h4>{first.list.title}</h4>
                        <div className={styles.list}>
                            {first.list.text.map((text, index) => <p key={index}>{text}</p>)}
                        </div>
                        {first.buttonText ? (
                            <ButtonLink href="#catalog" color="blue-transparent">
                                {first.buttonText}
                            </ButtonLink>
                        ) : null}
                        <div className={styles.num}>1</div>
                    </article>

                    <article>
                        <h3>{second.title}</h3>
                        {second.firstText.map((text, index) => <p key={index}>{text}</p>)}
                        <h4>{second.list.title}</h4>
                        <div className={styles.list}>
                            {second.list.text.map((text, index) => <p key={index}>{text}</p>)}
                        </div>
                        {second.buttonText ? (
                            <ButtonLink href="#catalog" color="blue-transparent">
                                {first.buttonText}
                            </ButtonLink>
                        ) : null}
                        <div className={styles.num}>2</div>
                    </article>

                    <article>
                        <h3>{third.title}</h3>
                        {third.firstText.map((text, index) => <p key={index}>{text}</p>)}
                        <h4>{third.list.title}</h4>
                        <div className={styles.list}>
                            {third.list.text.map((text, index) => <p key={index}>{text}</p>)}
                        </div>
                        {third.buttonText ? <Button color="dark">{third.buttonText}</Button> : null}
                        <div className={styles.num}>3</div>
                    </article>
                </div>
            </div>

            <FormatBlobShape className={styles.blob} />
        </section>
    );
};

export default FormatSection;
