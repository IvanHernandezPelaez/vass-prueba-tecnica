import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componentes/header/Header';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './componentes/home/Home';
import Footer from './componentes/Footer/Footer';

function App() {  

  return (
    <>      
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
