import PopularPostsPanel from "../structures/PopularPostsPanel"
import CategoryListsPanel from "../structures/CategoryListsPanel"
import database from "../../../db.js"
import LatestPostsPanel from "../structures/LatestPostsPanel"

export default function Main(){
    const db = database().posts

    return(
        <main className="w-full max-w-[1600px] py-8 mx-auto bg-white">
            <PopularPostsPanel posts={db} />
            <CategoryListsPanel posts={db}/>
            <LatestPostsPanel posts={db}/>
        </main>
    )
}