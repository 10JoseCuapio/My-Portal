import { useEffect, useState } from 'react';
import My from './My';
import Habilidades from './habilidades';
import Proyectos from './Proyecto';

function Navegation () {

    const [open, setOpen] = useState(false);
    const toggleMenu = () => setOpen(!open);

    if (open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }

    const sections = ['Inicio', 'Sobre-mi', 'Proyectos', 'Habilidades'];

    const [activeSection, setActiveSection] = useState('Inicio');

    useEffect(() => {
        const handleScroll = () => {
        for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section && window.scrollY >= section.offsetTop - 300) {
            setActiveSection(sections[i]);
            break;
            }
        }
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
        }, []);

    return (
        <main className=' overflow-x-hidden'>
            <section id="Inicio" className='flex flex-col justify-center items-center min-h-screen relative m-0 p-0 overflow-x-hidden'>
                <div className='flex justify-end items-center text-1xl absolute top-5 right-5'>
                    <button onClick={toggleMenu} className='block md:hidden fixed top-5 z-50'>
                        <img className='w-10' src="./Menu.png" alt="" />
                    </button>
                </div>

                <div className={`md:hidden fixed top-0 left-0 w-full h-screen flex flex-col items-center bg-[#ECF8F3] z-10 transition-transform duration-300 ease-in-out
                    ${open ? 'translate-x-0' : '-translate-x-full'}`}>

                    <a href="#Inicio" onClick={() => setOpen(false)} className='w-48 h-12 flex justify-center items-center bg-[#65c3A1] mt-20 rounded-xl gap-5'>
                        <img className='w-7' src="./home.png" alt="" />
                        <p className='text-2xl'>Inicio</p>
                    </a>

                    <a href='#Sobre-mi' onClick={() => setOpen(false)} className='w-48 h-12 flex justify-center items-center bg-[#65c3A1] mt-10 rounded-lg gap-3'>
                        <img className='w-8' src="./User.png" alt="" />
                        <p className='text-2xl'>Sobre mi</p>
                    </a>

                    <a href='#Habilidades' onClick={() => setOpen(false)} className='w-48 h-12 flex justify-center items-center bg-[#65c3A1] mt-10 rounded-lg gap-2'>
                        <img className='w-8' src="./habilidades.png" alt="" />
                        <p className='text-2xl' >Habilidades</p>
                    </a>
                </div>
            
                <div className='w-full hidden md:flex justify-end items-center text-1xl fixed top-0 z-50 bg-white bg-opacity-95 p-4'>
                    <nav>
                        <ul className="flex gap-10 px-10 text-lg">
                            <li><a href="#Inicio" className={`nav-link ${activeSection === 'Inicio' ? 'active' : ''}`}>Inicio</a></li>
                            <li><a href="#Sobre-mi" className={`nav-link ${activeSection === 'Sobre-mi' ? 'active' : ''}`}>Sobre mi</a></li>
                            <li><a href="#Proyectos" className={`nav-link ${activeSection === 'Proyectos' ? 'active' : ''}`}>Proyectos</a></li>
                            <li><a href="#Habilidades" className={`nav-link ${activeSection === 'Habilidades' ? 'active' : ''}`}>Habilidades</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='sm:flex justify-center items-center text-center sm:text-start gap-10'>
                        <div>
                            <div className='text-3xl'>
                                <p>Hola</p>
                                <p>Soy Jose Jaime</p>
                                <p>Frontend Developer JR</p>
                            </div>
                        </div>
                        <div className='flex justify-center mt-10 md:mt-0'>
                            <img className='w-36 rounded-full' src="./foto.png" alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center gap-5 mt-10'>
                        <button className='w-40 flex justify-center items-center text-1xl rounded-xl bg-[#3EB489] p-2 gap-1'>
                            Descargar CV
                            <img className='w-7' src="./Descargar.png" alt="" />
                        </button>
                        <div className='flex gap-5'>
                            <a href='https://github.com/10JoseCuapio' target="_blank" rel="noopener noreferrer">
                                <img className='w-10' src="github.png" alt="" />
                            </a>
                            <a href="mailto:jose10cuapio@gmail.com">
                                <img className="w-10" src="./correo.png" alt="Correo" />
                            </a>
                            <a href='https://www.linkedin.com/in/jose-jaime-cuapio-rodriguez-626366306/' target="_blank" rel="noopener noreferrer">
                                <img className='w-9' src="./linkedin.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id='Sobre-mi' className="flex flex-col justify-center items-center">
                < My/>
            </section>

            <section id="Proyectos" className="flex flex-col justify-center items-center">
                <Proyectos />
            </section>

            <section id='Habilidades' className='flex flex-col justify-center items-center'>
                < Habilidades/>
            </section>
        </main> 
    )
}

export default Navegation;