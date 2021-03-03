import React from 'react'

const Referral = () => {
    return (
        <>
            <section className="section-heading mt-5">
                <div className="clearfix">
                    <h3>Refer & Earn</h3>
                    <hr className="hr-line"/>
                </div>
                <div className="user-information">
                    <span className="">
                        Invite your friends and family to join Palmanovas and earn commission. Your Referral Link:
                        <span className="text-success"> https://palmanovas.com/?ref=27937</span>
                    </span>
                    <div className="referral-list">
                        <section className="section-heading mt-5">
                            <div className="clearfix">
                                <h3>Referrals List</h3>
                                <hr className="hr-line"/>
                            </div>
                        </section>
                        <section className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Date Registered</th>
                                        <th scope="col">Account Status</th>
                                        <th scope="col">Payment Date</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Ayodele Samuel Adebayo</td>
                                        <td>February 28, 2021</td>
                                        <td>Active</td>
                                        <td>Pending</td>
                                        <td>Pending</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Referral