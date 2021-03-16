// React
import React from 'react';


const FaqCard = ({cardNumber, collapseNumber, question, answer}) =>{
    return(
        <>
            <div className="faq card mb-1">
                <div className="card-header p-2" id={cardNumber}>
                    <h5 className="mb-0">
                        <button className="question btn text-primary text-left" type="button" data-toggle="collapse" data-target={`#${collapseNumber}`} aria-expanded="true" aria-controls={collapseNumber}>
                            Q: {question}
                        </button>
                    </h5>
                </div>
                {/* Add class show to make answes display by default */}
                <div id={collapseNumber} className="collapse" aria-labelledby={cardNumber} data-parent="#paceFaq"> 
                    <div className="card-body">
                        <b>Answer:</b> {answer}
                    </div>
                </div>
            </div>
        </>
    )
}

const Faq = () => {
    return (
        <>
            <div className="container py-3 mb-5" id="faq">
                <h3 className='text-center mb-5'><span className="pace-accent-color">Frequestly Asked</span> <span className="pace-primary-color">Questions</span></h3>
                <div className="row">
                    <div className="col-12 mx-auto">
                        <div className="accordion" id="paceFaq">
                            <FaqCard cardNumber="question1" collapseNumber="collapse1" question="Palmanovas.com is about what?" 
                                answer="Here at Palmanova, we have experts who are good at studying the forex and stock market. Corporate bodies and individuals invest with us, which at the end of a 3 weeks trade, profits+capital are paid to investors. We also appreciate the effort of individuals that takes the initiative to invite other investors to the system by paying monthly allowances."
                            />
                            <FaqCard cardNumber="question2" collapseNumber="collapse2" question="what are the risks of investing in this platform?" 
                                answer="In Palmanovas, your investment is guaranteed because we have an excellent risk management system."
                            />
                            <FaqCard cardNumber="question3" collapseNumber="collapse3" question="Who can register?" 
                                answer="Anyone can register on this platform as long as he/she is of sound mind, has an internet-enabled device."
                            />
                            <FaqCard cardNumber="question4" collapseNumber="collapse4" question="How can I register?" 
                                answer={
                                    `
                                        All you need to register is an internet-enabled device, a mobile number/ valid email address.
                                            (1.) Click on the register button
                                            (2.) Fill out all fields and submit
                                            (3.) Login with either phone number or email.
                                    `
                            }/>
                            <FaqCard cardNumber="question5" collapseNumber="collapse5" question=" How do I fund my wallet?" 
                                answer={
                                    `
                                    *Click on the fundwallet button
                                    *Contact any of the 3 agent on your payment page via whatsapp or call.
                                    *Pay to the agent.
                                    *Click on the "I have paid to the agent" on the payment page where you picked the agent number
                                    *Upload your proof of payment
                                    *Refresh your page after 2hrs.
                                `}
                            />
                            <FaqCard cardNumber="question6" collapseNumber="collapse6" question="How do I invest?" 
                                answer="
                                    After the successful funding of wallet,
                                    *Click on invest
                                    *Choose your preferred package.
                                "
                            />
                            <FaqCard cardNumber="question7" collapseNumber="collapse7" question=" I funded my account and it does not reflect on my wallet, what should I do?" 
                                answer="If your wallet is not credited after 2hrs of payment, panic not, it will still be credited as the delay might be due to delays in delivery. Contact the support for rapid response."
                            />
                            <FaqCard cardNumber="question8" collapseNumber="collapse8" question="How can I withdraw funds
" 
                                answer="In order to withdraw funds, the investment icon must change from yellow to green after your ROI is matured.
                                *Click on withdraw funds
                                Withdrawals are done within 24hrs and can only be requested within working days.
                                "
                            />
                            <FaqCard cardNumber="question9" collapseNumber="collapse9" question="Is referral compulsory?" 
                                answer="NO. It's optional, you still get paid as to when due even without a referral. But you get a 10% referral bonus on anyone you refer i.e 10% of their investment package."
                            />
                            <FaqCard cardNumber="question10" collapseNumber="collapse10" question=" I referred someone and didn't get my bonus. What should I do?
" 
                                answer="This might be due to the wrong input of your referral ID. 
                                *Click on referral to see the list of all persons referred by you.
                                "
                            />
                            <FaqCard cardNumber="question11" collapseNumber="collapse11" question="Who is a PALMA" 
                                answer="Any successfully registered members that have subscribe to any of our package is called a PALMA."
                            />
                            <FaqCard cardNumber="question12" collapseNumber="collapse12" question="Who is a TUTOR and how can I be a TUTOR?
" 
                                answer="A TUTOR is an investor with a rank higher than a PALMA.
                                To become a TUTOR, an investor must have subscribed to any package not lower than the Palmstandard package (#25,000) and must have referred not fewer than 15persons who have invested with us (Palmanovas). A TUTOR earns a monthly allowance of #30,000
                                "
                            />
                            <FaqCard cardNumber="question13" collapseNumber="collapse13" question="Who is a V.P (Veteran Palmer) and how can I be a V.P
" 
                                answer="A V.P is an investor with a rank higher than a TUTOR.
                                To become a V.P, an investor must have subscribed to any package not lower than Palmpremium (#53,000) and must have referred not fewer than 25persons who have invested with us (Palmanovas). A V.P earns a monthly allowance of #50,000.
                                "
                            />
                            <FaqCard cardNumber="question14" collapseNumber="collapse14" question="I am a Palma, how can I upgrade?" 
                                answer="*Click on the upgrade button on your dashboard.
                                *Select your preferred package
                                *Pay the required package fee into the official bank account.
                                *Input your name and phone number
                                *Upload your proof of payment.
                                Click on upgrade.
                                Same applies to upgrading to become a V.P.
                                "
                            />
                            <FaqCard cardNumber="question15" collapseNumber="collapse15" question="How can I get signals for Forex or Stocks?" 
                                answer="To get signals from our professionals, you will have to subscribe under or Trainee section for Forex trading.
                                "
                            />
                            <FaqCard cardNumber="question16" collapseNumber="collapse16" question="How much is a monthly subscription for Forex signals?" 
                                answer="A monthly subscription for our VIP Forex signals goes for #55,000. 
                                "
                            />
                            <FaqCard cardNumber="question17" collapseNumber="collapse17" question="I have subscribed, how can I get the signals." 
                                answer="All subscribers to our professional signal package get signals sent to their dashboard, email, and an SMS."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq;