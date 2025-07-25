import React from 'react'
import footerimg from '../assets/footer.svg'; 
import feature1 from '../assets/feature1.svg';
import feature2 from '../assets/feature2.svg';
import feature3 from '../assets/feature3.svg';
import feature4 from '../assets/feature4.svg';
import feature5 from '../assets/feature5.svg';
function Scomp() {
    const features = [feature1, feature2, feature3, feature4, feature5];
  return (
    <div className='footercontainer'>
        <div className='footerimg'>
            <img src={footerimg} alt="" />
        </div>
        <div className='features'>
            <div className='feature'>
                <img src={features[0]} alt="" />
                <h5>Best prices & offers</h5>
            </div>
            <div className='feature'>
                <img src={features[1]} alt="" />
                <h5>Free delivery</h5>
            </div>
            <div className='feature'>
                <img src={features[2]} alt="" />
                <h5>Great daily deal</h5>
            </div>
            <div className='feature'>
                <img src={features[3]} alt="" />
                <h5>Wide assortment</h5>
            </div>
            <div className='feature'>
                <img src={features[4]} alt="" />
                <h5>Easy returns</h5>
            </div>
        </div>
    </div>
  )
}
        
export default Scomp