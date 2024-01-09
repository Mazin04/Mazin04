import '../styles/Hero.css'
import { useState, useEffect } from 'react';
import Lottie from "lottie-react";
import animationData from '../assets/Anim.json'
import { TypeAnimation } from 'react-type-animation'


export function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section id="Home" className="mx-auto container py-0 lg:py-4">
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-6 place-self-center text-center'>
                    <h1 className='text-green-400 mb-4 lg:leading-[3.5rem] text-xl sm:text-2xl lg:text-[2.15rem] text-center font-extrabold'>
                        <span id="myName" className="bg-clip-text mb text-5xl sm:text-5xl lg:text-[5.05rem] bg-gradient-to-r from-primary-400 to-secondary-600">
                            Hi! I&apos;m Rubén García
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "Backend Developer",
                                1000,
                                "Android Developer",
                                1000,
                                "Future Fullstack",
                                1000
                            ]}
                            wrapper="span"
                            speed={30}
                            repeat={Infinity}
                        /></h1>
                    <div>
                        <button id="btnDownload" className='px-3 py-3 rounded-full mr-4 text-white'><a rel="noreferrer noopener" href="src\assets\files\CV_RUBEN_GARCIA_SEGOVIANO.pdf" download="CV_RUBEN_GARCIA_SEGOVIANO.pdf" id="aDownload">Download CV</a></button>
                    </div>
                </div>
                <div className='col-span-12 sm:col-span-6 flex justify-center'>
                    <Lottie 
                        animationData={animationData} 
                        className="w-[20rem] lg:w-[50rem] parallax" 
                        loop={true}
                        style={{
                            transform: `translate(${mousePosition.x / 50}px, ${mousePosition.y / 50}px)`
                        }} 
                    />
                </div>
            </div>
        </section>
    )

}