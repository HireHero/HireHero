import React from 'react';
import { Link } from "react-router-dom";

 /* 
 When click this button, open a form for user to fill in infomation of interview tracking
 */

 const CreateApplication = ({handleApplication })=> {
    const handleClick = () => {
        handleApplication ();
  };
    return (
      <Link to="/create">
           <button className="button" onClick={handleClick}>New Application</button>
      </Link>
      );
 }
  
 export default CreateApplication;