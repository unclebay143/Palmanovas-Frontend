// React
import React, { useEffect, useState } from 'react';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPaperclip
} from "@fortawesome/free-solid-svg-icons";
import {sendResolutionDetails} from './../../../actions/resolutionAction/resolutionAction'

// Dummy data
import { useDispatch, useSelector } from 'react-redux';

const Resolution = () => {
    const { profile } = useSelector(state => state.user);
    const { roleID } = profile || {};
    const [ currentUserType, setCurrentUserType ] = useState(null);

    useEffect(() => {
        switch (roleID) {
            case 1:
                return setCurrentUserType('normal')
            case 2:
                return setCurrentUserType('admin')
            case 3:
                return setCurrentUserType('superAdmin')
            default:
                break;
        }
    }, [roleID])
    const dispatch = useDispatch()
    const [resolutionForm, setresolutionForm] = useState({
        // no attachment
        attachment: null,
        // no comment
        comment: null
    })

    // when the user state writing comment
    const handleCommentChange = (event) =>{
        // update the state
        setresolutionForm({
            ...resolutionForm,
            comment: event.target.value
        })
    }
    
    // when the file is selected, from the pop up
    const handleAttachmentChange = (event) =>{
        // update the state
        setresolutionForm({
            ...resolutionForm,
            attachment: event.target.files[0]
        })
    }

    const handleSubmit = () =>{
        const data = new FormData();

        data.append(
            'fileName', // name
            resolutionForm.attachment, // file
            resolutionForm.attachment.name, // file name
            )
            
            const file = {
                // comment: resolutionForm.comment,
                fileName: resolutionForm.attachment.name
            // filename: resolutionForm.attachment.name
            }

            dispatch(sendResolutionDetails(file))
            .then((res)=>console.log(res))
            .catch((err)=>console.log(err))
            console.log(resolutionForm.attachment.name);
            // console.log("payload",payLoad);
            // console.log("formdata",file);
    }
    console.log(resolutionForm);
    console.log(resolutionForm.comment);
    console.log(resolutionForm.attachment);



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
                    currentUserType === 'normal' && (
                        <>
                            <section className="">
                                <div className="row">
                                    <div className="col-md-6 col-lg-12 col-12">
                                        <section className="my-3 alert alert-success">
                                            Your account may be suspended for any unpaid or false resolution.
                                        </section>
                                        <section>
                                            <h5>Send us a mail</h5>
                                            <p style={{lineHeight: '2'}}>
                                                forward your proof of payment to 
                                                <a 
                                                    href="mailto:palmanovascare@gmail.com" 
                                                    className="alert alert-success p-2 m-2"
                                                >
                                                    <u>
                                                        palmanovascare@gmail.com
                                                    </u>
                                                </a>
                                            </p>
                                        </section>
                                        <strong className="d-none ">OR</strong>
                                        <section className="d-none my-3">
                                            <h5 className="mb-4">Upload proof of payment</h5>
                                            <div className="mb-3">
                                                <label>Comment</label>
                                                <input 
                                                    type="text" 
                                                    placeholder="write your comment" 
                                                    className="form-control form-control-sm"
                                                    onChange={handleCommentChange}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label>Upload proof of payment</label>
                                                <input 
                                                    type="file" 
                                                    placeholder="Subject" 
                                                    className="form-control form-control-sm"
                                                    onChange={handleAttachmentChange}
                                                />
                                            </div>
                                            <button className="btn btn-custom-green btn-block" onClick={handleSubmit}>Send</button>
                                        </section>
                                    </div>
                                </div>
                            </section>
                        </>
                    )
                }

                {
                    currentUserType !== 'normal' && (
                        <>
                            <section className="table-responsive">
                                <div className="col-md-6 col-lg-12 col-12">
                                    <section className="my-3 alert alert-success">
                                        To check new resolution message log on to:
                                            <span
                                                className="alert alert-warning p-2 m-2"
                                            >
                                                <u>
                                                    palmanovascare@gmail.com
                                                </u>
                                            </span>
                                    </section>
                                </div>
                                <table className="table table-hover d-none">
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