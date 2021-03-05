import React from 'react';
import Item from './Item'
import Carousel from "react-elastic-carousel";
import '../css/MediaQueries.css';


const Element = () => {
    const state = {
        data: [
            {
                "id": 1,
                "header": "Pierwszy nagłówek",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                "id": 2,
                "header": "Drugi bardzo długi nagłówek",
                "content": "Pellentesque scelerisque pharetra magna non sollicitudin. Nam at ultricies dui. Etiam ac massa dolor."
            },
            {
                "id": 3,
                "header": "Trzeci  nagłówek",
                "content": "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras vitae aliquam orci."
            },
            {
                "id": 4,
                "header": "Czwarty nagłówek",
                "content": "Nam vulputate fermentum turpis non ultricies."
            },
            {
                "id": 5,
                "header": "Piąty nagłówek",
                "content": "Vestibulum sit amet nisi consectetur, tempus tellus a, fringilla orci."
            }
        ]
    }
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];



    const words = state.data.map(word => (<Item key={word.id}><h3>{word.header}</h3><p>{word.content}</p></Item>));

    return (
        <Carousel breakPoints={breakPoints}>
            {words}
        </Carousel>
    );



}

export default Element;
