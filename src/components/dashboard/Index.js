// React
import React from 'react';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandSparkles } from "@fortawesome/free-solid-svg-icons";

const Index = () => {
    return (
        <>
            <div className="dashboard-Index">
                <h2>
                    <FontAwesomeIcon icon={ faHandSparkles } className="mr-2"/>
                    Welcome back, Username
                </h2>
                <section className="container">
                    <div className="float-right">
                        <h4 className="">PalmaGold - #40, 000</h4>
                        <div className="progress">
                            <div 
                                className="progress-bar progress-bar-striped active" 
                                role="progressbar" 
                                aria-valuenow={40} 
                                aria-valuemin={0} 
                                aria-valuemax={100} 
                                style={{width: '40%'}}>
                                40%
                            </div>
                        </div>

                    </div>
                </section>
                <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
            </div>
        </>
    )
}


export default Index;