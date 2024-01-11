import { useState, useEffect} from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-scroll';
import { FaTimes, FaBars } from "react-icons/fa";

export function Navbar() {
    const TITULO = 'Rubén García';

    const links = [
        {
            id: 1,
            link: "About",
        },
        {
            id: 2,
            link: "Technologies"
        },
        {
            id: 3,
            link: "Projects"
        },
    ];

    const [nav, setNav] = useState(false)

    useEffect(() => {
        if (nav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [nav]);


    return (
        <nav className="fixed top-0 w-screen bg-black/50 backdrop-blur-md z-50">
            <div className="w-full h-100vh left-0 right-0 flex justify-between text-white lg:py-5 px-10 py-4">
                <div className="flex items-center self-center justify-start flex-1">
                    <ul className="text-3xl">
                        <li className="flex flex-row items-center gap-4 cursor-pointer">
                            <Link
                                to="Top"
                                spy={true}
                                smooth={true}
                                className="flex flex-row items-center gap-4 cursor-pointer"
                            >
                                <img
                                    draggable="false"
                                    className="lg:relative md:relative flex self-center w-16 cursor-pointer"
                                    src="src/assets/logo.webp"
                                    alt="Logo"
                                />
                                <div id="nombre" className="cursor-pointer lg:flex md:flex hidden">
                                    {TITULO}
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="md:flex items-center sm:justify-end hidden">
                    <ul id="atributos" className="flex flex-row text-lg gap-8">
                        {links.map(({ id, link }) => (
                            <li key={id} className='my-4'>
                                <Link to={link} spy={true} smooth={true}>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div onClick={() => setNav(!nav)} className='cursor-pointer flex justify-center self-center z-10 lg:hidden'>
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
                {nav && (
                    <ul id="enlacesMov" className={`flex flex-col absolute top-0 left-0 w-full h-screen justify-center items-center bg-black/80`}>
                    {links.map(({ id, link }) => (
                            <li key={id} className='px-4 cursor-pointer py-6 text-4xl'>
                                <Link to={link} onClick={() => setNav(!nav)} spy={true} smooth={true}>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
}
