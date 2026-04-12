import React, { useState } from 'react';
import Container from '../Container';
import Flex from '../Flex';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const linkStyle = "relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#0ea5e9] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-in-out after:origin-right hover:after:origin-left hover:text-[#0ea5e9] transition-colors duration-500";

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/10">
            <Container>
                <Flex className="justify-between items-center py-4">

                    {/* Logo - Moazzem Hossain  */}
                    <a href="#" className="text-2xl font-bold text-white tracking-wider font-sans">
                        Moazzem<span className="text-[#0ea5e9]">.</span>
                    </a>

                    {/* Navigation Links (Desktop) */}
                    <div className="hidden md:flex space-x-8 text-sm font-papRika font-medium text-gray-300">
                        <a href="#home" className={linkStyle}>Home</a>
                        <a href="#skills" className={linkStyle}>Skills</a>
                        <a href="#projects" className={linkStyle}>Projects</a>
                        <a href="#contact" className={linkStyle}>Contact</a>
                    </div>

                    {/* Action Buttons (Desktop) */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Contact Button */}
                        <a
                            href="#contact"
                            className="px-6 py-2 border-2 border-[#0ea5e9] text-[#0ea5e9] rounded-full hover:bg-[#0ea5e9] hover:text-white transition-all duration-300 font-medium text-sm shadow-[0_0_10px_rgba(14,165,233,0.1)] hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]"
                        >
                            Let's Talk
                        </a>
                        {/* Resume Download Button  */}
                        <a
                            href="/ResumeMoazzem.pdf" 
                            download="Moazzem_Hossain_Resume.pdf" 
                            className="px-6 py-2 bg-[#0ea5e9] text-white rounded-full hover:bg-transparent hover:text-[#0ea5e9] border-2 border-[#0ea5e9] transition-all duration-300 font-medium text-sm flex items-center gap-2"
                        >
                            Resume <i className="fa-solid fa-download"></i>
                        </a>

                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white text-2xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                    </button>
                </Flex>

                {/* Mobile Menu Content */}
                <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-112.5 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-col items-center space-y-6 font-papRika text-gray-300 text-sm font-medium">
                        <a href="#home" onClick={() => setIsOpen(false)} className={linkStyle}>Home</a>
                        <a href="#skills" onClick={() => setIsOpen(false)} className={linkStyle}>Skills</a>
                        <a href="#projects" onClick={() => setIsOpen(false)} className={linkStyle}>Projects</a>
                        <a href="#contact" onClick={() => setIsOpen(false)} className={linkStyle}>Contact</a>
                        
                        {/* Mobile Buttons */}
                        <div className="flex flex-col items-center gap-4 w-full pt-4">
                            <a href="#contact" onClick={() => setIsOpen(false)} className="w-48 text-center px-6 py-2 border-2 border-[#0ea5e9] text-[#0ea5e9] rounded-full font-bold">
                                Let's Talk
                            </a>
                            <a href="/ResumeMoazzem.pdf" download className="w-48 text-center px-6 py-2 bg-[#0ea5e9] text-white rounded-full flex items-center justify-center gap-2">
                                Resume <i className="fa-solid fa-download"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;