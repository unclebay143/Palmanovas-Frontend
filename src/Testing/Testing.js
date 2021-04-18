import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../actions/test/testAction';

export const Testing = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.test)
    const [currentUser, setCurrentUser] = useState(null)
    const [userID, setUserID] = useState(1)
    
    useEffect(() => {

        // calling the action function
        dispatch(loadUser(userID))
        if(user){
            setCurrentUser(user)
        }
        // .then((response)=>setCurrentUser(response.data))
        // .catch((error)=>console.log(error))
    }, [user])
    // console.log(currentUser);

    // if(!user){
    //     return(
    //         <h3>No current user</h3>
    //     )
    // }

    return (
        <section className="container d-flex justify-content-center align-items-center flex-column" style={{height: '100vh'}}>
            {/* <p>{currentUser?.userId}</p>
            <p>{currentUser?.title}</p>
            <p>{currentUser?.completed ? "Done" : "Go back to work"}</p>

            <button onClick={(()=> setUserID(2))}>2</button>
            <button onClick={(()=> setUserID(3))}>3</button> */}
            <h3>Subsription Expired!!!</h3>
            <p><em>palmanovas.com</em> hosting subscription has expired</p>
            <span>if you are the owner kindly contact your hosting service provider for renewal</span>

            <address>Powered by <em>netlify</em></address>
        </section>
    )
}
