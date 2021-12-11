import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Products} from './components/Products';
import {InputData} from './components/InputData';
import {UploadData} from './components/UploadData';


function App() {
  return (
    <div className="App">
      <InputData />
      <Products />
    </div>
  );
}

export default App;
