// React
import React from 'react'
import { Link } from 'react-router-dom'

const PricingCard = ({ packageName, packagePrice, packagePercentage, packagePercentageBreakDown, buttonText, customBackgroundColor }) => {
    return(
        <>
            <div className="col-md-4 pricing my-3">
                <div className="card mb-4 box-shadow">
                    <div className={`card-header ${customBackgroundColor ? customBackgroundColor : 'bg-custom-green'}`}>
                        <h4 className="my-0 font-weight-normal package-name"> { packageName }</h4>
                    </div>
                    <div className="card-body">
                        <h3><b>{packagePrice} </b><small className="text-muted"></small></h3>
                        <ul className="list-unstyled mt-3 mb-4 list-group list-group-flush">
                            <li className="list-group-item border-success"></li>
                            <li className="list-group-item border-success">{ packagePercentage }</li>
                            <li className="list-group-item border-success">{ packagePercentageBreakDown }</li>
                            <li className="list-group-item border-success"></li>
                        </ul>
                        <Link
                            to="/signup" 
                            type="button" 
                            className={`btn btn-lg btn-block text-white ${customBackgroundColor ? customBackgroundColor : 'bg-custom-green'}`}
                            >{ buttonText } { !buttonText && 'Invest' }</Link>
                    </div>
                </div>
            </div>
        </>
    )
}


const Pricing = () => {
    return (
        <>
            <div className="text-center mb-5">
                <h2 className="text-center mb-5 section-lead">Palmanovas Packages</h2>
                <div className="card container p-5">
                    <div className="row pt-4">
                        <PricingCard 
                            packageName="PalmBasic"
                            packagePercentage="ROI #20350"
                            packagePrice="#10, 000"
                            packagePercentageBreakDown = "#970per day for 21days"
                            buttonText="Get Started"
                        />
                        <PricingCard 
                            packageName="Palmstandard"
                            packagePercentage="ROI #46,250"
                            packagePrice="#25, 000"
                            packagePercentageBreakDown = "#2,203per day for 21 days"
                        />
                      
                        <PricingCard 
                            packageName="Palmpremium"
                            packagePercentage="#98,050"
                            packagePrice="#53, 000"
                            packagePercentageBreakDown = "#4,690per day for 21days"
                        />
                        <PricingCard 
                            packageName="Palmsilver"
                            packagePercentage="ROI #199,800"
                            packagePrice="#108, 000 "
                            packagePercentageBreakDown = "#9,415per day for 21days"
                            customBackgroundColor="bg-custom-brown"
                        />
                        <PricingCard 
                            packageName="Palmbronze"
                            packagePercentage="ROI #410,700"
                            packagePrice="#222,000"
                            packagePercentageBreakDown = "#19,557per day for 21days"
                            customBackgroundColor="bg-custom-brown"
                        />
                        <PricingCard 
                            packageName="Palmgold"
                            packagePercentage="ROI #980,500"
                            packagePrice="#530,000"
                            packagePercentageBreakDown = "#46,690per day for 21days"
                            customBackgroundColor="bg-custom-brown"
                        />
                        <PricingCard 
                            packageName="Palmmaster"
                            packagePercentage="ROI #2,053,500"
                            packagePrice="#1,110,000"
                            packagePercentageBreakDown = "#330,357per day for 28day"
                            customBackgroundColor="bg-custom-dodgerblue"
                        />
                        <PricingCard 
                            packageName="Palmexecutive"
                            packagePercentage="ROI #4,625,000"
                            packagePrice="#2,500,000"
                            packagePercentageBreakDown = "#165,178per day for 28days"
                            customBackgroundColor="bg-custom-dodgerblue"
                        />
                        <PricingCard 
                            packageName="palmVIP"
                            packagePercentage="ROI # 9,250,000"
                            packagePrice="#5,000,000"
                            packagePercentageBreakDown = "#330,357per day for 28day"
                            customBackgroundColor="bg-custom-dodgerblue"
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Pricing;