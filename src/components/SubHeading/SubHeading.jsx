import React from 'react';

import {images} from '../../constants';

const SubHeading = () => (
  <div style={{marginBottom:'1rem'}}>
    <p className="p_cormorant">TITLE</p>
    <img src={images.spoon} alt="" className='spoon__img' />
  </div>
);

export default SubHeading;
