import React,{useState} from 'react';
import  './Main.css'
import { MdKeyboardArrowRight } from "react-icons/md";
const Main = () => {


  return (
    <div className='container'>

    
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
