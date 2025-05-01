import { useEffect, useState } from 'react';

function Navegation () {

    return (
        <section className='relative flex flex-col justify-center items-center h-screen'>
            <div className='w-full flex justify-end p-6 px-14 absolute top-0 right-0'>
                <nav>
                    <ul className="flex gap-10">
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Acerca de</a></li>
                        <li><a href="">Servicios</a></li>
                        <li><a href="">Contacto</a></li>
                    </ul>
                </nav>
            </div>
            <div className='flex justify-center flex-grow mt-[-100px] items-center gap-40'>
                <div>
                    <p className='text-4xl'>Hola</p>
                    <p className='text-4xl'>Soy Jose Jaime</p>
                    <p className='text-4xl'>Frontend developer JR</p>
                    <button className='w-40 h-12 flex justify-center items-center rounded-xl mt-10 bg-[#3EB489] text-1xl absolute'>
                        <img className='w-10' src="./Descargar.png" alt="" />
                        Descargar CV
                    </button>
                </div>
                <div>
                    <img className='w-36' src="./vite.svg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Navegation;