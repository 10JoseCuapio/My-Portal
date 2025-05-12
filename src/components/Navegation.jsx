import { useEffect, useState } from 'react';
import My from './My';
import Habilidades from './habilidades';

function Navegation () {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => setOpen(!open);

    if (open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }

    return (
        <main className=' overflow-x-hidden'>
            <section className='flex flex-col justify-center items-center min-h-screen relative m-0 p-0 overflow-x-hidden'>
                <div className='flex justify-end items-center text-1xl absolute top-5 right-5 z-20'>
                    <button onClick={toggleMenu} className='block md:hidden'>
                        <img className='w-10' src="./Menu.png" alt="" />
                    </button>
                </div>

                <div className={`md:hidden fixed top-0 left-0 w-full h-screen flex flex-col items-center bg-[#ECF8F3] z-10 transition-transform duration-300 ease-in-out
                    ${open ? 'translate-x-0' : '-translate-x-full'}`}>

                    <button className='w-48 h-12 flex justify-center items-center bg-[#65c3A1] mt-20 rounded-xl gap-5'>
                        <img className='w-7' src="./home.png" alt="" />
                        <p className='text-2xl'>Inicio</p>
                    </button>
                </div>
            
                <div className='hidden md:flex justify-end items-center text-1xl absolute top-10 right-10'>
                    <nav>
                        <ul className="flex gap-10">
                            <li><a href="">Inicio</a></li>
                            <li><a href="">Sobre mi</a></li>
                            <li><a href="">Habilidades</a></li>
                            <li><a href="">Contacto</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='flex flex-col'>
                    <div className='sm:flex justify-center items-center text-center sm:text-start gap-10'>
                        <div>
                            <div className='text-3xl'>
                                <p>Hola</p>
                                <p>Soy Jose Jaime</p>
                                <p>Frontend Developer JR</p>
                            </div>
                        </div>
                        <div className='flex justify-center mt-10 md:mt-0'>
                            <img className='w-36' src="./vite.svg" alt="" />
                        </div>
                    </div>
                    <div className='flex justify-center sm:justify-start mt-10'>
                        <button className='flex justify-center items-center text-1xl rounded-xl bg-[#3EB489] p-2 gap-1'>
                            Descargar CV
                            <img className='w-7' src="./Descargar.png" alt="" />
                        </button>
                    </div>
                </div>
            </section>

            <section className="flex flex-col justify-center items-center">
                < My/>
            </section>

            <section className='flex flex-col justify-center items-center'>
                < Habilidades/>
            </section>

        </main> 
    )
}

export default Navegation;