// React
import React from 'react';

// Components
import Carousel from './Carousel';
import Faq from './Faq';
import HowPalmaWorks from './HowPalmaWorks';
import Pricing from './Pricing';


const LandingPage = () => {
    return (
        <div>
            <Carousel />
            <HowPalmaWorks />
            <Pricing />
            <Faq />
        </div>
    )
}

export default LandingPage;