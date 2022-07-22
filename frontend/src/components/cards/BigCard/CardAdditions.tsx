import styles from "./BigCard.module.scss";
import { ICardAddition } from "@interfaces/cards/IBigCard";
import AdditionItem from "./AdditionItem";

interface CardAdditionsProps {
    additions: ICardAddition[];
    changeHandler: (addition: ICardAddition) => void;
}

const CardAdditions = ({ additions, changeHandler }: CardAdditionsProps): JSX.Element => {

    return (
        <div className={styles.additionsWrapper}>
            <p className={styles.additionsWrapperTitle}>Добавить оборудование:</p>
            <ul className={styles.additionsList}>
                {additions.map((addition, index) => (
                    <li key={index}>
                        <AdditionItem info={addition} changeHandler={changeHandler} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CardAdditions;
