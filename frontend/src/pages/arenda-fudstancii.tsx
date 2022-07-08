import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

import { IHomePage } from "@interfaces/pages/IHomePage";

import PromoSection from "@components/sections/PromoSection";
import { IPromoProps } from "@interfaces/IPromoProps";

import SeoSection from "@components/sections/SeoSection";
import { ISeoProps } from "@interfaces/ISeoProps";

import NewsPromoSection from "@components/sections/NewsPromoSection";
import { INews } from "@interfaces/INews";

import ContactsSection from "@components/sections/ContactsSection";


const promoInfo: IPromoProps = {
    image: "/images/promo/promo-main.png",
    title: "Организация питания на выезде",
    description: [
        "Застройка фудкортов на улице и в помещении",
        "Питание на фестивалях, форумах, и спортивных мероприятиях",
        "Обслуживание частных мероприятий",
        "Горячие комплексные обеды для рабочих",
    ],
};

const seoInfo: ISeoProps = {
    image: "/images/seo/seo-main.jpg",
    title: "Релевантный заголовок СЕО-текста",
    description: [
        "Господа, социально-экономическое развитие предполагает независимые способы реализации переосмысления внешнеэкономических политик.",
        "Мы вынуждены отталкиваться от того, что перспективное планирование обеспечивает широкому кругу (специалистов) участие в формировании распределения внутренних резервов и ресурсов.",
        "В своём стремлении повысить качество жизни, они забывают, что высокотехнологичная концепция общественного уклада однозначно определяет каждого участника как способного принимать собственные решения касаемо инновационных методов управления процессами.",
        "Господа, социально-экономическое развитие предполагает независимые способы реализации переосмысления внешнеэкономических политик.",
        "Господа, социально-экономическое развитие предполагает независимые способы реализации переосмысления внешнеэкономических политик.",
        "Мы вынуждены отталкиваться от того, что перспективное планирование обеспечивает широкому кругу (специалистов) участие в формировании распределения внутренних резервов и ресурсов.",
        "В своём стремлении повысить качество жизни, они забывают, что высокотехнологичная концепция общественного уклада однозначно определяет каждого участника как способного принимать собственные решения касаемо инновационных методов управления процессами.",
        "Господа, социально-экономическое развитие предполагает независимые способы реализации переосмысления внешнеэкономических политик.",
    ],
};

const News: INews[] = [
    {
        image: "/images/news/news.jpg",
        title: "Какой-то очень длинный в две строчки заголовок другой статьи 1",
        description: [
            "Но начало повседневной работы по формированию позиции играет определяющее значение для укрепления моральных ценностей. В частности, существующая теория создаёт предпосылки для ...",
            "Но начало повседневной работы по формированию позиции играет определяющее значение для укрепления моральных ценностей. В частности, существующая теория создаёт предпосылки для ...",
            "Но начало повседневной работы по формированию позиции играет определяющее значение для укрепления моральных ценностей. В частности, существующая теория создаёт предпосылки для ...",
        ],
        date: new Date().toLocaleDateString(),
    },
    {
        image: "/images/news/news.jpg",
        title: "Какой-то очень длинный в две строчки заголовок другой статьи 2",
        description: [
            "Но начало повседневной работы по формированию позиции играет определяющее значение для укрепления моральных ценностей. В частности, существующая теория создаёт предпосылки для ...",
            "Но начало повседневной работы по формированию позиции играет определяющее значение для укрепления моральных ценностей. В частности, существующая теория создаёт предпосылки для ...",
            "Но начало повседневной работы по формированию позиции играет определяющее значение для укрепления моральных ценностей. В частности, существующая теория создаёт предпосылки для ...",
        ],
        date: new Date().toLocaleDateString(),
    },
    {
        image: "/images/news/news.jpg",
        title: "Какой-то очень длинный в две строчки заголовок другой статьи 3",
        description: [
            "Но начало повседневной работы по формированию позиции играет определяющее значение для укрепления моральных ценностей. В частности, существующая теория создаёт предпосылки для ...",
            "Но начало повседневной работы по формированию позиции играет определяющее значение для укрепления моральных ценностей. В частности, существующая теория создаёт предпосылки для ...",
            "Но начало повседневной работы по формированию позиции играет определяющее значение для укрепления моральных ценностей. В частности, существующая теория создаёт предпосылки для ...",
        ],
        date: new Date().toLocaleDateString(),
    },
    {
        image: "/images/news/news.jpg",
        title: "Какой-то очень длинный в две строчки заголовок другой статьи 4",
        description: [
            "Но начало повседневной работы по формированию позиции играет определяющее значение для укрепления моральных ценностей. В частности, существующая теория создаёт предпосылки для ...",
            "Но начало повседневной работы по формированию позиции играет определяющее значение для укрепления моральных ценностей. В частности, существующая теория создаёт предпосылки для ...",
            "Но начало повседневной работы по формированию позиции играет определяющее значение для укрепления моральных ценностей. В частности, существующая теория создаёт предпосылки для ...",
        ],
        date: new Date().toLocaleDateString(),
    },
    {
        image: "/images/news/news.jpg",
        title: "Какой-то очень длинный в две строчки заголовок другой статьи 5",
        description: [
            "Но начало повседневной работы по формированию позиции играет определяющее значение для укрепления моральных ценностей. В частности, существующая теория создаёт предпосылки для ...",
            "Но начало повседневной работы по формированию позиции играет определяющее значение для укрепления моральных ценностей. В частности, существующая теория создаёт предпосылки для ...",
            "Но начало повседневной работы по формированию позиции играет определяющее значение для укрепления моральных ценностей. В частности, существующая теория создаёт предпосылки для ...",
        ],
        date: new Date().toLocaleDateString(),
    },
    {
        image: "/images/news/news.jpg",
        title: "Какой-то очень длинный в две строчки заголовок другой статьи 6",
        description: [
            "Но начало повседневной работы по формированию позиции играет определяющее значение для укрепления моральных ценностей. В частности, существующая теория создаёт предпосылки для ...",
            "Но начало повседневной работы по формированию позиции играет определяющее значение для укрепления моральных ценностей. В частности, существующая теория создаёт предпосылки для ...",
            "Но начало повседневной работы по формированию позиции играет определяющее значение для укрепления моральных ценностей. В частности, существующая теория создаёт предпосылки для ...",
        ],
        date: new Date().toLocaleDateString(),
    },
];


export const getStaticProps: GetStaticProps = async () => {

    return {
        props: {
            promoInfo: promoInfo,
            news: News,
            seo: seoInfo,
        },
    };
};



export default function Page(props: any): JSX.Element {
    const { promoInfo, news, seo } = props;

    return (
        <>
            <PromoSection {...promoInfo} />
            <NewsPromoSection news={news} />
            <ContactsSection />
            <SeoSection {...seo} />
        </>
    );
}