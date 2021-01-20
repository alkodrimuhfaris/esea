/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
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
import './index.css';


// Import store
import useWindowDimension from '../../Helpers/useWindowDimension';

// import icon
import brandIcon from '../../Assets/Icons/eSeaIcon.png';
import NavTabs from '../Components/NavTabs';

export default function NavBar() {
  const { sm, md, lg, xl } = useWindowDimension();
  const [openNavbar, setOpenNavbar] = useState(false);

  useEffect(() => {
    if (xl || lg) setOpenNavbar(false)
  }, [lg, xl]);


  return (
    <nav className="sticky-top navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid px-5">
        <buton className="navbar__btn btn">
          <img src={brandIcon} className="img-fluid" alt="logo" />
        </buton>
        <button className="navbar-toggler" type="button" onClick={() => setOpenNavbar(!openNavbar)}>
          <span className="navbar-toggler-icon" />
        </button>
        {!sm && !md && <NavTabs />}
        <NavTabs outerClass={`navbar__custom ${openNavbar && "navbar__custom--active"}`} />
      </div>
    </nav>

  );
}
