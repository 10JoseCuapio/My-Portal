function Habilidades () {
    return (
        <div className="flex flex-col justify-center items-center gap-10 mt-10">
            <h1 className="text-4xl">Habilidades ...</h1>
            <div className="flex flex-col justify-center items-center gap-10 mb-10">
                <div className="flex flex-col gap-10 lg:flex-row">
                    <div className="w-72 md:w-96 border shadow-md p-5 rounded-lg">
                        <h1 className="text-xl p-1">Trabajo en equipo</h1>
                        <div className="flex flex-col justify-center items-center md:flex-row gap-5 p-6 border shadow-md rounded-lg">
                            <img className="w-16" src="./equipo.png" alt="" />
                            <p className="text-center md:text-start">
                                Trabajo en equipo es <br />
                                la capacidad de colaborar <br />
                                con otros para lograr <br />
                                objetivos comunes.
                            </p>
                        </div>
                    </div>
                    <div className="w-72 md:w-96 border shadow-md p-5 rounded-lg">
                        <h1 className="text-xl p-1">Comprecion rapida</h1>
                        <div className="flex gap-5 p-6 border shadow-md rounded-lg">
                            <img className="w-16" src="./comprencion.png" alt="" />
                            <p>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-10 lg:flex-row">
                    <div className="w-72 md:w-96 border shadow-md p-5 rounded-lg">
                        <h1 className="text-xl p-1">Autodidacta</h1>
                        <div className="flex gap-5 p-6 border shadow-md rounded-lg">
                            <img className="w-16" src="./autodidacta.png" alt="" />
                            <p>

                            </p>
                        </div>
                    </div>
                    <div className="w-72 md:w-96 border shadow-md p-4 rounded-lg">
                        <h1></h1>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Habilidades;