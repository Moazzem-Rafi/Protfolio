


import About from "../layouts/About";
import Banner from "../layouts/Banner"
import Contact from "../layouts/Contact"
import Projects from "../layouts/Projects"
import Skills from "../layouts/Skills"

import ScrollToTop from "react-scroll-to-top";



const Home = () => {
    return (
        <>
        <ScrollToTop smooth component={<p style={{ color: "blue" }}>UP</p>} />
        <Banner/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        </>
    )
}

export default Home