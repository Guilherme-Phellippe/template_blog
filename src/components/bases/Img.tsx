import { Resolver } from "dns"

interface ImgProps {
    src: string,
    alt: string,
    width: string,
    height: string,
    objectFit: string,
    customClass?: string,
}

export const Img: React.FC<ImgProps> = ({ src, alt, width, height, objectFit, customClass }) => {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`w-full h-full object-${objectFit} ${customClass}`}
        />
    )
}


