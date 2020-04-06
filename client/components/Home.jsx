import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import icon from '../assets/icon.png';
import white from '../assets/whiteLogo.png';

import Dashboard from './Dashboard.jsx';
import Hero from './Hero.jsx';
import Features from './Features.jsx';
import Contribute from './Contribute.jsx';
import Team from './Team.jsx';

const Home = () => {
  return (
    <div className='mainContainer'>
      <Hero />
      <Features />
      <Contribute />
      <Team />
    </div>
  );
};

export default Home;
