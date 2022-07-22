import { gql } from "@apollo/client";

const pagesQuery = gql`
    query getPages {
        pages(pagination: { pageSize: 100 }) {
            data {
                id
                attributes {
                    meta {
                        metaTitle
                        metaDescription
                    }
                    promo {
                        mainTitle
                        description {
                            text
                        }
                        image {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                    }
                    promoInfo {
                        title
                        description
                        characteristics {
                            text
                        }
                        image {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                    }
                    formats {
                        title
                        items {
                            topTitle
                            text
                            bottomTitle
                            description
                            buttonText
                        }
                    }
                    seo {
                        title
                        description
                        image {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                    }
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
                                }
                                title
                                price
                            }
                        }
                    }
                    specialization {
                        data {
                            attributes {
                                promoInfo {
                                    image {
                                        data {
                                            attributes {
                                                url
                                            }
                                        }
                                    }
                                    title
                                    characteristics {
                                        text
                                    }
                                    description
                                    id
                                }
                            }
                        }
                    }
                    cardType
                }
            }
        }
    }
`;

export default pagesQuery;