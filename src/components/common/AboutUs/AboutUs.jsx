import React from 'react';
import styles from './AboutUs.module.scss';

const AboutUs = () => {
    return (
            <div className = {styles.AboutUs}>
                <h1> About US </h1>
                <p className = {styles.paragraph} >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Accusantium, sed voluptates. Facere placeat in eum assumenda 
                    sapiente enim eligendi, necessitatibus minima nam aut quod sequi 
                    molestias incidunt unde accusamus reprehenderit.</p>
            </div>
    );
}

export default AboutUs;