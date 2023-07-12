import React from 'react';


import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import m2 from './../assets/m1.jpg';
import Footer from '../components/Footer/Footer';
import AboutUs from '../components/About/AboutUs';

function About() {
    return (<>
            <Navbar/>
            <Hero
                cName='hero-mid'
                heroImg={m2}
                title='Despre noi'
                text='Incepeti aventura!'
                url='/'
                btnClass='hide'
                btnText='Get Started'
            />

            <AboutUs />

            <Footer />
            
        </>);
}

export default About;