// React
import React from 'react';

// Images
import carouselImage1 from '../../assets/images/invest2.jpeg';
import carouselImage2 from '../../assets/images/reward1.jpeg';
import carouselImage3 from '../../assets/images/reward2.jpeg';


const Carousel = () => {
    return (
        <>
            <section id="carousel">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={carouselImage1} className="d-block w-100" alt="..." />
                            <div className="carousel-caption">
                                <h3>The Smartest Way of Income</h3>
                                <p>Start investing smartly today and build toward your dreams</p>
                            </div>
                        </div>
                    <div className="carousel-item">
                        <img src={carouselImage2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                        <h3>The Smartest Way of Income</h3>
                        <p>No matter what they are, your dreams are valid, achieve them with palmanovas.com!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carouselImage3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <h3>The Smartest Way of Income</h3>
                            <p>Invest with peace of mind!</p>
                        </div>
                    </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </section>
        </>
    )
}

export default Carousel;