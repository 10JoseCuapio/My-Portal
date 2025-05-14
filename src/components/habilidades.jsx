function Habilidades () {
    return (
        <div className="flex flex-col justify-center items-center gap-10 mb-10">
            <h1 className="text-4xl">Habilidades ...</h1>
            <div className="flex flex-col justify-center items-center gap-10">
                <div className="flex flex-col gap-10 lg:flex-row">
                    <div className="w-72 md:w-96 border shadow-md p-5 rounded-lg">
                        <h1 className="text-xl p-1">Trabajo en equipo</h1>
                        <div className="flex flex-col justify-center items-center md:flex-row gap-5 p-6 border shadow-md rounded-lg">
                            <img className="w-16" src="./equipo.png" alt="" />
                            <p className="text-center md:text-start">
                                Cuento con habilidades <br />
                                para el trabajo en equipo, <br />
                                colaborando de manera <br />
                                efectiva.
                            </p>  
                        </div>
                    </div>
                    <div className="w-72 md:w-96 border shadow-md p-5 rounded-lg">
                        <h1 className="text-xl p-1">Rápido aprendizaje</h1>
                        <div className="flex flex-col justify-center items-center md:flex-row gap-5 p-6 border shadow-md rounded-lg">
                            <img className="w-16" src="./comprencion.png" alt="" />
                            <p className="text-center md:text-start">
                                Soy una persona de rápido <br />
                                aprendizaje, capaz de <br />
                                adaptarme a nuevos  <br />
                                entornos.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-10 lg:flex-row">
                    <div className="w-72 md:w-96 border shadow-md p-5 rounded-lg">
                        <h1 className="text-xl p-1">Autoaprendizaje</h1>
                        <div className="flex flex-col justify-center items-center md:flex-row gap-5 p-6 border shadow-md rounded-lg">
                            <img className="w-16" src="./autodidacta.png" alt="" />
                            <p className="text-center md:text-start">
                                Me destaco por mi capacidad <br />
                                de autoaprendizaje, lo que <br />
                                me permite mejorar habilidades. <br />
                            </p>
                        </div>
                    </div>
                    <div className="w-72 md:w-96 border shadow-md p-5 rounded-lg">
                        <h1 className="text-xl p-1">Creatividad</h1>
                        <div className="flex flex-col justify-center items-center md:flex-row gap-5 p-6 border shadow-md rounded-lg">
                            <img className="w-16" src="./creatividad.png" alt="" />
                            <p className="text-center md:text-start">
                                Soy una persona creativa, <br />
                                lo que me permite generar ideas adactadonme <br />
                                a nuevos desafíos en entornos colaborativos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Habilidades;