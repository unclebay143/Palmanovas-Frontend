import React from 'react'

const HandlePaymentRequest = () => {
    return (
        <>
            <div className="payment-history">
                <section className="section-heading mt-5">
                    <div className="clearfix">
                        <h3>Payment Requests</h3>
                        <hr className="hr-line"/>
                    </div>
                </section>
                <section className="my-3">
                    <select className="form-control">
                        <option>All</option>
                        <option>Pending</option>
                        <option>Paid</option>
                    </select>
                </section>
                <section className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Date</th>
                                <th scope="col">Action</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Ayodele Samuel Adebayo</td>
                                <td>#530, 000</td>
                                <td>February 28, 2021</td>
                                <td><button className="btn btn-sm btn-custom-green">Mark as Paid</button></td>
                                <td>Pending</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Durojaye Felix Toba</td>
                                <td>#530, 000</td>
                                <td>February 28, 2021</td>
                                <td>Paid</td>
                                <td>Paid</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </>
    )
}


export default HandlePaymentRequest;