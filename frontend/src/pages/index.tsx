import type { GetStaticProps, InferGetStaticPropsType } from "next";

import apolloClient from "@graphql/client";
import mainPageQuery from "@graphql/mainPageQuery";
import pagesQuery from "@graphql/pagesQuery";
import newsQuery from "@graphql/newsQuery";

import { parseMainPage, parseMenu, parseSecondaryPages } from "@helpers/parsers/parsePage";
import { parseNews } from "@helpers/parsers/parseNews";

import { IHomePage } from "@interfaces/pages/IHomePage";
import { INews } from "@interfaces/INews";
import { IDirtyMainPage, IDirtyPages } from "@interfaces/dirtyServerResponse/IDirtyPage";
import { IDirtyNews } from "@interfaces/dirtyServerResponse/IDirtyNews";
import { ISecondaryPage } from "@interfaces/pages/ISecondaryPage";

import HeaderSection from "@components/sections/HeaderSection";
import PromoSection from "@components/sections/PromoSection";
import SeoSection from "@components/sections/SeoSection";
import FAQSection from "@components/sections/FAQSection";
import NewsPromoSection from "@components/sections/NewsPromoSection";
import ImplementedSection from "@components/sections/ImplementedSection";
import AssortmentSection from "@components/sections/AssortmentSection";
import PartnerSection from "@components/sections/PartnerSection";
import ContactsSection from "@components/sections/ContactsSection";
import FooterSection from "@components/sections/FooterSection";

// =================

import SmallCard from "@components/cards/SmallCard";
import { ISmallCard } from "@interfaces/cards/ISmallCard";

const card1: ISmallCard = {
    id: 0,
    images: [
        { default: "/images/card.jpg", modal: "/images/card.jpg" },
        { default: "/images/card.jpg", modal: "/images/card.jpg" },
        { default: "/images/card.jpg", modal: "/images/card.jpg" },
        { default: "/images/card.jpg", modal: "/images/card.jpg" },
    ],
    title: "Станция c французскими хот-догами “под ключ”",
    description: [
        { title: "Что входит:", description: "аренда станции, услуги повара, хот-доги (минимум 30 порций)" },
    ],
    branding: true,
    price: 17000,
    turnkey: { itemPrice: 130, minItems: 30 },
};

const card2: ISmallCard = {
    id: 1,
    images: [
        { default: "/images/card.jpg", modal: "/images/card.jpg" },
        { default: "/images/card.jpg", modal: "/images/card.jpg" },
        { default: "/images/card.jpg", modal: "/images/card.jpg" },
        { default: "/images/card.jpg", modal: "/images/card.jpg" },
    ],
    title: "Хот-дог станция",
    description: [
        { title: "Что входит:", description: "аренда станции, услуги повара, хот-доги (минимум 30 порций)" },
        { title: "Что входит:", description: "аренда станции, услуги повара, хот-доги (минимум 30 порций)" },
    ],
    branding: true,
    price: 17000,
    turnkey: null,
};
// =================

export const getStaticProps: GetStaticProps<IHomePage> = async () => {
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

    const dirtyMainPage: IDirtyMainPage = await apolloClient.query({ query: mainPageQuery });

    const mainPage: IHomePage = parseMainPage(dirtyMainPage);

    const promoCards = pages.map((page) => page.promoInfo);

    return {
        props: {
            promo: mainPage.promo,
            partnerCards: mainPage.partnerCards,
            galleryCards: mainPage.galleryCards,
            faq: mainPage.faq,
            seo: mainPage.seo,

            promoCards: promoCards,
            news: news,
            menu: parseMenu(pages),
        },
        revalidate: 100,
    };
};

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
    const { promo, partnerCards, galleryCards, promoCards, news, faq, seo, menu } = props;

    return (
        <>
            <HeaderSection pages={menu} />
            <PromoSection {...promo} />

            <SmallCard {...card1} />
            <SmallCard {...card2} />

            <PartnerSection descriptionCards={partnerCards} />
            <ImplementedSection cards={galleryCards} />
            <AssortmentSection cards={promoCards} />
            <NewsPromoSection news={news} />
            <FAQSection FAQ={faq} />
            <ContactsSection />
            <SeoSection {...seo} />
            <FooterSection pages={menu} />
        </>
    );
}
