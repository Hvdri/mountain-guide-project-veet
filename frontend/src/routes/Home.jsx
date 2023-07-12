import React from 'react';


import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import m1 from './../assets/m1.jpg';
// import Destination from '../components/Destination/Destination';
import Trip from '../components/Trip/Trip';

function Home() {
    return (<>
            <Navbar />
            <Hero
                cName='hero'
                heroImg={m1}
                title='Bine ati venit!'
                text='Incepeti aventura!'
                url='#destinatii'
                btnClass='show'
                btnText='Get Started'

            />
            <Trip />
            <Footer />
        </>);
}

export default Home;