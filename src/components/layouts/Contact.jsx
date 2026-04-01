import React, { useRef } from 'react';
import Container from '../Container'; 
import Flex from '../Flex';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_y315zst', 'template_2u72gov', form.current, 'y7o7ZXi1gyIaKWOLJ')
        .then(
            () => {
                console.log('SUCCESS!');
                alert("Message sent successfully!");
                form.current.reset();
            },
            (error) => {
                console.log('FAILED...', error.text);
                alert("Something went wrong. Please try again.");
            },
        );
    };

    return (
        <section id="contact" className="py-24 bg-[#020617] relative border-t border-white/5">
            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-75 h-75 bg-[#0ea5e9]/10 rounded-full blur-[120px] -z-10"></div>
            
            <Container>
                <Flex className="flex-col md:flex-row gap-12 md:gap-20">
                    
                    {/* Left Side: Text & Info */}
                    <div className="w-full md:w-1/2">
                        <span className="text-[#0ea5e9] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                            Get In Touch
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Let's Work <br /> 
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#38bdf8] to-[#6366f1]">Together!</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                            I am currently available for freelance work or full-time opportunities. If you have a project that needs some creative touch, feel free to contact me.
                        </p>
                        
                        {/* Contact Details */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#1e293b] rounded-full flex items-center justify-center text-[#0ea5e9] text-xl">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Email</p>
                                    <a href="mailto:666majharulislam@gmail.com" className="text-white font-medium hover:text-[#0ea5e9] transition-colors">
                                    hmoazzem8june@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#1e293b] rounded-full flex items-center justify-center text-[#0ea5e9] text-xl">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Location</p>
                                    <p className="text-white font-medium">Nrayanganj, Bangladesh</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-10 flex gap-4">
                            <a href="https://www.facebook.com/moazzem.rafi/" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#0ea5e9] hover:text-white hover:border-[#0ea5e9] transition-all duration-300">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="https://github.com/Moazzem-Rafi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#0ea5e9] hover:text-white hover:border-[#0ea5e9] transition-all duration-300">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="w-full md:w-1/2 bg-[#1e293b]/20 border border-white/5 p-8 md:p-10 rounded-3xl backdrop-blur-sm">
                        <form className="space-y-6" ref={form} onSubmit={sendEmail}>
                            {/* Name Field */}
                            <div>
                                <label className="text-white text-sm font-medium mb-2 block">Name</label>
                                <input 
                                    type="text" 
                                    name="user_name" 
                                    required 
                                    placeholder="Your Full Name" 
                                    className="w-full bg-[#020617] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0ea5e9] transition-colors placeholder-gray-600"
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label className="text-white text-sm font-medium mb-2 block">Email</label>
                                <input 
                                    type="email" 
                                    name="user_email" 
                                    required
                                    placeholder="Your Email Address" 
                                    className="w-full bg-[#020617] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0ea5e9] transition-colors placeholder-gray-600"
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <label className="text-white text-sm font-medium mb-2 block">Message</label>
                                <textarea 
                                    name="message" 
                                    required
                                    rows="4" 
                                    placeholder="Write your message here..." 
                                    className="w-full bg-[#020617] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0ea5e9] transition-colors placeholder-gray-600 resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <input 
                                type="submit" 
                                value="Send" 
                                className="w-full bg-[#0ea5e9] text-white font-bold py-3.5 rounded-lg hover:bg-[#0284c7] transition-all duration-300 shadow-[0_0_15px_rgba(14,165,233,0.3)] cursor-pointer"
                            />
                        </form>
                    </div>
                </Flex>
            </Container>
        </section>
    );
};

export default Contact;