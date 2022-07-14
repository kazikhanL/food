import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

import apolloClient from "@graphql/client";
import pagesQuery from "@graphql/pagesQuery";
import { ISecondaryPage } from "@interfaces/pages/ISecondaryPage";
import { IDirtyPages } from "@interfaces/dirtyServerResponse/IDirtyPage";
import { parseMenu, parseSecondaryPages } from "@helpers/parsers/parsePage";
import translateTitle from "@helpers/translateTitle";

import HeaderSection from "@components/sections/HeaderSection";
import PromoSection from "@components/sections/PromoSection";
import FormatSection from "@components/sections/FormatSection";
import SeoSection from "@components/sections/SeoSection";
import AdditionSection from "@components/sections/AdditionSection";
import SpecializeSection from "@components/sections/SpecializeSection";
import FooterSection from "@components/sections/FooterSection";

export const getStaticPaths: GetStaticPaths = async () => {
    let pages: ISecondaryPage[] = [];

    try {
        const dirtyPages: IDirtyPages = await apolloClient.query({ query: pagesQuery });

        pages = parseSecondaryPages(dirtyPages);
    } catch {
        pages = [];
    }

    const paths = pages.map((page) => ({ params: { url: translateTitle(page.promo.title) } }));

    return {
        paths: paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext<ParsedUrlQuery>) => {
    let pages: ISecondaryPage[] = [];

    try {
        const dirtyPages: IDirtyPages = await apolloClient.query({ query: pagesQuery });

        pages = parseSecondaryPages(dirtyPages);
    } catch {
        pages = [];
    }

    const url = context.params ? context.params.url : "";

    const currentPage: ISecondaryPage = pages.find((page) => translateTitle(page.promo.title) === url) as ISecondaryPage;

    return {
        props: {
            id: currentPage.id,
            promo: currentPage.promo,
            format: currentPage.format,
            seo: currentPage.seo,
            additions: currentPage.additions,
            specialize: currentPage.specialize,
            menu: parseMenu(pages),
        },
        revalidate: 100,
    };
};

export default function Page({ promo, format, seo, additions, specialize, menu }: ISecondaryPage): JSX.Element {
    return (
        <>
            <HeaderSection pages={menu} />
            <PromoSection {...promo} />
            <FormatSection title={format.title} items={format.items} />
            <AdditionSection cards={additions} />
            <SpecializeSection pages={specialize} />
            <SeoSection {...seo} />
            <FooterSection pages={menu} />
        </>
    );
}
