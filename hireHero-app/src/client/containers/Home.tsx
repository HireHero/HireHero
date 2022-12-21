import React, {useState} from 'react';
import '../App.css'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import CreateApplication from '../components/CreateApplication';

import Table from '../components/Table';

const Home = () => {
  const [isShow, setIsShow] = useState(false);

  const handleApplication = () => {
    setIsShow((isShow) => !isShow);
  }

  return (
    <div >
      <NavBar />
      <br></br>
      <div className='createbutton-container'>
      <CreateApplication handleApplication={handleApplication} />
      </div>
      <br></br>
      <Table />

      <Footer />
    </div>
  );
}

export default Home;