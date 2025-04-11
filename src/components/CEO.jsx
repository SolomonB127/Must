import React from 'react';
import data from './../data/data';
import './styles/Ceo.css';

const CEO = () => {
    return (
        <section aria-label="CEO and Leadership" className="ceo-section">
            <div className="ceo-container">
                {data.map((item, index) => (
                <article key={index} className="ceo-card">
                    <img 
                    src={item.imgPath} 
                    alt={item.name} 
                    loading="lazy" 
                    decoding="async"
                    />
                    <h3>{item.name}</h3>
                </article>
                ))}
            </div>
        </section>
    );
};

export default CEO;
