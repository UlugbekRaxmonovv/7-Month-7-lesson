import React,{useState} from 'react';
import  './Main.css'
import { FaGripfire } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";
const Main = () => {
  const [count,setCount] = useState(false)


  return (
    <div className='container'>

    <div className="hammasi">
    <div className="navbar_top">
      <div className="navbar_top_link">
          <span>Горящие товары</span>
          <FaGripfire />
        </div>
        <div className="navbar_top_link">
          <span>Одна цена</span>
        </div>
      <div className="nav_link">
    
      </div>
      </div>
      <div className="location">
       
      <div className={`iframe ${count ? "show" : ""}`}>
     
      <button onClick={() => setCount(!count)} > <VscChromeClose /></button>
          <iframe 
            className='w-[600px] maps_logo ml-3 loa'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.817362823962!2d69.22519327636788!3d41.20395520735261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae61002c970f39%3A0x9b6f92597f056858!2sSog&#39;lom%20Hayot!5e0!3m2!1suz!2s!4v1714398990201!5m2!1suz!2s"
            height="400"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
      <div className="locat">
      <MdOutlineLocationOn onClick={()=>setCount(!count)}  />
      <span>Chilonzor Tumani</span>
      </div>
      <div className="locat">
      <span>RU</span>
      </div>
      <div className="locat">
      <span>UZS</span>
      </div>
      </div>
    </div>
    <div className="main">
    <div className="main_row">
       <h1>Oдна цена</h1>
       <p>При заказе от 3 до 10 товаров</p>  
    <div className="btn2">
    <div className="btn">
     <button>Купить
      </button>
      </div>
      <div className="btn">
      <MdKeyboardArrowRight />
      </div>
    </div>


      
      </div>
    <div className="main_row">
      <img src="https://ae01.alicdn.com/kf/Saaaa022e60694a368ec748dadcfdd0a6k/1790x572.png" alt="" />
      
      </div>
  
    </div>
    </div>
  );
}

export default Main;
