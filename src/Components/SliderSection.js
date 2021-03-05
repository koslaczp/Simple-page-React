import React from 'react';
import Element from './Element'
import '../css/MediaQueries.css';


import '../css/App.css';
import '../css/SliderSection.css';


const SliderSection = () => {
    return (
        <section className="sliderSection">
            <span className="circle"></span>
            <div className="center60">
                <h1>Heading</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <article className="slider">
                    <Element />
                </article>
            </div>
        </section >
    )
}
export default SliderSection;


