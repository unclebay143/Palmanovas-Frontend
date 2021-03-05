import React from 'react';
import { user } from '../appDb'

const RequestWithdrawal = () => {
    return (
        <>
            <section className="section-heading mt-5">
                <div className="clearfix">
                    <h3>Withdrawal Option</h3>
                    <hr className="hr-line"/>
                </div>
            </section>
            <section>
                <select className="form-control form-control-sm">
                    {
                        user.account && <option>{ user.account.accountName } - { user.account.accountNumber } - { user.account.bankName }</option>
                    }
                    {
                        user.crypto && <option>{ user.crypto.id } - { user.crypto.email }</option>
                    }
                </select>
                <button className="btn btn-sm btn-custom-green mt-3">Submit</button>
            </section>    
        </>
    )
}


export default RequestWithdrawal;