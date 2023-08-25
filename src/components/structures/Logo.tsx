import { Img } from "../bases/Img";

export default function Logo(){ 

    const handleClickLogo = ()=>{
        window.location.href = "/"
    }

    return(
        <div 
            className="cursor-pointer h-full"
            onClick={handleClickLogo}
        >
            <Img 
                src="https://i.ibb.co/CPZ5hpd/logo-exemplo.png" 
                alt="Logo exemplo"
                width="150"
                height="100"
                objectFit="contain"
            />
        </div>
    )
}