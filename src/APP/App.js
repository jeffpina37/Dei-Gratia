import React from 'react';
import './App.css';
import { Route } from 'react-router';
import { Navbar } from '../navBar/Navbar';
import { Home } from '../home/Home';
import {About} from '../about/About';
import {Contact} from '../contact/Contact';
import { Stocklist} from '../stocklist/Stocklist';
import {Cart} from '../cart/Cart';
import {Shop} from '../shop/Shop';
import { Footer } from '../footer/Footer';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
      <BrowserRouter>
        <Navbar/>
              <Route exact path='/Shop' component={Shop}/>
              <Route exact path='/' component={Home} />
              <Route exact path='/About' component={About} />
              <Route exact path='/Contact' component={Contact} />
              <Route exact path='/Stocklist' component={Stocklist} />
              <Route exact path='/Cart' component={Cart} />
        <Footer/>
      </BrowserRouter>
   
  
  );
}

export default App;
