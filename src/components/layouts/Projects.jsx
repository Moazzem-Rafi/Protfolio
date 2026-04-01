import React from 'react';
import Container from '../Container';
import Flex from '../Flex';
import eCommerce from '../../assets/eCommerce.png'
import portfolio1 from '../../assets/portfolio1.png'
import portfolio2 from '../../assets/portfolio2.png'

const Projects = () => {

    const projectList = [
        {
            id: 1,
            title: "E-Commerce Website",
            desc: "A fully functional online store where you can view products.",
            tags: ["React", "Tailwind CSS", "Context API"],
            image: eCommerce,
            liveLink: "https://uomo-ui.vercel.app/",
            repoLink: "https://github.com/Moazzem-Rafi/Uomo_E-Commerce"
        },
        {
            id: 2,
            title: "Portfolio",
            desc: "A modern landing page for Ui/Ux Designer.",
            tags: ["JavaScript", "jQuery", "Tailwind"],
            image: portfolio1,
            liveLink: "https://moazzem-rafi.github.io/Hunt_TheFinalPart/",
            repoLink: "https://github.com/Moazzem-Rafi/Hunt_TheFinalPart"
        },
        {
            id: 3,
            title: "Portfolio",
            desc: "A modern landing page for Ui/Ux Designer.",
            tags: ["CSS",],
            image: portfolio2,
            liveLink: "https://portostar-figma.vercel.app/",
            repoLink: "https://github.com/Moazzem-Rafi/Portostar_Figma"
        }
    ];

    return (
        <section id="projects" className="py-24 bg-[#020617]">
            <Container>
                
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-[#0ea5e9] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                        Portfolio
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-[#38bdf8] to-[#6366f1]">Projects</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Here are some of the projects I have built using React and Tailwind CSS.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projectList.map((project) => (
                        <div key={project.id} className="group bg-[#1e293b]/20 border border-white/5 rounded-2xl overflow-hidden hover:border-[#0ea5e9]/50 transition-all duration-300 hover:-translate-y-2">
                            
                            {/* Image Container */}
                            <div className="h-60 overflow-hidden relative">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Overlay (Optional) */}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#0ea5e9] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-6 line-clamp-2">
                                    {project.desc}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="px-3 py-1 bg-[#0ea5e9]/10 text-[#0ea5e9] text-xs font-semibold rounded-full border border-[#0ea5e9]/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <Flex className="items-center justify-between mt-auto">
                                    <a 
                                        href={project.liveLink} 
                                        className="text-white font-semibold text-sm flex items-center gap-2 hover:text-[#0ea5e9] transition-colors"
                                    >
                                        Live Preview <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    </a>
                                    <a 
                                        href={project.repoLink} 
                                        className="text-gray-400 text-xl hover:text-white transition-colors"
                                    >
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </Flex>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 'See More' Button (Optional) */}
                <div className="text-center mt-16">
                    <a 
                        href="https://github.com/Moazzem-Rafi" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-3 border border-[#0ea5e9] text-[#0ea5e9] font-bold rounded hover:bg-[#0ea5e9] hover:text-white transition-all duration-300"
                    >
                        View All Projects
                    </a>
                </div>
            </Container>
        </section>
    );
};

export default Projects;