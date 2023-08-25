import BoxCategories from "../bases/BoxCategories"

interface postTypes {
    posts: Array<{
        id: string
    }>
}


const CategoryListsPanel: React.FC<postTypes> = ({ posts }) => {
    return (
        <div className="w-full md:w-4/5 mx-auto flex justify-center my-20">
            <BoxCategories img={"https://via.placeholder.com/100"} name_category={"Dicas"} />
            <BoxCategories img={"https://via.placeholder.com/100"} name_category={"Curiosidades"} />
            <BoxCategories img={"https://via.placeholder.com/100"} name_category={"Destaques"} />
        </div>
    )
}

export default CategoryListsPanel