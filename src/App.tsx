import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Calculator } from './components/test';
import ClassComponente from './components/testComponents/ClassComponent';
import {FunctionComponent} from './components/testComponents/FunctionComponent';

function App() {
  return (
    <div className="App">
      <ClassComponente message="hello world" />
      <FunctionComponent message="hello world" />
      <Calculator  />
    </div>
  );
} // end App

export default App;
