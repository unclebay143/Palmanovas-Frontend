// React
import React from 'react';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPaperclip
} from "@fortawesome/free-solid-svg-icons";

// Dummy data
import { user } from '../appDb';

const Resolution = () => {
    const isAdmin = user.isAdmin;
    return (
        <>
            <div className="resolution">
                <section className="section-heading mt-5">
                    <div className="clearfix">
                        <h3>Resolution</h3>
                        <hr className="hr-line"/>
                    </div>
                </section>
                {
                    !isAdmin && (
                        <>
                            <section className="">
                                <div className="row">
                                    <div className="col-md-6 col-lg-12 col-12">
                                        <section className="my-3 alert alert-success">
                                            Your account may be suspended for any unpaid uploaded.
                                        </section>
                                        <section>
                                            <h5>Send us a mail</h5>
                                            <p style={{lineHeight: '2'}}>forward your proof of payment to <span className="alert alert-success p-2">support@palmanovas.com</span></p>
                                        </section>
                                        <strong className="">OR</strong>
                                        <section className="my-3">
                                            <h5 className="mb-4">Upload proof of payment</h5>
                                            <div className="mb-3">
                                                <label>Comment</label>
                                                <input type="text" placeholder="write your comment" className="form-control form-control-sm"/>
                                            </div>
                                            <div className="mb-4">
                                                <label>Upload proof of payment</label>
                                                <input type="file" placeholder="Subject" className="form-control form-control-sm"/>
                                            </div>
                                            <button className="btn btn-custom-green btn-block">Send</button>
                                        </section>
                                    </div>
                                </div>
                            </section>
                        </>
                    )
                }

                {
                    isAdmin && (
                        <>
                            <section className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Comment</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Attachment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Ayodele Samuel Adebayo</td>
                                            <td>Please look into this paymennt</td>
                                            <td>February 28, 2021</td>
                                            <td><FontAwesomeIcon icon={ faPaperclip } className="mr-2"/></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>
                        </>
                    )
                }
            </div>
        </>
    )
}



export default Resolution;