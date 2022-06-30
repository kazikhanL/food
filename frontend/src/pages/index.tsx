import type { NextPage } from "next";

import PromoSection from "@components/sections/PromoSection";
import { IPromoProps } from "@interfaces/IPromoProps";

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

const Home: NextPage = (): JSX.Element => {
    return (
        <>
            <PromoSection {...promoInfo} />
        </>
    );
};

export default Home;
