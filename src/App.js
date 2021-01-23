import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import Main from './Components/Main';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
