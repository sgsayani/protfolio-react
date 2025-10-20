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
                        <h3>Tata Consultancy Survices</h3>
                        <p className='experience-date'>Sept 2024 – Present</p>
                        <p className='experience-desc'>
                            {/* Developed responsive and user-friendly web apps using React.js, Next.js & Tailwind. */}
                            <ul>
                                <li>Contributing to a large-scale <strong>Micro-Frontend Architecture</strong> project for a major banking client, ensuring scalability and modularity.</li>
                                <li>Developing and maintaining <strong>responsive, accessible, and high-performance</strong> web applications using Angular and TypeScript.</li>
                                <li>Collaborating closely with backend teams to <strong>integrate RESTful APIs</strong> and enhance UI/UX functionality for seamless user experiences.</li>
                                <li>Actively participating in <strong>Agile ceremonies</strong> including daily stand-ups, sprint planning, and code reviews to drive efficient delivery.</li>
                                <li>Implementing comprehensive <strong>unit and integration tests</strong> using Karma & Jasmine to ensure code quality and maintainability.</li>
                                <li>Optimizing web performance and user interaction, improving <strong>load times, accessibility scores, and overall usability</strong>.</li>
                            </ul>

                        </p>
                        <div className='experience-skills'>
                            <span>Angular</span>
                            <span>Typescript</span>
                            <span>CSS</span>
                            <span>Angular karma testcases</span>
                        </div>
                    </div>
                </div>

                {/* <div className='experience-item'>
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
                </div> */}

                {/* <div className='experience-item'>
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
                </div> */}

            </div>
        </div>
    )
}

export default Experience
