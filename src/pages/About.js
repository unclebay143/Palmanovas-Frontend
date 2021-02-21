import React from 'react'
import pageBackgroundImage from '../assets/images/bonusgrowth.jpeg'


const About = () => {
    return (
        <>
           <section id="about-us" className="">
            <div className="about-img">
                <img src={pageBackgroundImage} className="img-fluid" alt="login page background"/>
            </div>
               <div className="container my-5 d-flex flex-column justify-content-center align-items-center">
                    <article className="about-content">
                        <h2 className="text-center"> ABOUT US </h2>
                        <p className="text-justify"><span className="lead">Palmanovas</span> is a Capital Investment Company, vast in the knowledge 
                            of Forex Trading, with the aim of helping interested individuals attain the state 
                            of financial freedom by imparting this knowledge of forex trading and creating a 
                            platform where we can help manage investors funds.
                            Nine (9) investment packages are available from which investors can subscribe. 
                            Profit on packages is earned as stipulated in every plan within the duration of 
                            either 21 or 28days respectively depending on the choice of package.
                        </p>
                    </article>
               </div>
            </section>
        </>
    )
}

export default About;