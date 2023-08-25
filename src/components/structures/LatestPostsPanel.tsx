
interface postsType {
    posts: Array<{
        id: string,
        title: string,
        poster: string
    }>
}

const LatestPostsPanel: React.FC<postsType> = ({ posts }) => {
    return (
        <div className="flex my-12">
            <div className="flex flex-col gap-4 w-full md:w-3/4 p-4">
                {
                    posts.map(post =>
                        <div 
                            key={post.id}
                            className="flex gap-4 border-[1px] border-zinc-400 cursor-pointer hover:bg-zinc-200 transition-colors duration-200"
                        >
                            <div className="w-36">
                                <img src={post.poster} alt={`Imagem de ${post.title}`} />
                            </div>
                            <div className="p-2">
                                <h2>{post.title}</h2>
                            </div>
                        </div>
                    )
                }

            </div>
            <div className="hidden md:flex flex-col bg-blue-200 w-1/4 p-4">
                oi
            </div>
        </div>
    )
}

export default LatestPostsPanel