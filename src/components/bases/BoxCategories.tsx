interface propTypes {
    img: string,
    name_category: string
}


const BoxCategories: React.FC<propTypes>= ({ img,  name_category }) => {
    return (
        <div className="w-full md:w-1/4 flex flex-col items-center gap-4 justify-center">
            <div className="w-20 md:w-32 h-20 md:h-32 rounded-full shadow-md overflow-hidden cursor-pointer">
                <img
                    src={img}
                    alt="categoria 1"
                    className="w-full h-full object-cover"
                />
            </div>
            <h2 className="text-md md:text-xl text-zinc-700">{name_category}</h2>
        </div>
    )
}

export default BoxCategories