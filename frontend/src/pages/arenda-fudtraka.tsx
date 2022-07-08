import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

export const getStaticProps: GetStaticProps = async () => {

    return {
        props: {

        },
    };
};

const Page: NextPage = (): JSX.Element => {
    return (
        <>
        </>
    );
};

export default Page;