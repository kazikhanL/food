import { DocumentNode, gql } from "@apollo/client";

import { FilterType } from "@interfaces/IFilter";

const getSmallCardsQuery = (pageID: number, page: number, pageSize: number, filter: FilterType = "def"): DocumentNode => {
    return gql`
        query getSmallCards {
            smallCards(
                filters: { page: { id: { eq: ${pageID} } } }
                pagination: { page: ${page}, pageSize: ${pageSize} }
                ${filter == "def" ? "" : `sort: price:${filter}` }
            ) {
                data {
                    id
                    attributes {
                        images {
                            default {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                            modal {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                        }
                        title
                        description {
                            title
                            description
                        }
                        branding
                        price
                        turnkey {
                            minItems
                            itemPrice
                        }
                        page {
                            data {
                                id
                            }
                        }
                    }
                }
                meta {
                    pagination {
                        total
                    }
                }
            }
        }
    `;
};

export default getSmallCardsQuery;
