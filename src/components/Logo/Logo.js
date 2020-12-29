import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => (
  <div className="ma4 mt0">
    <Tilt className="Tilt br2 shadow-2" options={{ max: 50 }} style={{ height: 150, width: 150 }}>
      <div className="Tilt-inner h-100 flex items-center justify-center">
        <img className="w-70 h-70 o-70" src={brain} alt="" />
        {/* 아이콘 제작자 https://www.flaticon.com/kr/authors/freepik */}
      </div>
    </Tilt>
  </div>
);

export default Logo;
