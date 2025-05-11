import React, { useRef, useEffect } from 'react';
import { useState } from 'react';

const images = [
    { src: './html.png', label: 'HTML' },
    { src: './css.png', label: 'CSS' },
    { src: './js.png', label: 'JavaScript' },
    { src: './mysql.png', label: 'MySQL' },
    { src: './bootstrap.png', label: 'Bootstrap' },
    { src: './git.png', label: 'Git' },
    { src: './laravel.png', label: 'Laravel' },
    { src: './react.png', label: 'React' },
    { src: './tailwind.png', label: 'Tailwind' },
  ];

function My () {

    // Descripciones de los proyectos
    const [open, setOpen] = useState(false);
    const [project, setProject] = useState(false);

    // Carrusel
    const carrusel = useRef(null);

    useEffect(() => {
        const container = carrusel.current;
        if (!container) return;

    const content = container.innerHTML;
    container.innerHTML += content;

    let scrollAmount = 0;
    const speed = 1;

    const scroll = () => {
      scrollAmount += speed;
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }
      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    };

    const interval = setInterval(scroll, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-10 ">

        {/* Informacion sobre la persona. */}
        <div className='w-[350px] sm:w-[530px] md:w-[620px] lg:w-[730px] flex flex-col justify-center gap-10 p-2'>
            <h1 className='text-4xl'>Sobre mi...</h1>
            <div className='flex flex-col justify-center items-center gap-10 md:gap-16 md:flex-row'>
                <div>
                    <img className='w-28' src="./vite.svg" alt="" />
                </div>
                <div>
                    <p className='text-center md:text-start'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit  <br />
                        Mauris interdum felis eget tortor posuere posuere convallis adipiscing<br />
                        Nam vulputate ultrices mi sit amet posuere. Sed interdum adipiscing elit <br />
                    </p>
                </div>
            </div>
        </div>

        {/* Carrusel con la tecnologias que se conozce. */}
        <div className='flex flex-col justify-center gap-10 p-2'>
            <h1 className='text-4xl'>Experiencia con ...</h1>
            <div ref={carrusel} className="w-[350px] sm:w-[530px] md:w-[620px] lg:w-[730px] overflow-hidden whitespace-nowrap">
                {images.map(({ src, label }, i) => (
                    <div key={i} className="inline-block text-center w-24 mx-4">
                        <img src={src} alt={label} className="w-24 h-24 object-contain mx-auto" />
                        <p className="mt-2 text-sm text-gray-700">{label}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Informacion de proyectos. */}
        <div className='flex flex-col justify-center items-center xl:flex-row '>
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
                                        <h1>Información</h1>
                                        <button onClick={() => setOpen(false)}>
                                            <img className='w-6' src="./close.png" alt="" />
                                        </button>
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
                                <img className='rounded-lg' src="./whispeper.png" alt="" />
                            </button>
                            <div className='flex mt-3 gap-2'>
                                <button>
                                    <img className='w-6' src="./web.png" alt="" />
                                </button>
                                <button>
                                    <img className='w-6' src="./github.png" alt="" />
                                </button>
                            </div>
                        </div>
                        {/* Proyecto de chatbot */}
                        <div className='w-72 border shadow-md p-4 rounded-lg relative'>
                            { project && (
                                <div className='bg-white inset-0 p-4 rounded-lg absolute z-10'>
                                    <div className='flex justify-between'>
                                        <h1>Información</h1>
                                        <button onClick={() => setProject(false)}>
                                            <img className='w-6' src="./close.png" alt="" />
                                        </button>
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
                                    <img className='w-6' src="./web.png" alt="" />
                                </button>
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
                        <div className='w-72 border shadow-md p-4 rounded-lg'>
                            <div className='flex justify-between items-center '>
                                <h1 className='text-1xl'>Mi Portal</h1>
                                <button>
                                    <img className='w-6' src="./mas.png" alt="" />
                                </button>
                            </div>
                            <button className='border shadow-md rounded-lg mt-3'>
                                <img className='rounded-lg' src="./whispeper.png" alt="" />
                            </button>
                            <div className='flex mt-3 gap-2'>
                                <button>
                                    <img className='w-6' src="./web.png" alt="" />
                                </button>
                                <button>
                                    <img className='w-6' src="./github.png" alt="" />
                                </button>
                            </div>
                        </div>
                        <div className='w-72 border shadow-md p-4 rounded-lg'>
                            <div className='flex justify-between items-center'>
                                <h1>Whispeper</h1>
                                <button>
                                    <img className='w-6' src="./mas.png" alt="" />
                                </button>
                            </div>
                            <button className='border shadow-md rounded-lg mt-3'>
                                <img className='rounded-lg' src="./whispeper.png" alt="" />
                            </button>
                            <div className='flex mt-3 gap-2'>
                                <button>
                                    <img className='w-6' src="./web.png" alt="" />
                                </button>
                                <button>
                                    <img className='w-6' src="./github.png" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default My;