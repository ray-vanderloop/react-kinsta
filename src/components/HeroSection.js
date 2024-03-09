import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/code-herobanner.mp4' autoPlay loop muted/>
            <h1>Ray Vanderloop</h1>
            <p>Software engineering graduate with a passion for design, development and accessibility</p>
        </div>
    )
}

export default HeroSection;
