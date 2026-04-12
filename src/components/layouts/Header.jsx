import React, { useState } from 'react'; // useState ইমপোর্ট করা হয়েছে
import Container from '../Container'; 
import Flex from '../Flex';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/10">
            <Container>
                <Flex className="justify-between items-center py-4">
                    
                    {/* Logo Section */}
                    <a href="#" className="text-2xl font-bold text-white tracking-wider font-sans">
                        Moazzem<span className="text-[#0ea5e9]">.</span>
                    </a>
                    
                    {/* Navigation Links (Desktop) */}
                    <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
                        <a href="#home" className="hover:text-[#0ea5e9] transition-colors duration-300">Home</a>
                        <a href="#skills" className="hover:text-[#0ea5e9] transition-colors duration-300">Skills</a>
                        <a href="#projects" className="hover:text-[#0ea5e9] transition-colors duration-300">Projects</a>
                        <a href="#contact" className="hover:text-[#0ea5e9] transition-colors duration-300">Contact</a>
                    </div>

                    {/* Contact Button (Desktop) */}
                    <a 
                        href="#contact" 
                        className="hidden md:block px-6 py-2 border-2 border-[#0ea5e9] text-[#0ea5e9] rounded-full hover:bg-[#0ea5e9] hover:text-white transition-all duration-300 font-medium text-sm shadow-[0_0_10px_rgba(14,165,233,0.1)] hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]"
                    >
                        Let's Talk
                    </a>

                    {/* Mobile Menu Toggle (Icon) */}
                    <button 
                        className="md:hidden text-white text-2xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                    </button>
                </Flex>
                <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-64 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-col items-center space-y-4 text-gray-300 text-sm font-medium">
                        <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-[#0ea5e9]">Home</a>
                        <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-[#0ea5e9]">Skills</a>
                        <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-[#0ea5e9]">Projects</a>
                        <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-[#0ea5e9]">Contact</a>
                        <a href="#contact" onClick={() => setIsOpen(false)} className="text-[#0ea5e9] font-bold">Let's Talk</a>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;