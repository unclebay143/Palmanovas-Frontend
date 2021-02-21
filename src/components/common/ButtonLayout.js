import React from 'react'

const ButtonLayout = (props) => {
    return (
        <>
            <button {...props} className={`btn btn-custom-green ${props.customclass}`}>{ props.label }</button>   
        </>
    )
}


export default ButtonLayout;