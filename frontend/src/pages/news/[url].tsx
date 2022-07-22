import type { GetServerSideProps } from "next";

import apolloClient from "@graphql/client";
import newsQuery from "@graphql/newsQuery";
import pagesQuery from "@graphql/pagesQuery";

import { IPageLink } from "@interfaces/IPageLink";
import { INewsItemPage } from "@interfaces/pages/INewsItemPage";
import { INews } from "@interfaces/INews";
import { IDirtyNews } from "@interfaces/dirtyServerResponse/IDirtyNews";
import { ISecondaryPage } from "@interfaces/pages/ISecondaryPage";
import { IDirtyPages } from "@interfaces/dirtyServerResponse/IDirtyPage";

import translateTitle from "@helpers/translateTitle";
import { parseNews } from "@helpers/parsers/parseNews";
import { parseMenu, parseSecondaryPages } from "@helpers/parsers/parsePage";

import HeaderSection from "@components/sections/HeaderSection";
import Breadcrumbs from "@components/ui/Breadcrumbs";
import NewsSection from "@components/sections/NewsSection";
import FooterSection from "@components/sections/FooterSection";

export const getServerSideProps: GetServerSideProps = async (contex) => {
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

    
    const url = contex.query.url;
    const currentNews: INews | undefined = news.find((item) => translateTitle(item.title) === url);

    return {
        props: {
            menu: parseMenu(pages),
            info: currentNews ? currentNews : null,
        },
        revalidate: 100,
    };
};

export default function News({ menu, info }: INewsItemPage): JSX.Element {
    const crumbs: IPageLink[] = [
        {
            title: "новости",
            url: "/news",
        },
    ];

    return (
        <>
            <HeaderSection pages={menu} />
            <Breadcrumbs crumbs={crumbs} current={info.title} />
            <NewsSection {...info} />
            <FooterSection pages={menu} />
        </>
    );
}
