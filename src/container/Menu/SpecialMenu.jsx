import React from 'react';

import './SpecialMenu.css';
import {images, data} from '../../constants'
import {SubHeading, MenuItem} from '../../components'

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className="app__specialMenu-title">
      <SubHeading title="Menu That Fits you palette" />
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
    <div className="app__specialMenu-menu_wine flex__center">
      <p className='app__specialMenu_menu_heading'>Wine & Beer</p>
      <div className="app__specialMenu_menu_item">
        {data.wines.map((wine, index)=>{
          <p>{wine}</p>
        })}

      </div>

    </div>
    </div>
  </div>
);

export default SpecialMenu;
