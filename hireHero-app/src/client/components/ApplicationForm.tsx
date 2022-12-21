import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";


const options = ["waiting", "no response", "pending", "accepted", "rejected"]

function ApplicationForm() {
  const [formData, setFormData] = useState({});
  const [selected, setSelected] = useState(options[0])

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
  };

  return (
  
    <form onSubmit={handleSubmit}>
    <label>
        Company
         <input
        type="text"
        name="company"
        value={formData.company}
        onChange={event => {
          setFormData({ ...formData, [event.target.name]: event.target.value });
        }}
      />
    </label>
    <br></br>
    <label>
        Position
         <input
        type="text"
        name="position"
        value={formData.position}
        onChange={event => {
          setFormData({ ...formData, [event.target.name]: event.target.value });
        }}
      />
    </label>
     <br></br>
    <label>
        Date applied
         <input
        type="text"
        name="date_applied"
        value={formData.date_applied}
        onChange={event => {
          setFormData({ ...formData, [event.target.name]: event.target.value });
        }}
      />
    </label>
    <br></br>
    <label>
        Date of Interview
         <input
        type="text"
        name="date_of_interview"
        value={formData.date_of_interview}
        onChange={event => {
          setFormData({ ...formData, [event.target.name]: event.target.value });
        }}
      />
    </label>
     <br></br>
    <label>
        Time of Interview
         <input
        type="text"
        name="time_of_interview"
        value={formData.time_of_interview}
        onChange={event => {
          setFormData({ ...formData, [event.target.name]: event.target.value });
        }}
      />
    </label>
     <br></br>
    <label>
        Notes 
         <input
        type="text"
        name="notes"
        value={formData.notes}
        onChange={event => {
          setFormData({ ...formData, [event.target.name]: event.target.value });
        }}
      />
    </label>
     <br></br>
    <label>
        Application Status
       <select 
       value={selected} 
       onChange={(event) => setSelected(event.target.value)}>
         {options.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
         ))}
      </select>
    </label>
    

     
      <button type="submit">Submit</button>
      <Link to="/home">
          <button type="button">Home</button>
      </Link>


    </form>
  );
}

export default ApplicationForm;