// React
import React, { useEffect, useState } from 'react';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faAngleRight,
    faCheckCircle, 
    faShareAlt, 
    faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import { getUserReferralBonusPercentage } from '../../../actions/bonus/bonusAction';


export const Bonus = () => {
    const [currentBonus, setCurrentBonus] = useState(null)
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const { profile } = user;
    const [flipBonusCard, setFlipBonusCard] = useState(false)
    const [isBonusAvailable] = useState(true)

    useEffect(() => {
        if(profile){
            dispatch(getUserReferralBonusPercentage(profile.userID))
            .then((response)=>{
                setCurrentBonus(response)
            })
        }
    }, [dispatch, profile?.userID])
    
    return (
        <>
            {
                isBonusAvailable ? (
                    <>
                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-12">
                                <p>current Bonus: <b># {currentBonus}</b></p>
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
                                                <p className="text-primary"><a href="https://facebook.com/sharer/sharer.php?u=www.palmanovas.com"> Facebook </a></p>
                                                <p className="text-primary"><a href="http://twitter.com/intent/tweet/?text=I joined palmanovas&url=www.palmanovas.com"> Twitter </a></p>
                                                <p className="text-primary"><a href="http://api.whatsapp.com/send?text=I%20joined%20palmanovas"> Whatsapp </a></p>
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
                                        <div className="d-flex justify-content-center align-items-center" style={{height:'300px'}}>
                                            <p>Thank you for choosing us</p>
                                        </div>
                                        {/* img-wrap */}
                                        <div className="description clearfix">
                                            <div className="quick-detail" onClick={(()=>setFlipBonusCard(false))}>
                                                <FontAwesomeIcon icon={ faAngleLeft }/> 
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
                                    <span>How to qualify for bonus</span>
                                    <ul className="p-0">
                                        <li>
                                            <FontAwesomeIcon icon={ faCheckCircle } className="mr-2 text-custom-green" size="lg"/> 
                                            Refer More people
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={ faCheckCircle } className="mr-2 text-custom-green" size="lg"/> 
                                            Share us on your social media
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={ faCheckCircle } className="mr-2 text-custom-green" size="lg"/> 
                                            Upgrade your package
                                        </li>
                                        {/* <li>
                                            <FontAwesomeIcon icon={ faSpinner } className="mr-2 text-custom-green" size="lg"/> 
                                            More tasks loading
                                        </li> */}
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