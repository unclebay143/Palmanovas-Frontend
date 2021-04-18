import React from 'react';
import Tabs from '../Layout/tab/Tabs'
import { upgradeAndAgentsDetails } from '../appDb';
import Swal from 'sweetalert2'
import { tryDeclarePayment, getDeclaredPaymentList } from '../../../actions/paymentAction/paymentAction';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';


const Upgrade = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const  history = useHistory();
  const { profile, bankDetails } = user;

  // alert function
  const promptUser = (payeeId, payeeName) =>{
    Swal.fire({
      title: 'Are you sure?',
      html: `A ticket will be raised that you have paid to <b>${ payeeId }</b> ( ${ payeeName } )`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(83,175,80',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, I have paid!',
      customClass: {
        confirmButton: 'btn  btn-custom-green',
        cancelButton: 'btn btn-danger ml-2',
      },
      buttonsStyling: false
    }).then((result) => {
      // if the user clicked on confirm 
      if (result.isConfirmed) { // run this block
        dispatch(tryDeclarePayment(payeeName, profile.userID)) // dispatch an action to the backend
        .then((response)=>{
          Swal.fire( // UI notification of the success
            {
              title: 'Confirmed!',
              icon: 'success',
              text: 'Your ticket has been created.',
              confirmButtonColor: 'rgb(83,175,80)',
            }
          ).then(()=>history.push('/dashboard'))
        })
        .catch((error)=>{
          Swal.fire( // UI notification of the success
            {
              title: 'Error!',
              icon: 'warning',
              text: 'Something went wrong, please try again.',
              confirmButtonColor: 'rgb(83,175,80)',
            }
  
          )
        })
      }else{
        Swal.fire( // UI notification of the cancel action success
          {
            title: 'Cancelled!',
            icon: 'success',
          }

        )
      }
    })
  }
  if(!bankDetails){// if there is no bank details, return the user to their profile page
    Swal.fire({
      title: 'Update Profile',
      html: `<p>update your <strong><b><em>personal profile</em></b></strong> and <strong><b><em>payment details</em></b></strong>  to access this page</p>`,
      icon: 'warning',
      })
      .then(()=>{
        // alert("Update your profile")
        history.push("/dashboard/profile")
      })
  }
    return (

      <>
        <div className="upgrade">
          <section className="section-heading mt-5">
            <div className="clearfix">
                <h3>Upgrade & Payment Option</h3>
                <hr className="hr-line"/>
            </div>
          </section>
          <article>
            <p>View the available palmanovas packages and choose an agent to pay to.</p>
          </article>
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
                              <p style={{overflow: 'scroll', height: '45vh'}}>{packagesInformation.map((packageInfo, index)=>{
                                return(
                                  <>
                                  <dl>
                                    <dt> {index + 1}. {packageInfo.packageName}</dt>
                                    <dd>{packageInfo.packagePrice}</dd>
                                    <dd>{packageInfo.packageDescription}</dd>
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
                          !packagesInformation &&(
                            <>
                             <button className="btn btn-sm btn-custom-green" onClick={(()=>promptUser(sr, name))}>I have paid to { sr }</button>
                              <div className="tab-heading mt-3"> Only click on this button if you have <strong>PAID</strong> to {name || cryptoAddress}!</div> 
                           </>
                            )
                        }
                      </div> 
                    )
                  })
                }
              </Tabs> 

          </section>
        </div>
      </>
    )
}

export default Upgrade;
