import React from 'react';

import {images} from '../../constants'

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding ' id='about'>
    <div className="app__aboutus-overlay flex__center" >
      <img src={images.G} alt="g letter" className='n__leter'/>
    </div>
    <div className="app__aboutus-content flex__center">
      <div className='app__aboutus-content_about'>
        <h1 className='headtext_cormorant'>About Us</h1>

        <img src={images.spoon} alt="" className='spoon__img'/>
        <p className="p__opensans">On occasions, I always go with my family to eat at my favorite restaurant, me and my siblings. The name of this restaurant is Crazy about you. Your imagination will surely go with this wonderful name. And it is worth it in fact, it is dedicated to food and dancing as well, 
        as it contains an area dedicated to dancing in different forms.</p>
        <button type='button' className='custom__button'>Know More</button>

      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="" className='knife__img'/>
        </div>
        <div className='app__aboutus-content_history'>
        <h1 className='headtext_cormorant'>Our History</h1>

        <img src={images.spoon} alt="" className='spoon__img'/>
        <p className="p__opensans">On occasions, I always go with my family to eat at my favorite restaurant, me and my siblings. The name of this restaurant is Crazy about you. Your imagination will surely go with this wonderful name. And it is worth it in fact, it is dedicated to food and dancing as well, 
        as it contains an area dedicated to dancing in different forms.</p>
        <button type='button' className='custom__button'>Know More</button>

     
      </div>
    </div>
  </div>
);

export default AboutUs;
