import { useEffect, useState } from "react";

import styles from "./SpecializeSection.module.scss";
import { SpecializeSectionProps } from "./SpecializeSection.props";
import SubTitle from "@components/elements/SubTitle/SubTitle";
import Slider from "@components/ui/Slider";
import PagePromoCard from "@components/cards/PagePromoCard";

/**
 * @returns [isDesk, isTab, isMob]
 */
const getDisplays = (): [boolean, boolean, boolean] => {
    const [MAX_TAB_WIDTH, MAX_MOB_WIDTH] = [950, 600];

    return [
        window.innerWidth > MAX_TAB_WIDTH,
        window.innerWidth <= MAX_TAB_WIDTH && window.innerWidth > MAX_MOB_WIDTH,
        window.innerWidth <= MAX_MOB_WIDTH,
    ];
};

const SpecializeSection = ({ pages }: SpecializeSectionProps): JSX.Element => {
    const slides = pages.map((pageInfo) => <PagePromoCard key={pageInfo.url} {...pageInfo} />);

    const [[isDesk, isTab, isMob], setDisplays] = useState<[boolean, boolean, boolean]>([true, false, false]);

    const updateDisplays = (): void => setDisplays(getDisplays());

    useEffect(() => {
        updateDisplays();

        window.addEventListener("resize", updateDisplays);

        return () => window.removeEventListener("resize", updateDisplays);
    }, []);

    return (
        <section>
            <div className={`container ${styles.container}`}>
                <h2>Мы также специализируемся на</h2>
                <SubTitle>Всевозможные варианты питания на выезде и застройки фудкортов</SubTitle>
                <div className={styles.sliderWrapper}>
                    <Slider
                        slides={slides}
                        spacing={0}
                        drag={isDesk ? false : true}
                        disabled={isMob}
                        hasDots={isTab}
                        dotsClassName={styles.dots}
                        deskCapacity={3}
                        tabCapacity={2.1}
                    />
                </div>
            </div>
        </section>
    );
};

export default SpecializeSection;
