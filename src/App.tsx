import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { CouponBanner } from './coupon';
import './indexapp.scss'

function App() {
  const [pdwidth, setPdwidth] = useState(false)
  const [width,setWidth]=useState(1440)
  const resizeUpdate = (e: any) => {
    if((e.target.innerWidth<=1440&&e.target.innerWidth>768)||(e.target.innerWidth<=520)){
      setWidth(e.target.innerWidth)
    }
    if (e.target.innerWidth <= 768) {
      setPdwidth(true)
    } else {
      setPdwidth(false)
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resizeUpdate);
    return () => {
      window.removeEventListener('resize', resizeUpdate);
    }
  }, [])
  return (
    <>
      {!pdwidth ?
        <div className='body'>
          <img className='body_img' src={require('./img/pcback.png')} />
          <div className='body_img_ren_body'>
            <img className='body_img_ren' src={require('./img/pcreng.png')} />
            <div className='body_img_ren_wen'>
              <p>Enjoy now your</p>
              <p>favorite brands with</p>
              <p>30% off</p>
            </div>
          </div>
          <div className='body_img_right_body'>
            <div className='body_img_right_body_time'>
              <CouponBanner />
            </div>
            <div className='body_img_right_wen'>
              <img src={require('./img/pcback2.png')} />
              <div className='body_img_right_wen_left'>
                <div>30%</div>
                <div>OFF</div>
              </div>
              <div className='body_img_right_wen_right'>
                <p>Welcome Coupom</p>
                <p  style={{transform:`scale(${width/1440})`}}>Aplicable all items</p>
                <p  style={{transform:`scale(${width/1440})`}}>Min. order 10€. Valid for 30 days from now. </p>
                <button>iLo quiero!</button>
              </div>
            </div>
          </div>
        </div> :
        <div className='body1'>
          <img className='body1_img' src={require('./img/pc1.png')} />
          <img className='body1_img2' src={require('./img/pc2.png')} />
          <div className='body1_wen'>
            <p>Enjoy now your favorite</p>
            <p> brands with</p>
            <p>30%</p>
            <p>off</p>
          </div>
          <div className='body1_img_right_body'>
            <div className='body1_img_right_body_time'>
              <CouponBanner />
            </div>
            <div className='body1_img_right_wen'>
              <img src={require('./img/pc3.png')} />
              <div className='body1_img_right_wen_left'>
                <div>30%</div>
                <div>OFF</div>
              </div>
              <div className='body1_img_right_wen_right'>
                <p>Welcome Coupom</p>
                <p  style={{transform:`scale(${width<=520?width/520:1})`}}>Save up to 20€. All items included.</p>
                <p  style={{transform:`scale(${width<=520?width/520:1})`}}>Min. spend: 10,00€. Valid for 30 day(s)</p>
                <button>I want it!</button>
              </div>
            </div>
          </div>
        </div>
      }</>
  );
}

export default App;
