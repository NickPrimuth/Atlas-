import React, { Component } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard.jsx';
import Home from '../components/Home.jsx';

const Home_Container = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default Home_Container;
