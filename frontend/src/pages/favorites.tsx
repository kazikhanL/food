import type { GetStaticProps, InferGetStaticPropsType } from "next";

import apolloClient from "@graphql/client";
import pagesQuery from "@graphql/pagesQuery";

import { parseMenu, parseSecondaryPages } from "@helpers/parsers/parsePage";

import { IDirtyPages } from "@interfaces/dirtyServerResponse/IDirtyPage";
import { ISecondaryPage } from "@interfaces/pages/ISecondaryPage";
import { IPageLink } from "@interfaces/IPageLink";

import HeaderSection from "@components/sections/HeaderSection";
import FavoritesSection from "@components/sections/FavoritesSection";
import FooterSection from "@components/sections/FooterSection";

interface PageProps {
    menu: IPageLink[];
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
    let pages: ISecondaryPage[] = [];

    try {
        const dirtyPages: IDirtyPages = await apolloClient.query({ query: pagesQuery });
        pages = parseSecondaryPages(dirtyPages);
    } catch {
        pages = [];
    }

    return {
        props: {
            menu: parseMenu(pages),
        },
        revalidate: 100,
    };
};

export default function FavoritesPage({ menu }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
    return (
        <>
            <HeaderSection pages={menu} />
            <FavoritesSection />
            <FooterSection pages={menu} />
        </>
    );
}