import { useState } from 'react'
import Header from './Header/Header.jsx';
import Body from './Body/Body.jsx';
import './App.css'
import Footer from './Footer/Footer.jsx';

function App() {
  const author = "Phong Doan";
  const appName = 'Leet101';
  return (
    <>
      <div className = 'app-container'>
        <Header author = {author} appName = {appName}></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
