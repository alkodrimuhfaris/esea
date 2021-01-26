import React from 'react';
import ipAPI from 'ipapi.co';
import {useSelector, useDispatch} from 'react-redux';

// import component
import {io} from 'socket.io-client';
import NavBar from './NavBar/NavBar';
import Products from './Products/Products';
import WorkingTogether from './WorkingTogether/WorkingTogether';
import WeAreEsea from './WeAreEsea';
import AboutUs from './AboutUs';
import Footer from './Footer';
import Scroller from '../ComponentHelpers/Scroller';
import actions from '../../redux/actions/index';

export default function Main() {
  const dispatch = useDispatch();
  const ipData = useSelector((state) => state.startSession.data);

  React.useEffect(() => {
    const startSession = new Date().getTime();
    ipAPI.location((loc) => {
      dispatch(actions.visitorsActions.startSession(loc, startSession));
    });
  }, []);

  React.useEffect(() => {
    if (Object.keys(ipData).length) {
      const socket = io(process.env.REACT_APP_URL_BACKEND);
      socket.on('connect', () => {
        socket.emit('startSession', ipData);
      });
    }
  }, [ipData]);

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
