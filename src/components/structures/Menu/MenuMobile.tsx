import React, { useRef } from "react"
import { List, X } from "@phosphor-icons/react"
import LoginPanel from "../LoginPanel"

interface MenuMobileTypes {
    list: Array<string>
}

const MenuMobile: React.FC<MenuMobileTypes> = ({ list }) => {
    const refMenu = useRef<HTMLDivElement>(null);

    const handleDisplayMenu = () => {
        if (refMenu?.current) {
            refMenu.current.classList.toggle("hidden")
        }

    }

    const handleClickOptionMenu = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const option = e.currentTarget.dataset.option;
        if(refMenu?.current){
            refMenu.current.classList.toggle("hidden")
            window.location.href = "/"
        }

    }


    return (
        <div className="flex md:hidden gap-32">
            <List onClick={handleDisplayMenu} size={44} />

            <div ref={refMenu} className="hidden fixed top-0 left-0 w-screen h-screen z-[999] bg-white">
                <X
                    size={44}
                    onClick={handleDisplayMenu}
                    className="absolute top-4 right-12"
                />

                <ul className="w-full flex flex-col mt-20">
                    {
                        list.map(li =>
                            <li
                                key={li}
                                data-option={li}
                                onClick={handleClickOptionMenu}
                                className="w-full p-4 text-center cursor-pointer bg-[#1111] border-b-[1px] border-[#0002]"
                            >
                                {li}
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default MenuMobile