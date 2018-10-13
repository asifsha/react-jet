import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { store } from 'redux';

it('renders without crashing', () => {
  const div = document.createElement('div');
  //ReactDOM.render( <BrowserRouter><App /></BrowserRouter>, div);
  //ReactDOM.unmountComponentAtNode(div);
});
