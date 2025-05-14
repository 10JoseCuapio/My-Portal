import { useState } from 'react';

function Proyecto () {

    // Descripciones de los proyectos
    const [open, setOpen] = useState(false);
    const [project, setProject] = useState(false);
    const [equestre, setEquestre] = useState(false);
    const [canirac, setCanirac] = useState(false);

    return (
        <div className='flex flex-col justify-center items-center mt-20 md:mt-36 xl:mt-40 xl:flex-row '>
        {/* Proyectos personales */} 
        <div className='flex flex-col items-center'>
            <h1 className='text-4xl text-center'>Proyectos personales ...</h1>
            <div className='flex flex-col '>
                <div className='flex flex-col justify-center items-center gap-5 m-10 md:flex-row'>
                    {/* Portafolio personal */}
                    <div className='w-72 border shadow-md p-4 rounded-lg relative'>
                        { open && (
                            <div className='bg-white inset-0 p-4 rounded-lg absolute z-10'>
                                <div className='flex justify-between'>
                                    <h1 className='text-lg'>Información</h1>
                                    <button onClick={() => setOpen(false)}>
                                        <img className='w-6' src="./close.png" alt="" />
                                    </button>
                                </div>
                                <div className='flex justify-center items-center mt-5 text-center border shadow-md rounded-lg'>
                                    <p className='p-2'>
                                        Este es un proyecto donde he <br />
                                        desarrollado un portafolio <br />
                                        personal con las tecnologías <br />
                                        que e aprendido y experiencia <br />
                                        laboral a lo largo de este tiempo.
                                    </p>
                                </div>
                            </div>
                        )}
                        <div className='flex justify-between items-center '>
                            <h1 className='text-1xl'>Mi Portal</h1>
                            <button onClick={() => setOpen(true)}>
                                <img className='w-6' src="./mas.png" alt="" />
                            </button>
                        </div>
                        <button className='border shadow-md rounded-lg mt-3'>
                            <img className='rounded-lg' src="./my-portal.png" alt="" />
                        </button>
                        <div className='flex mt-3 gap-2'>
                            <button>
                                <img className='w-6' src="./github.png" alt="" />
                            </button>
                        </div>
                    </div>
                    {/* Proyecto de chatbot */}
                    <div className='w-72 border shadow-md p-3 rounded-lg relative'>
                        { project && (
                            <div className='bg-white inset-0 p-4 rounded-lg absolute z-10'>
                                <div className='flex justify-between'>
                                    <h1 className='text-lg'>Información</h1>
                                    <button onClick={() => setProject(false)}>
                                        <img className='w-6' src="./close.png" alt="" />
                                    </button>
                                </div>
                                <div className='flex justify-center items-center mt-5 text-center border shadow-md rounded-lg'>
                                    <p className='p-2'>
                                        Este proyecto es un chatbot con <br />
                                        un chat indivual, donde puedes <br />
                                        interactuar con otro usuario por <br />
                                        id. Por el momento solo esta <br />
                                        el front-end desarrollado, proximamente.
                                    </p>
                                </div>
                            </div>
                        )}
                        <div className='flex justify-between items-center'>
                            <h1>Whispeper</h1>
                            <button onClick={() => setProject(true)}>
                                <img className='w-6' src="./mas.png" alt="" />
                            </button>
                        </div>
                        <button className='border shadow-md rounded-lg mt-3'>
                            <img className='rounded-lg' src="./whispeper.png" alt="" />
                        </button>
                        <div className='flex mt-3 gap-2'>
                            <button>
                                <img className='w-6' src="./github.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Proyectos colaborativos */}
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-4xl text-center'>Aportaciones a proyectos ...</h1>
            <div className='flex flex-col '>
                <div className='flex flex-col justify-center items-center md:flex-row gap-5 m-10'>
                    <div className='w-72 border shadow-md p-4 rounded-lg relative'>
                        { equestre && (
                            <div className='bg-white inset-0 p-4 rounded-lg absolute z-10'>
                                <div className='flex justify-between'>
                                    <h1 className='text-lg'>Información</h1>
                                    <button onClick={() => setEquestre(false)}>
                                        <img className='w-6' src="./close.png" alt="" />
                                    </button>
                                </div>
                                <div className='flex justify-center items-center mt-5 text-center border shadow-md rounded-lg'>
                                    <p className='p-2'>
                                        Este proyecto es reservaciones, <br />
                                        a eventos relacionados con caballos.<br />
                                        Mi rol durante pansantia fue <br />
                                        el de front-end bajo supervisión. <br />
                                        
                                    </p>
                                </div>
                            </div>
                        )}
                        
                        <div className='flex justify-between items-center '>
                            <h1 className='text-1xl'>Equestre Pineda</h1>
                            <button onClick={() => setEquestre(true)}>
                                <img className='w-6' src="./mas.png" alt="" />
                            </button>
                        </div>
                        <button className='border shadow-md rounded-lg mt-3'>
                            <img className='rounded-lg' src="./Equestre.png" alt="" />
                        </button>
                        <div className='flex mt-3 gap-2'>
                            <button>
                                <img className='w-6' src="./web.png" alt="" />
                            </button>
                        </div>
                    </div>
                    <div className='w-72 border shadow-md p-4 rounded-lg'>
                        <div className='flex justify-between items-center'>
                            <h1>Canirac valle de toluca</h1>
                            <button>
                                <img className='w-6' src="./mas.png" alt="" />
                            </button>
                        </div>
                        <button className='border shadow-md rounded-lg mt-3'>
                            <img className='rounded-lg' src="./canirac.png" alt="" />
                        </button>
                        <div className='flex mt-3 gap-2'>
                            <button>
                                <img className='w-6' src="./web.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Proyecto;