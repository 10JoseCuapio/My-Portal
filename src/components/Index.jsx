function Index () {
    return (
        <div>
            <div className='flex flex-col justify-center'>
                <div>
                <nav>
                    <ul className='flex justify-end items-center gap-10 px-16 p-5'>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Acerca de</a></li>
                    <li><a href="">Servicios</a></li>
                    <li><a href="">Contacto</a></li>
                    </ul>
                </nav>
                </div>
                <div className='flex justify-center items-center gap-96 mt-48'>
                <div>
                    <p className='text-5xl'>Hola</p>
                    <p className='text-5xl'>Soy Jose Jaime</p>
                    <p className='text-5xl'>Frontend Developer JR</p>
                    <button className='w-40 h-10 flex justify-center items-center rounded-xl hover:w-44 hover:h-11 bg-[#65C3A1] mt-14 absolute'>
                    <img className='w-7' src="./Descargar.png" alt="" />
                    Visualizar CV
                    </button>
                </div>
                <div className=''>
                    <img className='w-40' src="./vite.svg" alt="" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Index;