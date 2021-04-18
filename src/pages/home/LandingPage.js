// React
import React from 'react';

// Components
import Carousel from './Carousel';
import Faq from './Faq';
import HowPalmaWorks from './HowPalmaWorks';
import Pricing from './Pricing';


const LandingPage = () => {
    console.log("loading");
    return (
        <div>
            <Carousel />
            <HowPalmaWorks />
            <Pricing />
            <Faq />
        </div>
        // <div className="container  text-center d-flex flex-column align-items-center justify-content-center" style={{height:'100vh'}}>
        //     <section className="h3 text-center">This domain has not been linked with an active hosted site</section>
        //     <em>www.palmanovas.com</em><span>was purchased less than 86 hours</span>
        //     <strong className="mt-3">if you think this is a mistake, kindly contact your domain server</strong>
        // </div>
    )
}

export default LandingPage;