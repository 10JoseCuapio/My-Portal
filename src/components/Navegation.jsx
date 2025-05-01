import { useEffect, useState } from 'react';

function Navegation () {

    return (
        <div>
            <div className="flex justify-end items-center">
                <nav>
                    <ul className='flex justify-end items-center gap-10 px-16 p-5'>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Acerca de</a></li>
                    <li><a href="">Servicios</a></li>
                    <li><a href="">Contacto</a></li>
                    </ul>
                </nav>
                <div>
                    <button>Traducir</button>

                </div>
            </div>
        </div>
    )
}

export default Navegation;