import { gql } from "@apollo/client";

const dopsQuery = gql`
    query getDops {
        dops {
            data {
                id,
                attributes {
                    image {
                        data {
                            attributes {
                                url
                            }
                        }
                    },
                    title,
                    price
                }
            }
        }
    }
`;

export default dopsQuery;
