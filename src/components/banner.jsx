import '../styles/Banner.css'
import Lottie from "lottie-react";
import animationData from '../assets/Anim.json'
import { TypeAnimation } from 'react-type-animation'




export function Banner() {

    return (
        <section id="Home" className="mx-auto container px-0 py-0 lg:py-4">
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-8 place-self-center text-center sm:text-left lg:justify-self-start'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-[5.15rem] lg:leading-normal font-extrabold'>
                        <span id="hi" className="text-white bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                            Hello, I&apos;m{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "Rubén García",
                                1000,
                                "a Backend Developer",
                                1000,
                                "an Android Developer",
                                1000,
                                "Rubén García",
                                1000
                            ]}
                            wrapper="span"
                            speed={30}
                            repeat={0}
                        /></h1>
                    <p className='text-white text-base sm:text-lg mb-6 lg:text-xl font-mono'>Turning ideas into code – that&apos;s my superpower.</p>

                    <div>
                        <button id="btnDownload" className='px-3 py-3 rounded-full mr-4 text-white'><a rel="noreferrer noopener" href="src\assets\files\CV_RUBEN_GARCIA_SEGOVIANO.pdf" download="CV_RUBEN_GARCIA_SEGOVIANO.pdf" id="aDownload">Download CV</a></button>
                    </div>
                </div>

                <div className="col-span-12 mt-8 sm:mt-0 sm:col-span-4 flex justify-center">
                    <div id="circleFoto" className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative -z-0">
                        <Lottie animationData={animationData} className="lottie absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" loop={true} />
                    </div>
                </div>
            </div>
        </section>
    )
}