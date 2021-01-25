/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// Import store
import useWindowDimension from '../../../Helpers/useWindowDimension';
// import icon
import brandIcon from '../../../Assets/Icons/eSeaIcon.png';


export default function NavbarClient() {
  const { md } = useWindowDimension();
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <Router>
      <Navbar
        className="w-100 bg-white text-dark shadow justify-content-start sticky-top px-5"
        light
        expand="md"
      >
        <NavbarBrand style={{ width: md ? '20%' : '15%' }}>
          <Button
            style={{
              width: '100%',
              minWidth: '75px',
              backgroundColor: '#fff',
              border: 'none',
            }}
          >
            <img src={brandIcon} className="img-fluid" alt="logo" />
          </Button>
        </NavbarBrand>
        <NavbarToggler
          className="ml-auto"
          onClick={() => setOpenNavbar(!openNavbar)}
        />
        <Collapse className="mr-auto" isOpen={openNavbar} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="d-flex align-items-center">
              <NavLink
                tag={HashLink}
                smooth
                to="#weareesea"
                className="mx-3 my-1 d-flex align-items-center justify-content-center"
              >
                <text className="mx-2 my-1 text-esea-main">We Are eSea</text>
              </NavLink>
            </NavItem>
            <NavItem className="d-flex align-items-center">
              <NavLink
                tag={HashLink}
                smooth
                to="#product"
                className="mx-3 my-1 d-flex align-items-center justify-content-center"
              >
                <text className="mx-2 my-1 text-esea-main">Product</text>
              </NavLink>
            </NavItem>
            <NavItem className="d-flex align-items-center">
              <NavLink
                tag={HashLink}
                smooth
                to="#aboutus"
                className="mx-3 my-1 d-flex align-items-center justify-content-center"
              >
                <text className="mx-2 my-1 text-esea-main">About Us</text>
              </NavLink>
            </NavItem>
            <NavItem className="d-flex align-items-center">
              <NavLink
                tag={HashLink}
                smooth
                to="#kerjasama"
                className="mx-3 my-1 d-flex align-items-center justify-content-center"
              >
                <text className="mx-2 my-1 text-esea-main">Kerja Sama</text>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Router>
  );
}
