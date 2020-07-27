import React from 'react';
import logo from './logo.svg';
import './App.css';
import RegistrationForm from './Component/RegistrationForm';
import Webpage from './Component/Webpage';

function App() {
  return (
    <div className="App">
    <RegistrationForm/>
    <Webpage Titel ="The World's coolest webpage"/>
      
    </div>
  );
}

export default App;
