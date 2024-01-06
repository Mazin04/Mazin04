import '../styles/Navbar.css'
import { Link } from 'react-scroll'

export function Navbar() {
    const TITULO = "Rubén García"
    const SOBRE = "About"
    const TECNOLOGIAS = "Technologies"
    const PROYECTOS = "Projects"

    return (
        <nav className="fixed top-0 w-screen bg-black/50  backdrop-blur-sm z-50">
            <div className="h-10vh w-full left-0 right-0 flex justify-between text-white lg:py-5 px-10 py-4">
                <div className="flex items-center flex-1">
                    <ul className="text-3xl">
                        <Link spy={true} smooth={true} className="flex flex-row items-center gap-4" to="Top">
                            <img draggable="false" className="relative w-16 cursor-pointer" src="src\assets\logo.webp"></img>
                            <li id="nombre" className="cursor-pointer">{TITULO}</li>
                        </Link>
                    </ul>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items-center justify-end hidden">
                    <ul id="atributos" className="flex flex-row text-lg gap-8">
                        <Link spy={true} smooth={true} to="About">
                            <li className="my-4">{SOBRE}</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Tecnologies">
                            <li className="my-4">{TECNOLOGIAS}</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Projects">
                            <li className="my-4">{PROYECTOS}</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>

    )
}