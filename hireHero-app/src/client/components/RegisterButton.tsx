import React from 'react'
const RegisterButton = ({registerAccount}) => {
    const handleClick = () => {
        window.open("/")
    }

    return ( 
        <div>
            <button className="button" onClick={handleClick}>
                Cancel
            </button>
            <button className="button" onClick={registerAccount}>
                Sign up
            </button>
        </div>
     );
}
 
export default RegisterButton;
