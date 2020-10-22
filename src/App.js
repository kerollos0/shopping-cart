import React from 'react';
import './App.css';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './Component/Cart';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/cart' component={Cart} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
