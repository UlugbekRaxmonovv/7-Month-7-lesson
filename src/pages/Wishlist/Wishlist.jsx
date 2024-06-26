import React from 'react';
import useStore from '../../components/context/store';
import { IoMdHeart } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import './Wishlist.css'

const Wishlist = () => {
  const { bears} = useStore();

  return (
    <div style={{marginTop:'10%'}} className='container'>
      {bears.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <ul className='Ul_link_alt'>
          {
            bears?.map((item) => (
              <div className="Products" key={item.id}>
                  <div className="card">
                      <div className="card_all">
                          <IoMdHeart onClick={() => store(item)}  /> <br />
                      </div>
                      <div className="card_all">
                          <FaShoppingCart onClick={() => addToCart(item)} />
                      </div>
                  </div>
                  <div className="Products_all">
                      <div className="all_img">
                          <img src={item.images[0]} alt="" />
                      </div>
                      <div className="all_img">
                          <img src={item.images[1]} alt="" />
                      </div>
                  </div>
                  <p>Женское Открытое кольцо с фианитом, золотистое/серебристое Ювелирное Украшение</p>
                  <div className="star">
                      <div className="star_all">
                          <FaStar />
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
          }
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
