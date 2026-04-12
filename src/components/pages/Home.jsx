import About from "../layouts/About";
import Banner from "../layouts/Banner"
import Contact from "../layouts/Contact"
import Projects from "../layouts/Projects"
import Skills from "../layouts/Skills"

import ScrollToTop from "react-scroll-to-top";

const Home = () => {
    return (
        <>
            {/* ScrollToTop component with Icon */}
            <ScrollToTop 
                smooth 
                component={
                    <div className="flex items-center justify-center w-full h-full bg-[#0ea5e9] rounded-full text-white hover:bg-white hover:text-[#0ea5e9] transition-all duration-300 shadow-lg">
                        <i className="fa-solid fa-arrow-up text-lg"></i>
                    </div>
                } 
                style={{ 
                    background: "transparent", 
                    boxShadow: "none",
                    right: "30px",
                    bottom: "30px" 
                }}
            />
            
            <Banner/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </>
    )
}

export default Home