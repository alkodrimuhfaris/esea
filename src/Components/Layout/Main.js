import React from 'react';

// import component
import NavBar from './NavBar/NavBar';
import Products from './Products/Products';
import WorkingTogether from './WorkingTogether/WorkingTogether';
import WeAreEsea from './WeAreEsea';
import AboutUs from './AboutUs';
import Footer from './Footer';
import Scroller from '../ComponentHelpers/Scroller';

export default function Main() {
  return (
    <>
      <Scroller />
      <NavBar />
      <WeAreEsea />
      <Products />
      <AboutUs />
      <WorkingTogether />
      <Footer />
    </>
  );
}
