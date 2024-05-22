import React,{useState,useEffect} from 'react';
import './Products.css'
import { IoMdHeart } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import axios from '../Api/index';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../Loading/Loading';

const Products = () => {
    const [products,setProducts] = useState([])
    const [number,setNumber] = useState(0)
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        axios
        .get(`/products?limit=10&skip=${number}`)
        .then(res=>{
            setProducts(res.data?.products)
        })
        .finally(() => setLoading(false))
    },[])


    let productss = products?.map((inx)=>(
        <div className="Products" key={inx.id}>
        <div className="card">
        <div className="card_all">
        <IoMdHeart /> <br />
            </div>
            <div className="card_all">
            <FaShoppingCart />
            </div>
        </div>
        <div className="Products_all">
        <div className="all_img">
            <img src={inx.images[0]} alt="" />
           </div>
           <div className="all_img">
            <img src={inx.images[1]} alt="" />
           </div>
           
        </div>
        <p>Женское Открытое кольцо с фианитом, золотистое/серебристое Ювелирное Украшение</p>
        <div className="star">
        <div className="star_all">
              <FaStar/>
            </div>
            <div className="star_all">
            <p>4,9</p>
            </div>
            <div className="star_all">
            <p>208 купили</p>
            </div>
        </div>
        <h4>12 540.27 UZS</h4>
       </div>
    ))


    const fetchData = () =>{
        setNumber(number + 1)
        axios
        .get(`/products?limit=10&skip=${number}`)
        .then(res=>{
            setProducts(products.concat(res.data?.products))
        })
    }

    return (
      <>
    
        <div className='container'>
         {
            loading ? <Loading/>
            : <></>
         }
        <div className="wrapper"> 
         {productss}
            </div>
            <InfiniteScroll
  dataLength={products.length} //This is important field to render the next data
  next={fetchData}
  hasMore={true}
  loader={<Loading/>}
>
</InfiniteScroll>
        
    
        </div>
      </>
    );
}

export default Products;
