import React from 'react';
import Navbar from "../Navbar/Navbar";

import './Hero.css';


function Hero(props) {
    return (<>

        <Navbar/>
        <div className={props.cName}>
            <img src={props.heroImg} alt="HeroImg" />
            <div className='hero-text'>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass}  >
                    {props.btnText}
                </a>
            </div>
        </div>
        
    </>);
}

export default Hero;