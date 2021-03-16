import React from 'react'

const ManageUsers = () => {
    return (
        <>
            <div className="payment-history">
                <section className="section-heading mt-5">
                <div className="clearfix">
                    <h3>Manage users</h3>
                    <hr className="hr-line"/>
                </div>
                </section>
                <section className="my-3">
                    <select className="form-control">
                        <option>All</option>
                        <option>Matured</option>
                        <option></option>
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
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Ayodele Samuel Adebayo</td>
                                <td>#530, 000</td>
                                <td>February 28, 2021</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </>
    )
}


export default ManageUsers;