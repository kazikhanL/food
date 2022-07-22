import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import getSmallCardsQuery from "@graphql/getSmallCardsQuery";
import getBigCardsQuery from "@graphql/getBigCardsQuery";
import { parseSmallCards, ResponseSmallCards } from "@helpers/parsers/parseSmallCards";
import { parseBigCards, ResponseBigCards } from "@helpers/parsers/parseBigCards";

import styles from "./CatalogSection.module.scss";
import { CatalogProps, CatalogFilter } from "./CatalogSection.props";
import { FilterType } from "@interfaces/IFilter";
import SmallCard from "@components/cards/SmallCard";
import BigCard from "@components/cards/BigCard";
import Pagination from "@components/ui/Pagination";
import translateTitle from "@helpers/translateTitle";
import scrollToBlockID from "@helpers/scrollToBlockID";

const CatalogSection = ({ pageTitle, type, pageID }: CatalogProps): JSX.Element => {
    const router = useRouter();

    const isBigFormat = type === "big";
    const DEFAULT_BIG_FORMAT_PAGE_SIZE = 5;
    const DEFAULT_SMALL_FORMAT_PAGE_SIZE = 12;
    const currentDefaultPageSize = isBigFormat ? DEFAULT_BIG_FORMAT_PAGE_SIZE : DEFAULT_SMALL_FORMAT_PAGE_SIZE;

    const initialState: CatalogFilter = {
        page: 1,
        pageSize: currentDefaultPageSize,
        sort: "def",
    };

    const getDefaultQuery = (): CatalogFilter => {
        return {
            page: router.query.page ? Number(router.query.page) : initialState.page,
            pageSize: router.query.pageSize ? Number(router.query.pageSize) : initialState.pageSize,
            sort: router.query.sort ? String(router.query.sort) : initialState.sort,
        };
    };

    const currPageQuery = getDefaultQuery();
    const url = `/catalog/${translateTitle(pageTitle)}?page=${currPageQuery.page}&pageSize=${currPageQuery.pageSize}`;

    useEffect(() => {
        router.push(url, undefined, { scroll: false });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.asPath]);

    const gqlBigCardsQuery = getBigCardsQuery(pageID, currPageQuery.page, currPageQuery.pageSize, currPageQuery.sort as FilterType);
    const gqlSmallCardsQuery = getSmallCardsQuery(pageID, currPageQuery.page, currPageQuery.pageSize, currPageQuery.sort as FilterType);
    const gqlQuery = type === "big" ? gqlBigCardsQuery : gqlSmallCardsQuery;

    const { loading, error, data } = useQuery(gqlQuery);
    const [cardsInfo, setCardsInfo] = useState<ResponseBigCards | ResponseSmallCards>({ cards: [], total: 0 });

    useEffect(() => {
        if (!loading && !error) {
            if (isBigFormat) {
                setCardsInfo(parseBigCards(data));
            } else {
                setCardsInfo(parseSmallCards(data));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    const onShowMore = (): void => {
        const newURL = url.replace(`pageSize=${currPageQuery.pageSize}`, `pageSize=${currPageQuery.pageSize + currentDefaultPageSize}`);
        router.push(newURL, undefined, { scroll: false });
    };

    const onChangePage = (index: number) => {
        const newURL = url.replace(`page=${currPageQuery.page}`, `page=${index}`);
        router.push(newURL, undefined, { scroll: false });
        
        setTimeout(() => {
            scrollToBlockID("#catalog");
        });
    };

    const listClassNames = `${styles.list} ${type === "big" ? styles.bigList : styles.smallList}`;

    return (
        <section className={styles.section}>
            <div className="container">
                <h2>Каталог</h2>
                <div id="catalog" />
                <ul className={listClassNames}>
                    {!loading && type === "small" && parseSmallCards(data).cards.map((info) => (
                        <li key={info.id}>
                            <SmallCard {...info} />
                        </li>
                    ))}

                    {!loading && type === "big" && parseBigCards(data).cards.map((info) => (
                        <li key={info.id}>
                            <BigCard {...info} />
                        </li>
                    ))}
                </ul>
                {cardsInfo.cards.length > 0 ? (
                    <Pagination
                        current={currPageQuery.page}
                        pageSize={currPageQuery.pageSize}
                        total={cardsInfo.total}
                        showMoreHandler={onShowMore}
                        changeHandler={onChangePage}
                    />
                ) : null}
            </div>
        </section>
    );
};

export default CatalogSection;
