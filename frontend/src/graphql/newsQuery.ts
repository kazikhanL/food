import { gql } from "@apollo/client";

const newsQuery = gql`
    query getNews {
        news {
            data {
                id,
                attributes {
                    meta {
                        metaTitle,
                        metaDescription,
                    },
                    mainTitle,
                    image {
                        data {
                            attributes {
                                url
                            }
                        }
                    },
                    description,
                    date
                }
            }
        }
    }
`;

export default newsQuery;
