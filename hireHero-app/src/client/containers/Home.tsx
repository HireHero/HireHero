import React, {useState} from 'react';
import '../App.css'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import CreateApplication from '../components/CreateApplication';

const Home = () => {
  const [isShow, setIsShow] = useState(false);

  const handleApplication = () => {
    setIsShow((isShow) => !isShow);
  }

  return (
    <div >
      <NavBar />
      <br></br>
      <div>
      <CreateApplication handleApplication={handleApplication} />
      </div>

     




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
            <td>Example tCompany</td>
            <td>2022-01-01</td>
            <td>Pending</td>
            <td>2022-01-15</td>
            <td>Sent follow-up email</td>
          </tr>
        </tbody>
      </table>
      <Footer />
    </div>
  );
}

export default Home;