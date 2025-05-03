function My () {
    return (
        <section className="flex flex-col justify-center items-center min-h-screen">
            <div className="flex flex-col justify-center gap-10 p-12 -mt-14">
                <h1 className="text-4xl">Sobre mi...</h1>
                <div className="md:flex justify-center items-center gap-10">
                    <div className="grid justify-center">
                        <img className="w-24" src="./vite.svg" alt="" />
                    </div>
                    <div className="mt-10 md:mt-0">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus <br />
                            Mauris interdum felis eget tortor posuere posuere convallis vel tortor.<br />
                            Nam vulputate ultrices mi sit amet posuere. Sed interdum orci ac mauris <br />
                        </p>
                    </div>
                </div>
            </div>
           
            <div className="flex flex-col gap-10 p-12">
                <h1 className="text-4xl mt-20"> Experencia con... </h1>
                <div>
                    <div className="flex justify-center gap-5 sm:gap-28 md:gap-52">
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-20" src="./html.png" alt="" />
                            <p>HTML</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-20" src="./css.png" alt="" />
                            <p>CSS</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-20" src="./js.png" alt="" />
                            <p>JavaScript</p>
                        </div>
                    </div>
                    <div className="flex justify-center gap-5 sm:gap-20 md:gap-32 mt-10">
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-20" src="./git.png" alt="" />
                            <p>Git</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-20" src="./mysql.png" alt="" />
                            <p>MySQL</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-20" src="./bootstrap.png" alt="" />
                            <p>Bootstrap</p>
                        </div>
                    </div>
                    <div className="flex justify-center gap-5 sm:gap-28 md:gap-52 mt-10">
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-20" src="./laravel.png" alt="" />
                            <p>Laravel</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-20" src="./react.png" alt="" />
                            <p>React</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-20" src="./tailwind.png" alt="" />
                            <p className="text-center" >Tailwind CSS</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default My