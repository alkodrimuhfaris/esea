import React from 'react';

// import component
import NavBar from './NavBar/NavBar';
import Products from './Products/Products';
import WorkingTogether from './WorkingTogether/WorkingTogether';

export default function Main() {
  return (
    <>
      <NavBar />
      <div>
        <Products />
        <WorkingTogether />
      </div>
    </>
  );
}
