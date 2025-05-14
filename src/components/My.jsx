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
        <div className='w-[350px] sm:w-[530px] md:w-[520px] lg:w-[790px] flex flex-col justify-center gap-10 p-2'>
            <h1 className='text-4xl'>Sobre mi...</h1>
            <div className='flex flex-col justify-center items-center gap-10 md:gap-16 md:flex-row'>
                <div>
                    <img className='w-28' src="./vite.svg" alt="" />
                </div>
                <div>
                    <p className='text-center md:text-start'>
                      Desarrollador Front-End Junior con 6 meses de experiencia en desarrollo web.<br />
                      Enfocado en la creación deinterfaces de usuario responsivas. Egresado de<br />
                      ingeniería en tecnologías de la información en trámite de titulación.<br />
                    </p>
                </div>
            </div>
        </div>

        {/* Carrusel con la tecnologias que se conozce. */}
        <div className='flex flex-col justify-center gap-10 p-2'>
            <h1 className='text-4xl'>Experiencia con ...</h1>
            <div ref={carrusel} className="w-[350px] sm:w-[530px] md:w-[620px] lg:w-[790px] overflow-hidden whitespace-nowrap">
                {images.map(({ src, label }, i) => (
                    <div key={i} className="inline-block text-center w-24 mx-4">
                        <img src={src} alt={label} className="w-24 h-24 object-contain mx-auto" />
                        <p className="mt-2 text-sm text-gray-700">{label}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default My;