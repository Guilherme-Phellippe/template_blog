import React from "react"
import LoginPanel from "../LoginPanel"

interface MenuDesktopTypes {
    list: Array<string>
}

const MenuDesktop: React.FC<MenuDesktopTypes> = ({ list }) => { 
    return(
        <div className="hidden md:flex gap-32">
            <ul className="flex items-center gap-4">
                {
                    list.map(li =>
                        <li key={li} className="cursor-pointer" >{li}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default MenuDesktop