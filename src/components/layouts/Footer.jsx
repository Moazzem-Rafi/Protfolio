import React from 'react';
import Container from '../Container';
import Flex from '../Flex';

const Footer = () => {
    return (
        <footer className="py-8 bg-[#020617] border-t border-white/5">
            <Container>
                <Flex className="flex-col md:flex-row justify-between items-center gap-4">
                    {/* Copyright Text */}
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        &copy; 2026 <span className="text-white font-medium">Moazzem Hossain</span>. All rights reserved.
                    </p>
                    {/* Quick Social Links */}
                    <div className="flex gap-6">
                        <a 
                            href="https://github.com/Moazzem-Rafi" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-400 hover:text-[#0ea5e9] transition-colors duration-300 text-lg"
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a 
                            href="https://www.facebook.com/moazzem.rafi/" 
                            className="text-gray-400 hover:text-[#0ea5e9] transition-colors duration-300 text-lg"
                        >
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                    </div>
                </Flex>
            </Container>
        </footer>
    );
};

export default Footer;