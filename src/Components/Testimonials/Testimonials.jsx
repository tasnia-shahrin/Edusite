import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'

const Testimonials = () => {
  const slider=useRef();
  let tx=0;

  const slideForward=()=>{
    if(tx>-50){
      tx-=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;

  }
  const slideBackward=()=>{
    if(tx<0){
      tx+=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  }
  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
         <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3>Willium Jackson</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet natus consectetur similique saepe! Sapiente saepe voluptatum amet molestiae vel quas?</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div>
                  <h3>Willium Jackson</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet natus consectetur similique saepe! Sapiente saepe voluptatum amet molestiae vel quas?</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
                <div>
                  <h3>Willium Jackson</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet natus consectetur similique saepe! Sapiente saepe voluptatum amet molestiae vel quas?</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
                <div>
                  <h3>Willium Jackson</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet natus consectetur similique saepe! Sapiente saepe voluptatum amet molestiae vel quas?</p>
            </div>
          </li>
         </ul>
      </div>
    </div>
  )
}

export default Testimonials