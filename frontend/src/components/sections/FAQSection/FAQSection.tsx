import { useState } from "react";

import styles from "./FAQSection.module.scss";
import { FAQSectionProps } from "./FAQSection.props";
import Accordion from "@components/ui/Accordion";

const FAQSection = ({ FAQ }: FAQSectionProps): JSX.Element => {
    const [activeQuestion, setActiveQuestion] = useState<number>(0);

    const changeActiveQuestion = (index: number): void => setActiveQuestion(index);

    return (
        <section className={styles.section}>
            <div className="container">
                <h2>Вопрос - ответ</h2>
                <ul className={styles.list}>
                    {FAQ.map((item, index) => (
                        <li key={index} onClick={changeActiveQuestion.bind(this, index)}>
                            <Accordion question={item.question} answer={item.answer} isActive={activeQuestion === index} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default FAQSection;
