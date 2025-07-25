import React from 'react'
import leftimg from'../assets/left.svg';
import frame1 from '../assets/Frame1.svg';
import frame2 from '../assets/Frame2.svg';
import frame3 from '../assets/Frame3.svg';

function Fcomp() {
    const imgs = [frame1, frame2, frame3];
  return (
    <div className='container'>
          <div className='imgdiv'>
            <img src={leftimg} alt="" />
          </div>
          <div className='content'>
            <h2>Why People Choose us?</h2>
            <div className='subcontent'>
            <img src={imgs[0]} alt="" />
            <h4>Convenient and Reliable</h4>
            
            </div>
            <div className='subcontent'>
            <img src={imgs[1]} alt="" />
            <h4>Variety of Options</h4>
           
            </div>
            <div className='subcontent'>
            <img src={imgs[2]} alt="" />
            <h4>Eat Burger</h4>
           
            </div>
          </div>
        </div>
  )
}

export default Fcomp