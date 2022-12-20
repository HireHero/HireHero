import React from 'react';
import '../App.css'

const Dashboard = () => {
  const logout = () => {
    console.log('logout pressed');
  }

  return (
    <div>
      <nav>
        <img src="/logo.png" alt="Logo" />
        <a href="/pages">Pages</a>
        <button onClick={logout}>Logout</button>
      </nav>
      <button>Add Application</button>
      <h2>Your Applications</h2>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Date Entered</th>
            <th>Status</th>
            <th>Interview</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {/* This is where we would loop over the user's applications and render a row for each one */}
          <tr>
            <td>Example Company</td>
            <td>2022-01-01</td>
            <td>Pending</td>
            <td>2022-01-15</td>
            <td>Sent follow-up email</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;