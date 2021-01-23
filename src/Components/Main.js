/* eslint-disable prettier/prettier */
import React from 'react';

// import component
import ScrollToTop from 'react-scroll-up';
import { ExpandLessOutlined } from '@material-ui/icons';
import NavBar from './NavBar/NavBar';
import Products from './Products/Products';
import WorkingTogether from './WorkingTogether/WorkingTogether';
import WeAreEsea from './WeAreEsea';
import AboutUs from './AboutUs';
import Footer from './Footer';

export default function Main() {
  return (
    <>
      <ScrollToTop showUnder={160} style={{ zIndex: '999' }}>
        <span className="scroll__btn d-flex justify-content-center align-items-center">
          <ExpandLessOutlined fontSize="large" />
        </span>
      </ScrollToTop>
      <NavBar />
<<<<<<< HEAD
      <div className="w-100">
        <Products />
        <WorkingTogether />
      </div>
=======
      <WeAreEsea />
      <Products />
      <AboutUs />
      <WorkingTogether />
      <Footer />
>>>>>>> 61534efc288508a61c77a2360f37dbe2b8baa497
    </>
  );
}
