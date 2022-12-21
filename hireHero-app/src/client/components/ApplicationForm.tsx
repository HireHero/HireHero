import React from "react";


const ApplicationForm = (isShow) => {
  return (
    <div className={`${isShow ? "active" : ""} show`}>
      <div className="app-form">
        <div className="form-box solid">
          <form>
            <h1 className="login-text">Application</h1>
            <label>Company</label>
            <br></br>
            <input type="text" name="username" className="app-box" />
            <br></br>
            <label>Position</label>
            <br></br>
            <input type="password" name="password" className="app-box" />
            <br></br>
  
          </form>
        </div>
      </div>
    </div>
  );
};
export default ApplicationForm;