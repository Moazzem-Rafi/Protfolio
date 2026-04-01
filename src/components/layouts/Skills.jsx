import React from 'react';
import Container from '../Container';
import Flex from '../Flex';

const Skills = () => {
    const skills = [
        { name: "HTML5", icon: "fa-brands fa-html5", color: "text-orange-500" },
        { name: "CSS3", icon: "fa-brands fa-css3-alt", color: "text-blue-500" },
        { name: "JavaScript", icon: "fa-brands fa-js", color: "text-yellow-400" },
        { name: "React", icon: "fa-brands fa-react", color: "text-cyan-400", animate: "animate-[spin_10s_linear_infinite]" },
        { name: "Tailwind", icon: "fa-solid fa-wind", color: "text-teal-400" },
        { name: "Git", icon: "fa-brands fa-git-alt", color: "text-red-500" },
        { name: "Figma", icon: "fa-brands fa-figma", color: "text-purple-400" },
        { name: "Next.js", icon: "fa-solid fa-n", color: "text-white" },
    ];

    return (
        <section id="skills" className="py-24 bg-[#020617] relative border-t border-white/5">
            
            {/* Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-200 h-200 bg-[#0ea5e9]/5 rounded-full blur-[100px] -z-10"></div>

            <Container>
                {/* Section Title */}
                <div className="text-center mb-16">
                    <span className="text-[#0ea5e9] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                        My Expertise
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Tech <span className="text-transparent bg-clip-text bg-linear-to-r from-[#38bdf8] to-[#6366f1]">Stack</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        I use these modern tools to build fast and user-friendly websites.
                    </p>
                </div>
                
                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8">
                    {skills.map((skill, index) => (
                        <div 
                            key={index} 
                            className="group relative bg-[#1e293b]/20 backdrop-blur-sm border border-white/5 p-8 rounded-2xl text-center hover:border-[#0ea5e9]/50 hover:bg-[#1e293b]/40 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Hover Effect  */}
                            <div className="absolute inset-0 bg-linear-to-br from-[#0ea5e9]/0 to-[#0ea5e9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Icon */}
                            <div className="mb-6 inline-block relative z-10">
                                <i className={`${skill.icon} text-5xl md:text-6xl ${skill.color} drop-shadow-lg group-hover:scale-110 transition-transform duration-300 ${skill.animate || ''}`}></i>
                            </div>
                            
                            {/* Name */}
                            <h3 className="text-xl font-semibold text-gray-300 group-hover:text-white transition-colors relative z-10">
                                {skill.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Skills;