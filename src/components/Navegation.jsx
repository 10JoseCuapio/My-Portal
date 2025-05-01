import { useEffect, useState } from 'react';

function Navegation () {

    return (
        <div className='flex flex-col justify-center items-center h-screen relative m-0 p-0'>
            <div className='flex justify-end items-center text-1xl absolute top-10 right-10'>
                <nav>
                    <ul className="flex gap-10">
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Acerca de</a></li>
                        <li><a href="">Servicios</a></li>
                        <li><a href="">Contacto</a></li>
                    </ul>
                </nav>
            </div>
            <div className='flex justify-center items-center mt-[-100px]  gap-10'>
                <div>
                    <div className='text-4xl'>
                        <p>Hola</p>
                        <p>Soy Jose Jaime</p>
                        <p>Frontend Developer JR</p>
                    </div>
                    <div className='flex items-center mt-10 absolute'>
                        <button className='flex justify-center items-center text-1xl rounded-xl bg-[#3EB489] p-2 gap-1'>
                            Descargar CV
                            <img className='w-10' src="./Descargar.png" alt="" />
                        </button>
                    </div>
                </div>
                <div className='grid justify-center'>
                    <img className='w-48' src="./vite.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navegation;