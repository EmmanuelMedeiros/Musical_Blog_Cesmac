export default function HeaderMenu() {
    return(
        <div className="z-50">
            
            <div className="justify-center flex-col absolute w-full text-right mt-3 py-3 bg-white z-50">
                <h2 className="mb-2 pr-6 hover:cursor-pointer">
                    TECNOLOGIA MUSICAL
                </h2>
                <span className="block bg-slate-800 opacity-80 w-full h-0.5 "></span>
                <h2 className="my-2 pr-6 hover:cursor-pointer">
                    SOFTWARE DE ÁUDIO
                </h2>
                <span className="block bg-slate-800 opacity-80 w-full h-0.5 "></span>
                <h2 className="my-2 pr-6 hover:cursor-pointer">
                    COMPOSIÇÃO ELETRÔNICA
                </h2>
                <span className="block bg-slate-800 opacity-80 w-full h-0.5 "></span>
                <h2 className="mt-2 pr-6 hover:cursor-pointer">
                    SOBRE NÓS
                </h2>
            </div>

        </div>
    )    
}