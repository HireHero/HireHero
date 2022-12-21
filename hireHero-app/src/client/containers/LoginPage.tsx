import React, { useState } from 'react';
import LoginButton from '../components/LoginButton';
import RegisterButton from '../components/RegisterButton';
import { useNavigate } from 'react-router-dom';

const LoginPage = (setUserData) => {
  const navigate = useNavigate();
  const [accountCreation, setAccountCreation] = useState(false);
  //adding state object
  const [userObj, setUserObj] = useState({
    userName: '',
    password: '',
  });

  //////////////////////////////
  /////// Functions ///////////
  //////////////////////////////

  function clearFields() {
    setUserObj({
      userName: '',
      password: '',
    });
  }

  //Swap form
  function swapForms() {
    clearFields();
    setAccountCreation(!accountCreation);
  }

  //Registration Body
  async function registerAccount() {
    await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...userObj }),
    })
      .then((response) => {
        console.log(response, 'response');
        if (response.ok && response.status === 200) return response.json();
        throw new Error('Username already exits');
      })
      .then((response) => {
        console.log(response, 'response');
        setUserData(response.user_info);
        return navigate('/');
      })
      .catch((error) => console.log(error));
    clearFields();
  }

  //LoginUser
  async function loginUser() {
    await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObj),
    })
      .then((response) => {
        if (response.status === 500) {
          throw new Error("Username and password don't match");
        } else {
          console.log('Logging In');
          return navigate('/home');
        }
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
    clearFields();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserObj({ ...userObj, [name]: value });
  };

  return (
    <div className="login-container">
      <div className="login-page">
        <img
          src="https://api.logo.com/api/v2/images?format=webp&logo=logo_cceb9dac-3199-41d7-99f9-1f80eaa41c1c&width=2000&quality=100&background=transparent&fit=contain&u=1671607868"
          alt="My Website logo"
          class="logo"
        />
        <h1> Welcome to HireHero</h1>
        {/* {!accountCreation ? <h2>Please log in</h2> : <h2>Please sign up</h2>} */}
        <form onSubmit={handleSubmit} className="login-form">
          <label>
            Username:
            <input
              id="username"
              type="text"
              name="userName"
              value={userObj.userName}
              className="form-control"
              onChange={(e) => handleInputChange(e)}
            />
          </label>
          <label>
            Password:
            <input
              id="password"
              type="text"
              name="password"
              value={userObj.password}
              className="form-control"
              onChange={(e) => handleInputChange(e)}
            />
          </label>
          {!accountCreation ? (
            <LoginButton swapRegister={swapForms} loginUser={loginUser} />
          ) : (
            <RegisterButton
              swapLogin={swapForms}
              registerAccount={registerAccount}
            />
          )}
          {/* <LoginButton loginUser={loginUser} />
                  <RegisterButton /> */}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
