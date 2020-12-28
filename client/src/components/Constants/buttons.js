import React from 'react'

 const BtnPrimary = ({title}) => {
    return(
        <button  
            type="submit" 
            className="btn btn__primary">
                {title}
        </button>
    )
}

export default BtnPrimary;  