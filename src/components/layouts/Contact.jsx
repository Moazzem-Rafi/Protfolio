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
                                    <p className="text-white font-medium">Narayanganj, Bangladesh</p>
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
                    <div className="w-full md:w-1/2 bg-[#1e293b]/20 border border-white/5 p-8 md:p-10 rounded-3xl backdrop-blur-sm shadow-2xl">
                        <form className="space-y-8" ref={form} onSubmit={sendEmail}>

                            {/* Name Field */}
                            <div className="relative group">
                                <input
                                    type="text"
                                    name="user_name"
                                    id="user_name"
                                    required
                                    placeholder=" "
                                    className="peer w-full bg-[#020617] border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-[#0ea5e9] transition-all placeholder-transparent"
                                />
                                <label
                                    htmlFor="user_name"
                                    className="absolute left-4 top-4 text-gray-500 text-sm transition-all duration-300 pointer-events-none 
                peer-placeholder-shown:text-base peer-placeholder-shown:top-4 
                peer-focus:-top-3 peer-focus:left-2 peer-focus:text-[#0ea5e9] peer-focus:text-xs peer-focus:bg-[#020617] peer-focus:px-2
                peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-[#020617] peer-[:not(:placeholder-shown)]:px-2"
                                >
                                    Your Full Name
                                </label>
                            </div>

                            {/* Email Field */}
                            <div className="relative group">
                                <input
                                    type="email"
                                    name="user_email"
                                    id="user_email"
                                    required
                                    placeholder=" "
                                    className="peer w-full bg-[#020617] border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-[#0ea5e9] transition-all placeholder-transparent"
                                />
                                <label
                                    htmlFor="user_email"
                                    className="absolute left-4 top-4 text-gray-500 text-sm transition-all duration-300 pointer-events-none 
                peer-placeholder-shown:text-base peer-placeholder-shown:top-4 
                peer-focus:-top-3 peer-focus:left-2 peer-focus:text-[#0ea5e9] peer-focus:text-xs peer-focus:bg-[#020617] peer-focus:px-2
                peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-[#020617] peer-[:not(:placeholder-shown)]:px-2"
                                >
                                    Your Email Address
                                </label>
                            </div>

                            {/* Message Field */}
                            <div className="relative group">
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    rows="4"
                                    placeholder=" "
                                    className="peer w-full bg-[#020617] border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-[#0ea5e9] transition-all placeholder-transparent resize-none"
                                />
                                <label
                                    htmlFor="message"
                                    className="absolute left-4 top-4 text-gray-500 text-sm transition-all duration-300 pointer-events-none 
                peer-placeholder-shown:text-base peer-placeholder-shown:top-4 
                peer-focus:-top-3 peer-focus:left-2 peer-focus:text-[#0ea5e9] peer-focus:text-xs peer-focus:bg-[#020617] peer-focus:px-2
                peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-[#020617] peer-[:not(:placeholder-shown)]:px-2"
                                >
                                    Write your message here...
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#0ea5e9] text-white font-bold py-4 rounded-lg hover:bg-[#0284c7] active:scale-[0.98] transition-all duration-300 shadow-[0_0_15px_rgba(14,165,233,0.3)] cursor-pointer"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </Flex>
            </Container>
        </section>
    );
};

export default Contact;