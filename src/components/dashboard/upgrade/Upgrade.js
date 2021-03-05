import React from 'react';
import Tabs from '../Layout/tab/Tabs'
import { upgradeAndAgentsDetails } from '../appDb';
const Upgrade = () => {
    return (

      <>
        <div className="upgrade">
          <section className="section-heading mt-5">
            <div className="clearfix">
                <h3>Upgrade & Payment Option</h3>
                <hr className="hr-line"/>
            </div>
          </section>
          <section>
              <Tabs> 
                {
                  upgradeAndAgentsDetails.map(({ name, whatsappNumber, sr, cryptoAddress, packagesInformation  }, index)=>{
                    return(
                      <div label={ sr } className="tab-heading" key={ index }> 
                        <section className="my-4">
                          { // check and run this block if the current loop is packagesInformation
                            packagesInformation ? (
                              <>
                              <p>{packagesInformation.map((x, index)=>{
                                return(
                                  <>
                                  <dl>
                                    <dt> {index + 1}. {x.packageName}</dt>
                                    <dd>{x.packagePrice}</dd>
                                    <dd>{x.packageDescription}</dd>
                                  </dl>

                                  </>
                                )
                              })}</p>
                              </>
                              
                            ):( // else run this block if the the current loop is not packagesInformation
                              <>
                                {
                                  cryptoAddress ? ( // run this block if there is a cryptoAddress
                                    <p>Wallet Address: <em>{ cryptoAddress }</em></p>
                                    ) : ( // run this block for agent details
                                      <>
                                      <p>Name: <em>{ name }</em></p>
                                      <p>Whatsapp Number: <em>{ whatsappNumber }</em></p>
                                    </>
                                  )
                                }
                              </>
                            )
                          }
                        </section>
                        {
                          !packagesInformation && <button className="btn btn-sm btn-custom-green">I have paid to { sr }</button>
                        }
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
