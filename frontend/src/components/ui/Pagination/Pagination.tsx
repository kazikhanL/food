import Pagination from "rc-pagination";

import styles from "./Pagination.module.scss";
import { PaginationProps } from "./Pagination.props";
import Button from "../Button";
import ArrowIcon from "@components/icons/ArrowIcon";

function MyPagination({ current, pageSize, total, showMoreHandler, changeHandler  }: PaginationProps) {
    const shown = total > pageSize * current ? pageSize * current : total;

    return (
        <div className={styles.wrapper}>
            <div className={styles.showMoreBtn}>
                <p>Показано {shown} из {total}</p>
                {total > pageSize * current ? (
                    <Button color="transparent" onClick={showMoreHandler}>
                        Показать ещё
                    </Button>
                ) : null}
            </div>
            <Pagination
                current={current}
                total={total}
                pageSize={pageSize}
                prevIcon={<ArrowIcon />}
                nextIcon={<ArrowIcon />}
                jumpNextIcon="..."
                jumpPrevIcon="..."
                showLessItems={true}
                showTitle={false}
                hideOnSinglePage={true}
                onChange={changeHandler}
            />
        </div>
    );
}

export default MyPagination;
