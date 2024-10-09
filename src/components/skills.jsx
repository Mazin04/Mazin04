import { useRef, useState } from 'react'
import SkillTag from './skillTag'
import { motion, useInView } from "framer-motion";
import SkillCard from './skillCard'

import '../styles/Skills.css'

const skillsData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "Project 1 description",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
]

export function Skills() {
    const SKILL_FRONTEND = "FRONTEND"
    const SKILL_BACKEND = "BACKEND"
    const SKILL_OTHER = "OTHER"

    const [tag, setTag] = useState("FRONTEND");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredSkills = skillsData.filter((skill) =>
        skill.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };


    return (
        <section id="Skills">
            <div className='px-10 lg:py-4 xl:mx-16 flex justify-center flex-col'>
                <h2 className='text-center text-5xl font-bold text-white mt-4 mb-8 md:mb-12'>
                    Skills
                </h2>
                <div className="text-white flex flex-col sm:flex-row justify-center items-center gap-4 py-6">
                    <SkillTag
                        name={SKILL_FRONTEND}
                        onClick={handleTagChange}
                        isSelected={tag === SKILL_FRONTEND}
                        bgColor={"bg-red-600"}
                    />
                    <SkillTag
                        name={SKILL_BACKEND}
                        onClick={handleTagChange}
                        isSelected={tag === SKILL_BACKEND}
                        bgColor={"bg-green-600"}
                    />
                    <SkillTag
                        name={SKILL_OTHER}
                        onClick={handleTagChange}
                        isSelected={tag === SKILL_OTHER}
                        bgColor={"bg-blue-700"}
                    />
                </div>
                <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {filteredSkills.map((project, index) => (
                        <motion.li
                            key={index}
                            variants={cardVariants}
                            initial="initial"
                            animate={isInView ? "animate" : "initial"}
                            transition={{ duration: 0.3, delay: index * 0.4 }}
                        >
                            <SkillCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.image}
                                gitUrl={project.gitUrl}
                                previewUrl={project.previewUrl}
                            />
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    )
}