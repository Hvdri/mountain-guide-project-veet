import React from 'react';


import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import m2 from './../assets/m1.jpg';
import ContactForm from '../components/ContactForm/ContactForm';

function Contact() {
    return (<>
            <Navbar/>
            <Hero
                cName='hero-mid'
                heroImg={m2}
                title='Contact'
                text='Incepeti aventura!'
                url='/'
                btnClass='hide'
                btnText='Get Started'

            />
            <ContactForm />
            <Footer />
            
        </>);
}

export default Contact;