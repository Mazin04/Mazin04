import '../styles/Navbar.css'
import { Link } from 'react-scroll'

export function Navbar() {
    const TITULO = "Rubén García"
    const SOBRE = "About"
    const TECNOLOGIAS = "Technologies"
    const PROYECTOS = "Projects"

    return (
        <nav className="fixed top-0 w-screen bg-black/50 backdrop-blur-md z-50">
            <div className="w-full h-max left-0 right-0 flex justify-center sm:justify-between text-white lg:py-5 px-10 py-4">
                <div className="flex justify-center items-center self-center sm:justify-start flex-1">
                    <ul className="text-3xl">
                        <Link spy={true} smooth={true} className="flex flex-row items-center gap-4 cursor-pointer" to="Top">
                            <img draggable="false" className="lg:relative md:relative flex self-center w-16 cursor-pointer" src="src\assets\logo.webp" />
                            <li id="nombre" className="cursor-pointer lg:flex md:flex hidden">{TITULO}</li>
                        </Link>
                    </ul>
                </div>
                <div className="md:flex lg:flex-1 items-center sm:justify-end">
                    <ul id="atributos" className="flex flex-row text-lg gap-8">
                        <li className="my-4">
                            <Link spy={true} smooth={true} to="About">
                                {SOBRE}
                            </Link>
                        </li>
                        <li className="my-4">
                            <Link spy={true} smooth={true} to="Tecnologies">
                                {TECNOLOGIAS}
                            </Link>
                        </li>
                        <li className="my-4">
                            <Link spy={true} smooth={true} to="Projects">
                                {PROYECTOS}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}