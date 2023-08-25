import MenuMobile from "./MenuMobile"
import MenuDesktop from "./MenuDesktop"

export default function Menu() {
    const listMenu = ["Home", "Posts", "Contato", "Sobre nós", "Politica de privacidade"]


    return (
        <> 
            <MenuDesktop list={listMenu} />
            <MenuMobile list={listMenu} />
        </>
    )
}