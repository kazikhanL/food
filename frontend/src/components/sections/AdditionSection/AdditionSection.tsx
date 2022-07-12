import styles from "./AdditionSection.module.scss";
import { AdditionSectionProps } from "./AdditionSection.props";
import Slider from "@components/ui/Slider";
import AdditionCard from "@components/cards/AdditionCard";

const AdditionSection = ({ cards }: AdditionSectionProps): JSX.Element => {
    const slides = cards.map((card) => <AdditionCard key={card.id} {...card} />);

    return (
        <section className={styles.section}>
            <div className="container">
                <h2>вам может пригодиться</h2>
                <div className={styles.sliderWrapper}>
                    <Slider 
                        slides={slides} 
                        hasDots
                        hasControllers
                        spacing={0}
                        deskCapacity={4.1}
                        tabCapacity={2.7}
                        mobCapacity={1.3}
                        controllersClassName={styles.sliderBtns}
                    />
                </div>
            </div>
        </section>
    );
};

export default AdditionSection;
