import { motion, AnimatePresence } from "framer-motion";

import styles from "./ToolTip.module.scss";
import { ToolTipProps } from "./ToolTip.props";
import Portal from "../Portal";

const ToolTip = ({ isActive, x, y, title, image }: ToolTipProps): JSX.Element => {
    return (
        <AnimatePresence>
            {isActive && (
                <Portal>
                    <div className={styles.container}>
                        <motion.div
                            initial={{ position: "fixed", x: x, y: y, opacity: 0 }}
                            animate={{ position: "fixed", x: x, y: y, opacity: 1 }}
                            exit={{ position: "fixed", x: x, y: y, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className={styles.wrapper}
                        >
                            <img src={image} alt={title} width="120" height="90" />
                            <p>{title}</p>
                        </motion.div>
                    </div>
                </Portal>
            )}
        </AnimatePresence>
    );
};

export default ToolTip;