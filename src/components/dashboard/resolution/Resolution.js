import React from 'react'

const Resolution = () => {
    return (
        <>
            <div className="resolution">
                <section className="section-heading mt-5">
                    <div className="clearfix">
                        <h3>Resolution</h3>
                        <hr className="hr-line"/>
                    </div>
                </section>
                <section className="containe">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-12">
                            <section className="my-3">
                                Your account may be suspended for any unpaid uploaded.
                            </section>
                            <div className="mb-3">
                                <label>Comment</label>
                                <input type="text" placeholder="write your comment" className="form-control form-control-sm"/>
                            </div>
                            <div className="mb-4">
                                <label>Upload proof of payment</label>
                                <input type="file" placeholder="Subject" className="form-control form-control-sm"/>
                            </div>
                            <button className="btn btn-sm btn-custom-green">Submit</button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}



export default Resolution;