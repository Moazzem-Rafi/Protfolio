import React from 'react';
import Container from '../Container'; 
import Flex from '../Flex';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/10">
            <Container>
                <Flex className="justify-between items-center py-4">
                    
                    {/* Logo Section */}
                    <a href="#" className="text-2xl font-bold text-white tracking-wider font-sans">
                        Moazzem<span className="text-[#0ea5e9]">.</span>
                    </a>
                    
                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
                        <a href="#home" className="hover:text-[#0ea5e9] transition-colors duration-300">Home</a>
                        <a href="#skills" className="hover:text-[#0ea5e9] transition-colors duration-300">Skills</a>
                        <a href="#projects" className="hover:text-[#0ea5e9] transition-colors duration-300">Projects</a>
                        <a href="#contact" className="hover:text-[#0ea5e9] transition-colors duration-300">Contact</a>
                    </div>

                    {/* contact Button */}
                    <a 
                        href="#contact" 
                        className="hidden md:block px-6 py-2 border-2 border-[#0ea5e9] text-[#0ea5e9] rounded-full hover:bg-[#0ea5e9] hover:text-white transition-all duration-300 font-medium text-sm shadow-[0_0_10px_rgba(14,165,233,0.1)] hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]"
                    >
                        Let's Talk
                    </a>

                    {/* Mobile Menu Toggle (Icon) */}
                    <button className="md:hidden text-white text-2xl">
                        <i className="fa-solid fa-bars"></i>
                    </button>

                </Flex>
            </Container>
        </header>
    );
};

export default Header;