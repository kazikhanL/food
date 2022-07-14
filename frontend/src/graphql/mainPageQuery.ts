import { gql } from "@apollo/client";

const mainPageQuery = gql`
    query getMainPage {
        mainPage {
            data {
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
                    PartnerSection {
                        id
                        title
                        description
                    }
                    gallery {
                        id
                        miniImage {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                        midImage {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                        phoneImage {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                        modalImage {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                        video {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                    }
                    FAQ {
                        question
                        answer
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
                }
            }
        }
    }
`;


export default mainPageQuery;
