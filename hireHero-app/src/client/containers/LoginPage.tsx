import React, {useState} from 'react';
import LoginButton from '../components/LoginButton';
import RegisterButton from '../components/RegisterButton';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const [accountCreation, setAccountCreation] = useState(false);
  //adding state object
  const [userObj, setUserObj] = useState({
    userName: '',
    password: '',
  })

//////////////////////////////
/////// Functions ///////////
//////////////////////////////

function clearFields(){
    setUserObj({
        userName: "",
        password: "",
    })
}

//LoginUser

async function loginUser(){
    clearFields();
    await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userObj),
    })
    .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("Username and password don't match")
    })
    .then((response) => {
        console.log('Logging In')
        return navigate("/");
    })
    .catch((err) => {
        console.log("Error: ", err)
    })
}

const handleSubmit = (e) => {
    e.preventDefault();
  }


const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log('name', name);
    console.log('value', value);
    setUserObj({ ...userObj, [name]: value });
};

    return (
        <div className="login-page-container">
            <div className="login-page">
              <h1> Welcome to HireHero</h1>
              <form onSubmit={handleSubmit} className="form">
                  <label>
                    Username:
                    <input 
                    id="username"
                    type="text" 
                    name="username"
                    value={userObj.userName}
                    className="form-inputbox" 
                    onChange={e => handleInputChange(e)} />
                  </label>
                  <label>
                    Password:
                    <input 
                    id="password"
                    type="text" 
                    name='password'
                    value={userObj.password}
                    className="form-inputbox"
                    onChange={e => handleInputChange(e)}
                    />
                  </label>
                  <LoginButton loginUser={loginUser} />
                  <RegisterButton />
              </form>
            </div>
        </div>
      );
}
 
export default LoginPage;