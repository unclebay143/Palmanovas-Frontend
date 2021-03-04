import React, { useState } from 'react';


// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faAngleRight,
    faCheckCircle, faShareAlt, faTimesCircle, 
} from "@fortawesome/free-solid-svg-icons";


export const Bonus = () => {

    const [flipBonusCard, setFlipBonusCard] = useState(false)
    const [isBonusAvailable, setIsBonusAvailable] = useState(true)
    
    return (
        <>
            {
                isBonusAvailable ? (
                    <>
                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-12">
                                <div className={ `bonus ${ flipBonusCard ? 'flip' : '' } ` }>
                                    {/* FRONT OF BONUS CARD */}    
                                    <div className="front">
                                        <span className="new">Share</span>
                                        <div className="img-wrap">
                                            {/* <img src="https://cdn.macrumors.com/article-new/2014/11/macbook_air_yosemite-800x450.jpg" alt="mac air" /> */}
                                            <i className="fa fa-heart fav" />
                                        </div>
                                        <div className="description clearfix">
                                            <span className="discount">
                                                <FontAwesomeIcon icon={ faShareAlt } className="mr-2 text-custom-green" size="lg"/> 
                                            </span>
                                            <div className="content">
                                                <h3> Social Share </h3>
                                                <p className="text-primary"><a href="#"> Facebook </a></p>
                                                <p className="text-primary"><a href="#"> Twitter </a></p>
                                                <p className="text-primary"><a href="#"> Whatsapp </a></p>
                                            </div>
                                            <div className="price">
                                                {/* <span className="old-price"><del></del></span><span className="new-price text-danger">4</span> */}
                                            </div>
                                            <div className="quick-detail" onClick={(()=>setFlipBonusCard(true))}>
                                                <FontAwesomeIcon icon={ faAngleRight }/> 
                                            </div>
                                        </div>
                                    </div>
                                    {/* END OF FRONT */}

                                    {/* BACK OF BONUS CARD */}
                                    <div className="back">
                                        <div className="img-wrap">
                                            <img src="https://cdn.macrumors.com/article-new/2014/11/macbook_air_yosemite-800x450.jpg" alt="mac air" />
                                            <ul className="indicator">
                                                <li><img src="https://cdn.macrumors.com/article-new/2014/11/macbook_air_yosemite-800x450.jpg" alt /></li>
                                                <li><img src="https://cdn.macrumors.com/article-new/2014/11/macbook_air_yosemite-800x450.jpg" alt /></li>
                                                <li><img src="https://cdn.macrumors.com/article-new/2014/11/macbook_air_yosemite-800x450.jpg" alt /></li>
                                            </ul>
                                        </div>
                                        {/* img-wrap */}
                                        <div className="description clearfix">
                                            <div className="quick-detail" onClick={(()=>setFlipBonusCard(false))}>
                                                <i className="fa fa-angle-right" />
                                            </div>
                                        </div>
                                        {/* /description */}
                                    </div>
                                    {/* /back */}
                                </div>
                                    {/* /bonus */}
                            </div>
                            <div className="col-md-8 col-lg-8 col-12 bonus-task">
                                <section className="profile-heading">
                                    <div className="clearfix">
                                        <h3>Bonus Tasks</h3>
                                        <hr className="hr-line"/>
                                    </div>
                                    <ul>
                                        <li>
                                            <FontAwesomeIcon icon={ faCheckCircle } className="mr-2 text-custom-green" size="lg"/> 
                                            Refer 5 people
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={ faCheckCircle } className="mr-2 text-custom-green" size="lg"/> 
                                            Upload a 5 minute testimonial video
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={ faTimesCircle } className="mr-2 text-danger" size="lg"/> 
                                            Upgrade your package
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={ faTimesCircle } className="mr-2 text-danger" size="lg"/> 
                                            More tasks loading
                                        </li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </>
                )
                 : 
                (
                    <p>You do not have any bonus tasks yet. check back later</p>
                )
            }
        </>
    )
}


export default Bonus;