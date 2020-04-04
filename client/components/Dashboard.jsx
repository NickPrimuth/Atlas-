import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import icon from '../assets/icon.png';
import white from '../assets/whiteLogo.png';

const Dashboard = props => {
  return (
    <div>
      <Nav
        defaultActiveKey=''
        className='justify-content-between'
        id='navbarHome'
      >
        <Nav.Item>
          <Nav.Link href='/' className='dashLogo'>
            <img src={white} alt='Logo' className='logoHome' />
            <span>ThermaKube</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Link href='/login' className='ml-auto'>
          Login
        </Nav.Link>
        <NavDropdown title='My Cluster'>
          <Nav.Link href='/cluster'>Cluster</Nav.Link>

          <Nav.Link href='/visualizer'>Visualizer</Nav.Link>

          <Nav.Link href='/alerts'>Alerts</Nav.Link>
        </NavDropdown>
      </Nav>
    </div>
  );

  //sideNav original dashboard below
  // return (
  //   <div className='dashboard'>
  //     <img src={icon} alt='Logo' className='logo' />
  //     <Nav defaultActiveKey='' className='flex-column' id='navbar'>
  //       <Nav.Link href='/' className='dashHome'>
  //         Home
  //       </Nav.Link>
  //       <NavDropdown title='Home'>
  //         <NavDropdown.Item eventKey='1'>Overview</NavDropdown.Item>
  //         <NavDropdown.Item eventKey='2'>Contribute</NavDropdown.Item>
  //         <NavDropdown.Item eventKey='3'>Teams</NavDropdown.Item>
  //       </NavDropdown>
  //       <Nav.Link href='/cluster' className='dashCluster'>
  //         Cluster
  //       </Nav.Link>
  //       <Nav.Link href='/visualizer' className='dashTraffic'>
  //         Traffic
  //       </Nav.Link>
  //       <Nav.Link href='/alerts' className='dashAlerts'>
  //         Alerts
  //       </Nav.Link>
  //     </Nav>
  //   </div>
  // );
};

export default Dashboard;
