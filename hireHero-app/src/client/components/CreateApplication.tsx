import React from 'react';

 /* 
 When click this button, open a form for user to fill in infomation of interview tracking
 */

 const CreateApplication = ({handleApplication })=> {
    const handleClick = () => {
        handleApplication ();
  };
    return (
        <button className="button" onClick={handleClick}>New Application</button>
      );
 }
  
 export default CreateApplication;