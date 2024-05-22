import React,{useState} from 'react';
import  './Navbar.css'
import { IoMdHeart } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { PiSmileyMeltingThin } from "react-icons/pi";
import { FaBookOpen } from "react-icons/fa";

const Navbar = () => {
    const [fix,setFix] =useState(false);
    function setFixd(){
        if(window.scrollY >= 10){
          setFix(true)
        }
        else{
          setFix(false)
        }
      }
      window.addEventListener('scroll', setFixd)
  
    return (
        <div>
          <div className="container">
             <header className= {fix ? 'header_link fixed ' : 'header_link'}>
          
                <nav>
                  <Link to={'/'}> <h1>AliExprees</h1></Link>
                    <ul className='Ul_link'>
                         <li>
                           <Link>
                           <FaBookOpen />
                           <span>Каталог</span>
                           </Link>
                        </li> 
                        <div className="sorch">
                           
                            <input type="text"  placeholder='серьги'/>
                            <button>Найти</button>
                        </div>
                        <li>
                            <Link to={'/wishlist'}><IoMdHeart />
                             <span>Избранное</span>
                             </Link>
                            </li>
                        <li>
                            <Link to={'/karzenka'}><FaShoppingCart />
                            <span>Корзинка</span>
                            </Link> 
                        </li>
                       <li>
                        <Link><PiSmileyMeltingThin style={{color:'#FEAF01'}} />
                        <span>Войти</span>
                        </Link>
                    </li>
                    </ul>
                </nav>

             
             </header>
          </div>
          
        </div>
    );
}

export default Navbar;
