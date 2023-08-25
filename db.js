export default function database(){

    const posts = [
        {
            id:0,
            title: "Exemplo de post 1",
            description: "",
            poster: "https://i.ibb.co/whcQH1q/Exemplo-de-poster.jpg",
            link: "/exemplo-de-post-1"
        },
        {
            id: 1,
            title: "Exemplo de post 2",
            poster: "https://i.ibb.co/whcQH1q/Exemplo-de-poster.jpg",
            link: "/"
        },
        {
            id: 2,
            title: "Exemplo de post 3",
            poster: "https://i.ibb.co/whcQH1q/Exemplo-de-poster.jpg",
            link: "/"
        },
    ]


    return { posts }
}