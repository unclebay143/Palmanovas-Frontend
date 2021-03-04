import React from 'react';
import Tabs from '../Layout/tab/Tabs'
import { agents } from '../appDb';
const Upgrade = () => {
    return (

      <>
        <div className="upgrade">
          <section className="section-heading mt-5">
            <div className="clearfix">
                <h3>Payment Option</h3>
                <hr className="hr-line"/>
            </div>
          </section>
          <section>
              <Tabs> 
                {
                  agents.map(({ name, whatsappNumber, sr, cryptoAddress }, index)=>{
                    return(
                      <div label={ sr } className="tab-heading" key={ index }> 

                        {
                          cryptoAddress ? (
                            <p>Wallet Address: <em>{ cryptoAddress }</em></p>
                          ) : (
                            <>
                              <p>Name: <em>{ name }</em></p>
                              <p>Whatsapp Number: <em>{ whatsappNumber }</em></p>
                            </>
                          )
                        }
                        <button className="btn btn-sm btn-custom-green">I have paid to { sr }</button>
                      </div> 
                    )
                  })
                }
                {/* <div label="Agent 2" className="tab-heading"> 
                  After 'while, <em>Crocodile</em>! 
                </div> 
                <div label="Agent 3" className="tab-heading"> 
                  Nothing to see here, this tab is <em>extinct</em>! 
                </div>  */}
              </Tabs> 
          </section>
        </div>
      </>
    )
}

export default Upgrade;
