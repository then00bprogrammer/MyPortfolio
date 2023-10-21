import React from 'react';

const HomeVideoButtonPlay = () => (
  <svg className='home__video__button--play' height='120' viewBox='0 0 120 120' width='120'>
    <filter id='blur-filter'>
      <feGaussianBlur in='SourceGraphic' stdDeviation='3'></feGaussianBlur>
    </filter>
    <circle className='glow' cx='60' cy='60' fillOpacity='0' r='60' strokeWidth='5'></circle>
    <polygon className='glow' points='42,48 42,102 100,70'></polygon>
    <circle cx='60' cy='60' fillOpacity='0' r='60' strokeWidth='5'></circle>
    <polygon points='42,48 42,102 100,70'></polygon>
  </svg>
);

export default HomeVideoButtonPlay;
