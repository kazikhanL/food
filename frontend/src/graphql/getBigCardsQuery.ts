import { DocumentNode, gql } from "@apollo/client";

import { FilterType } from "@interfaces/IFilter";


const getBigCardsQuery = (pageID: number, page: number, pageSize: number, filter: FilterType = "def"): DocumentNode => {
    return gql`
        query getBigCards {
            bigCards(
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
                        topDescription {
                            title
                            description
                        }
                        description {
                            title
                            description
                        }
                        tags {
                            text
                        }
                        branding
                        price
                        additions {
                            id
                            title
                            price
                            selected
                            image {
                                data {
                                    attributes {
                                        url
                                    }
                                }
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

export default getBigCardsQuery;