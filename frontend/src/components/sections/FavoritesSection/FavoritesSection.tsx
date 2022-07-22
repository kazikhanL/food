import { motion, Variants, Transition, AnimatePresence } from "framer-motion";

import styles from "./FavoritesSection.module.scss";
import Breadcrumbs from "@components/ui/Breadcrumbs";
import FavoritesEmptyState from "@components/blocks/FavoritesEmptyState";
import { useAppSelector } from "@hooks/store";
import FavoriteBigCard from "@components/cards/FavoriteCards/FavoriteBigCard";
import FavoriteSmallCard from "@components/cards/FavoriteCards/FavoriteSmallCard";

const FavoritesSection = (): JSX.Element => {
    const cards = useAppSelector((state) => state.favorites);
    const isEmpty = cards.big.length === 0 && cards.small.length === 0 && cards.addition.length === 0;

    const variants: Variants = {
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        hidden: { y: 0, x: 300, opacity: 0 },
    };

    const transition: Transition = {
        duration: 0.5,
    };

    return (
        <section className={styles.section}>
            <Breadcrumbs current="Избранное" />
            <div className="container">
                <h1>Избранное</h1>
                {isEmpty ? <FavoritesEmptyState /> : (
                    <motion.ul
                        className={styles.list}
                        layout
                    >
                        <AnimatePresence>
                            {cards.big.map((card) => (
                                <motion.li
                                    layout
                                    key={`${card.id}-${card.title}`}
                                    transition={transition}
                                    variants={variants}
                                    initial="initial"
                                    animate="animate"
                                    exit="hidden"
                                >
                                    <FavoriteBigCard {...card} />
                                </motion.li>
                            ))}
                            
                            {cards.small.map((card) => (
                                <motion.li
                                    layout
                                    key={`${card.id}-${card.title}`}
                                    transition={transition}
                                    variants={variants}
                                    initial="initial"
                                    animate="animate"
                                    exit="hidden"
                                >
                                    <FavoriteSmallCard {...card} />
                                </motion.li>
                            ))}
                        </AnimatePresence>
                    </motion.ul>
                )}
            </div>
        </section>
    );
};

export default FavoritesSection;
