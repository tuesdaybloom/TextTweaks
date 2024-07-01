
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import React from "react";

import About from './components/About';
function App() {
  const [mode, setMode] = useState('light');
  const [Tmode, setTMode] = useState('dark');
  const [able, setAble] = useState('Enable');
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500)
  }
  const changeMode = () => {

    if (mode === 'light') {
      setMode('dark')
      setAble('Disable')
      setTMode('light')
      document.body.style.backgroundColor = '#0c2864ef'
      showAlert("Dark mode is Enabled", "success")
    }
    else {
      setMode('light')
      setAble('Enable')
      setTMode('Dark')
      document.body.style.backgroundColor = '#bbb4e0ef'
      showAlert("Light mode is Enabled", "success")
    }
  }
  return (
    <>

      <Navbar title="TextTweak" about='About TextTweak' mode={mode} changeMode={changeMode} able={able} />
      <Alert alert={alert} />
      <div id='bgcolor' >
        <TextForm mode={Tmode} />
        <About mode={Tmode} emode={mode} />
      </div>

    </>

  );
}

export default App;
