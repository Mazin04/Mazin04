import { Tilt } from 'react-tilt'
import '../styles/About.css';

export function About() {

    const defaultOptions = {
        reverse: false,
        max: 30,
        perspective: 2000,
        scale: 1.05,
        speed: 500,
        transition: true,
        axis: null,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
    }

    return (
        <section id="About" className='mx-auto px-10 lg:py-4 flex justify-center'>
            <div className='grid grid-cols-1 sm:grid-cols-12 px-0 mb:px-0'>
                <div className='col-span-12 lg:col-span-6 text-white mx-4 text-justify'>
                    <h1 className='sm:text-6xl text-5xl my-6 pb-4 border-b-4 lg:text-justify text-center'>About me</h1>
                    <div className='leading-10 text-xl'>
                        <p className='mb-8'>From a young age, my fascination with technology ignited a deep-seated passion for understanding the inner workings of software, programs, and games. This enduring curiosity has shaped a distinctive blend of skills and experiences that define my journey.</p>
                        <p className='mb-8'>Currently in my second year of studying Multiplatform Application Development, I am eager to broaden my expertise to include web application development. Through my journey, I have gained hands-on experience in crafting Android applications using Kotlin, adeptly managing databases with SQL and PL/SQL, and honing my programming skills in Java.</p>
                        <p>I not only possess technical prowess but also value effective communication and collaboration. With near-native English proficiency certified at a C1 level, and an A2 proficiency in German, I can engage seamlessly in multicultural and multilingual work environments.</p>
                    </div>
                </div>

                <div className='col-span-12 lg:col-span-6 flex items-center mx-4 mt-12 lg:mt-0 justify-center'>
                    <Tilt options={defaultOptions}>
                        <div className='rounded-full bg-slate-600 w-full sm:w-[30rem] h-full sm:h-[30rem] flex items-center justify-center'>
                            <img src='src/assets/me.png' className='max-w-full max-h-full rounded-full' alt='Photo of myself' />
                        </div>
                    </Tilt>
                </div>
            </div>
        </section>
    )
}