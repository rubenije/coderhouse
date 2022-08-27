import React, { useState, useEffect }  from 'react';

/* Componentes */
import SlideList from '../SlideList/SlideList';
import SlideIndicator from '../SlideIndicator/SlideIndicator';

import { getSlides } from '../../data/firestoreFetch';


const SlideListContainer = () => {

    const [slides, setSlide] = useState([]);

    //componentDidUpdate
    useEffect(() => {
        getSlides()
            .then(result => setSlide(result))
            .catch(err => console.log(err));
    }, []);


    //componentWillUnmount
    useEffect(() => {
        return (() => {
            setSlide([]);
        })
    }, []);

    return (
        <>
            <div id="slideHome" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <SlideIndicator elements={slides}></SlideIndicator>
                </div>
                <div className="carousel-inner">
                    <SlideList elements={slides}></SlideList>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#slideHome" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#slideHome" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
        </>
    )
};

export default SlideListContainer;