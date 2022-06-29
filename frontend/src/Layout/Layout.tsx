import { LayoutProps } from "./Layout.props";
import { IPageLink } from "@interfaces/IPageLink";
import HeaderSection from "@components/sections/HeaderSection";

const getPages = (): IPageLink[] => {
    return [
        {
            title: "Главная страница",
            url: "/",
        },
        {
            title: "Аренда фудтрака",
            url: "/arenda-fudtraka",
        },
        {
            title: "Застройка фудкорта",
            url: "/zastrojka-fudkorta",
        },
        {
            title: "Аренда фудстанции",
            url: "/arenda-fudstancii",
        },
        {
            title: "Мебель для фудкорта",
            url: "/mebel-dlya-fudkorta",
        },
    ];
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
    const pages = getPages();

    return (
        <>
            <HeaderSection pages={pages} />
            <main>
                {children}
            </main>
        </>
    );
};

export default Layout;
