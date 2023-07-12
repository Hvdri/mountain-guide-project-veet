import React from 'react';

import Navbar from "../components/Navbar/Navbar";
import Footer from '../components/Footer/Footer';
import Hero from "../components/Hero/Hero";

import { useLocation, Link } from 'react-router-dom';
import DestinationData from '../components/Destination/DestinationData';

const Destination = () => {

    const location = useLocation();
    const state = location.state;
    // console.log(state.paragraph);
    return (<>
        <Navbar />  
            
        <DestinationData 
          // descriere = {state.descriere}
          // heading = {state.heading}
          // pret = {state.pret}
          // titlu = {state.paragraph}
          // data = {state.heading}
          // deLa = {state.deLa}
          // panaLa = {state.panaLa}

          // image1 = {state.image1}
          // image2 = {state.image2}
          // image3 = {state.image3}
          // image4 = {state.image4}
          props = {state}
        />

        <Footer />
        </>
        );
}

export default Destination;