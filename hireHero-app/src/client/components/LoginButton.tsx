import React from 'react'
const LoginButton = ({swapRegister, loginUser}) => {
    return ( 
        <div>
            <button className="button" onClick={swapRegister}>
                Register
            </button>
            <button className="button" onClick={loginUser}>
                Log In
            </button>
        </div>
     );
}
 
export default LoginButton;