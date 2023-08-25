import { useNavigate } from "react-router-dom"
import { Img } from "../bases/Img"

interface postsType {
    posts: Array<{
        id: string,
        title: string,
        poster: string,
        link: string,
        description: string,
    }>
}

const PopularPostsPanel: React.FC<postsType> = ({ posts }) => {
    const navigate = useNavigate();

    const handleClickPost = ( e: React.MouseEvent<HTMLDivElement, MouseEvent> )=>{
        const postId = e.currentTarget.id;
        const selectedPost = posts.find(post => post.id == postId);
        selectedPost && navigate(selectedPost.link)
    }   

    return (
        <div className="w-[95%] max-w-[1000px] mx-auto my-8 h-[80vw] md:h-[420px] grid grid-cols-4 grid-rows-3">
            {
                posts.map((post, index) => {
                    return <div
                        onClick={handleClickPost}
                        key={post.id}
                        id={post.id}
                        className={`cursor-pointer group flex justify-center items-center border-[1px] border-[#24242450] ${index === 0 ? " col-span-4 md:col-span-2 row-span-2 md:row-span-3" : "col-span-2"} relative overflow-hidden`}
                    >
                        <p className="bg-[#fff8] p-2 rounded-md text-center">{post.title}</p>
                        <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
                            <Img
                                src={post.poster}
                                alt={post.title}
                                width="100"
                                height="100"
                                objectFit="cover"
                                customClass="group-hover:scale-110 transition-transform duration-200 "
                            />
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default PopularPostsPanel