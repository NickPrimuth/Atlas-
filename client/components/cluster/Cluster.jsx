import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Pods from './Pods.jsx';
import Nodes from './Nodes.jsx';
import Services from './Services.jsx';

const Cluster = ({ data }) => {
  return (
    <div>
      <Pods data={data} />
      <Nodes data={data} />
      <Services data={data} />
    </div>
  );
};

export default Cluster;
