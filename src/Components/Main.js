import React from 'react';

// import component
import ScrollToTop from 'react-scroll-up';
import {FaChevronUp} from 'react-icons/fa';
import NavBar from './NavBar/NavBar';
import Products from './Products/Products';
import WorkingTogether from './WorkingTogether/WorkingTogether';
import WeAreEsea from './WeAreEsea';
import AboutUs from './AboutUs';
import Footer from './Footer';

export default function Main() {
  return (
    <>
      <ScrollToTop showUnder={160} style={{zIndex: '999'}}>
        <span className="scroll__btn d-flex justify-content-center align-items-center">
          <FaChevronUp size="1.5em" color="#FFF" fontSize="large" />
        </span>
      </ScrollToTop>
      <NavBar />
      <WeAreEsea />
      <Products />
      <AboutUs />
      <WorkingTogether />
      <Footer />
    </>
  );
}
