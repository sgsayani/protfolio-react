import React from 'react'
import './Experience.css'
import { Briefcase, Code, Globe } from 'lucide-react'  // make sure lucide-react is installed

const Experience = () => {
    return (
        <div id='experience' className='experience'>
            <h1 className='experience-heading'>Experience</h1>

            <div className='experience-container'>

                <div className='experience-item'>
                    <div className='experience-icon'>
                        <Briefcase size={28} />
                    </div>
                    <div className='experience-details'>
                        <h2>Frontend Developer</h2>
                        <h3>ABC Tech Pvt. Ltd.</h3>
                        <p className='experience-date'>Jan 2023 – Oct 2024</p>
                        <p className='experience-desc'>
                            Developed responsive and user-friendly web apps using React.js, Next.js & Tailwind.
                        </p>
                        <div className='experience-skills'>
                            <span>ReactJS</span>
                            <span>NextJS</span>
                            <span>Tailwind</span>
                            <span>JavaScript</span>
                        </div>
                    </div>
                </div>

                <div className='experience-item'>
                    <div className='experience-icon'>
                        <Code size={28} />
                    </div>
                    <div className='experience-details'>
                        <h2>Frontend Intern</h2>
                        <h3>XYZ Solutions</h3>
                        <p className='experience-date'>Jul 2022 – Dec 2022</p>
                        <p className='experience-desc'>
                            Assisted in building modern UI components and improving website performance.
                        </p>
                        <div className='experience-skills'>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </div>
                    </div>
                </div>

                <div className='experience-item'>
                    <div className='experience-icon'>
                        <Globe size={28} />
                    </div>
                    <div className='experience-details'>
                        <h2>Freelance Projects</h2>
                        <h3>Remote</h3>
                        <p className='experience-date'>2021 – 2022</p>
                        <p className='experience-desc'>
                            Designed and deployed client websites, focusing on SEO and modern UI/UX principles.
                        </p>
                        <div className='experience-skills'>
                            <span>WordPress</span>
                            <span>SEO</span>
                            <span>UI/UX</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience
