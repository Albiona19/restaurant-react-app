import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery,Intro, Header, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

// all components
const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;