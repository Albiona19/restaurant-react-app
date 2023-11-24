import React from 'react';
import { images } from '../../constants'

import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour" />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>A restaurant is a place where people visit to eat and drink
       the food being prepared on the premises and pays for the same.  The food is served at the table to have a comfortable visit for your meals. 
       The restaurant offers a menu with various options for your meal, to choose from.</p>
    
      <button type='button' className='custom__button'>Explore Menu</button>
    
    
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="" />

    </div>
  </div>
);

export default Header;
