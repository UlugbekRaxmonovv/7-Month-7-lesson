import React, { useState, useEffect } from 'react';
import './Products.css';
import { IoMdHeart } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import axios from '../Api';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../Loading/Loading';
import useCartStore from '../context/bears';
import useStore from '../context/store';

const Products = () => {
    const addToCart = useCartStore(state => state.addToCart);
    const store = useStore( store =>   store.toggleWishlistItem);
    const [products, setProducts] = useState([]);
    console.log(products);
    const [number, setNumber] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`/products?limit=10&skip=${number}`)
            .then(res => {
                setProducts(res.data?.products);
            })
            .finally(() => setLoading(false));
    }, [number]);

    const fetchData = () => {
        setNumber(prevNumber => prevNumber + 1);
        axios.get(`/products?limit=10&skip=${number + 1}`)
            .then(res => {
                setProducts(prevProducts => [...prevProducts, ...res.data?.products]);
            });
    };

    const productItems = products.map((item) => (
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
    ));

    return (
        <>
            <div className='container'>
                {loading ? <Loading /> : null}
                <div className="wrapper">
                    {productItems}
                </div>
                <InfiniteScroll
                    dataLength={products.length}
                    next={fetchData}
                    hasMore={true}
                    loader={<Loading />}
                />
            </div>
        </>
    );
};

export default Products;
