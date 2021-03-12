import React from 'react';
import './App.css';

import Header from './componentes/Header';
import Footer from './componentes/footer';
import HomePage from './componentes/Homepage';

function App() {
  return (
    <div className="App">
        <Header/>
        <Footer/>
        <HomePage/>
    </div>
  );
}

export default App;
