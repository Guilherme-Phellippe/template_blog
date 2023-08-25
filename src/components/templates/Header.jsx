import { useEffect, useRef } from "react"
import Logo from "../structures/Logo"
import Menu from "../structures/Menu/Menu"




export default function Header() {
    const refHeader = useRef();


    useEffect(() => {
        window.addEventListener("scroll", handleStickyHeader)

        return () => window.removeEventListener("scroll", handleStickyHeader)
    }, [])

    const handleStickyHeader = () => {
        const top = window.scrollY;
        const heightHeader = refHeader?.current?.getBoundingClientRect().height
        if (refHeader?.current && top > heightHeader) {
            refHeader.current.classList.add("sticky")
            refHeader.current.classList.add("top-0")
            refHeader.current.classList.add("z-[999]")
            
        }else {
            refHeader.current.classList.remove("sticky")
            refHeader.current.classList.remove("top-0")
            refHeader.current.classList.remove("z-[999]")
        }
    }


    return (
        <header
            ref={refHeader}
            className="w-full h-[80px] md:min-h-[100px] flex justify-center border-b-[1px] shadow-sm bg-white"
        >
            <div className="w-full px-12 flex gap-4 justify-between items-center max-w-[1600px]">
                <Logo />
                <Menu />
            </div>
        </header>
    )
}