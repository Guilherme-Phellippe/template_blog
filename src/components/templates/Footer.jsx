export default function Footer(){ 
    return(
        <main className="w-full flex flex-col md:flex-row justify-evenly p-8">
            <div className="">
                <h2 className="text-center my-4 text-xl">Propriedade do site</h2>
                <p className="py-4 text-center md:w-[400px]">
                    Esse site foi desenvolvido com o intuito de promover conhecimento e agregar valor,
                    dedicamos diáriamente em trazer informações e conteúdo relevantes para o seu modo de vida.
                </p>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="text-center my-4 text-xl">Nossas politicas</h2>
                <a href="/policy">Politicas de privacidade</a>
                <a href="/terms">Termos de uso</a>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="text-center my-4 text-xl">Fale conosco</h2>
                <a href="/contato">Contato</a>
            </div>
            
        </main>
    )
}