import React from 'react';
import "./styles/Hero.css";

const Hero = () => {
    return (
        <header className="hero-container" role="banner" aria-label="Hero section">
            <div className="hero-content">
                <h1>특별한 나눔</h1>
                <div>
                    <h2>함께하는 마음이 만드는 소중한 변화</h2>
                    <p>즐거움과 나눔이 있는 감동의 순간</p>
                </div>
            </div>
            
            {/* Slide indicator */}
            <div className="hero-indicator-container" aria-label="Slide indicators">
                <button 
                className="indicator-btn active" 
                aria-label="Go to Slide 1"
                aria-current="true" 
                />
                <button 
                className="indicator-btn" 
                aria-label="Go to Slide 2"
                />
                <button 
                className="indicator-btn" 
                aria-label="Go to Slide 3"
                />
            </div>
        </header>
    );
};

export default Hero;
