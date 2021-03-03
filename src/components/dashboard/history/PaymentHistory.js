import React from 'react'

const PaymentHistory = () => {
  return (
    <>
      <div className="payment-history">
        <section className="section-heading mt-5">
          <div className="clearfix">
              <h3>Payment History</h3>
              <hr className="hr-line"/>
          </div>
        </section>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Payment ID</th>
              <th scope="col">Package Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>PalmGold</td>
              <td>#530, 000</td>
              <td>February 28, 2021</td>
              <td>Pending</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>PalmGold</td>
              <td>#530, 000</td>
              <td>February 28, 2021</td>
              <td>Approved</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>PalmGold</td>
              <td>#530, 000</td>
              <td>February 28, 2021</td>
              <td>Failed</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>PalmGold</td>
              <td>#530, 000</td>
              <td>February 28, 2021</td>
              <td>Failed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}



export default PaymentHistory;