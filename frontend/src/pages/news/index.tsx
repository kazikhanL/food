import { GetStaticProps } from "next";

import apolloClient from "@graphql/client";
import newsQuery from "@graphql/newsQuery";
import pagesQuery from "@graphql/pagesQuery";

import { parseNews } from "@helpers/parsers/parseNews";
import { parseMenu, parseSecondaryPages } from "@helpers/parsers/parsePage";

import { INewsPage } from "@interfaces/pages/INewsPage";
import { IDirtyNews } from "@interfaces/dirtyServerResponse/IDirtyNews";
import { IDirtyPages } from "@interfaces/dirtyServerResponse/IDirtyPage";
import { ISecondaryPage } from "@interfaces/pages/ISecondaryPage";
import { INews } from "@interfaces/INews";

import HeaderSection from "@components/sections/HeaderSection";
import Breadcrumbs from "@components/ui/Breadcrumbs";
import NewsCatalog from "@components/sections/NewsCatalog";
import FooterSection from "@components/sections/FooterSection";

export const getStaticProps: GetStaticProps = async () => {
    let pages: ISecondaryPage[] = [];
    let news: INews[] = [];

    try {
        const dirtyPages: IDirtyPages = await apolloClient.query({ query: pagesQuery });
        pages = parseSecondaryPages(dirtyPages);
    } catch {
        pages = [];
    }

    try {
        const dirtyNews: IDirtyNews = await apolloClient.query({ query: newsQuery });
        news = parseNews(dirtyNews);
    } catch {
        news = [];
    }

    return {
        props: {
            menu: parseMenu(pages),
            news,
        },
        revalidate: 100,
    };
};

export default function News({ menu, news }: INewsPage): JSX.Element {
    return (
        <>
            <HeaderSection pages={menu} />
            <Breadcrumbs current="Новости компании" />
            <NewsCatalog news={news} />
            <FooterSection pages={menu} />
        </>
    );
}
