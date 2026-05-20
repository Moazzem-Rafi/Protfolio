import React from 'react';
import Container from '../Container';
import Flex from '../Flex';
import Images from '../Images';
import moazzem from '/src/assets/Myself.png'

const Banner = () => {
    return (
        <section id="home" className="relative min-h-screen bg-[#020617] flex items-center overflow-hidden py-20 md:py-0">
            
            {/* Background Effects */}
            <div className="absolute bottom-0 left-0 w-125 h-125 bg-[#1e1b4b] rounded-full blur-[120px] opacity-40 -z-10"></div>
            <div className="absolute top-0 right-0 w-150 h-150 bg-[#172554] rounded-full blur-[120px] opacity-30 -z-10"></div>

            <Container>
                <Flex className="flex-col md:flex-row items-center justify-between gap-10 md:gap-8">
                    
                    {/* Left Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left z-10 order-2 md:order-1 mt-8 md:mt-0">
                        <span className="text-[#0ea5e9] font-bold tracking-[0.2em] uppercase text-sm mb-6 block">
                            Front-End Developer.
                        </span>
                        
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 font-sans">
                            Hello, I'm <br /> 
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#38bdf8] to-[#6366f1]">
                                Moazzem Hossain
                            </span>
                        </h1>
                        
                        <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed mx-auto md:mx-0">
                            I am a passionate developer focused on crafting clean, user-friendly, and responsive interfaces using <b className="text-white">React</b> & <b className="text-white">Tailwind CSS</b>.
                        </p>
                        
                        <div className="flex gap-5 justify-center md:justify-start items-center">
                            {/* View Work Button */}
                            <a 
                                href="#projects" 
                                className="px-8 py-3.5 bg-[#0ea5e9] text-white font-bold rounded-2xl hover:bg-[#0284c7] transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.3)]"
                            >
                                View Work
                            </a>
                            
                            {/* GitHub Button */}
                            <a 
                                href="https://github.com/Moazzem-Rafi" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="px-8 py-3.5 bg-[#1e293b] border border-gray-700 text-white font-bold  hover:bg-[#334155] transition-all duration-300 flex items-center gap-2 rounded-2xl"
                            >
                                <i className="fa-brands fa-github text-xl"></i> GitHub
                            </a>
                        </div>
                    </div>
                    
                    {/* Right Image */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end relative z-10 order-1 md:order-2">
                        <div className="relative w-75 h-75 md:w-120 md:h-120 flex items-center justify-center">
                            {/* Blue Glow */}
                            <div className="absolute inset-0 bg-[#3b82f6] rounded-full blur-[90px] opacity-30 animate-pulse"></div>
                            <Images imgSrc={moazzem} className={'relative w-70 h-70 md:w-110 md:h-110 object-cover rounded-full border-[5px] border-[#1e293b]/80 shadow-2xl z-10'}/>
                        </div>
                    </div>

                </Flex>
            </Container>
        </section>
    );
};

export default Banner;