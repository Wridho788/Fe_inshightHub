
type Source = {
    id: null | string;
    name: string;
};

export type NewsData = {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    img: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
};
