import React, { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import './Product.scss';


const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);


  const images = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto-compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto-compress&cs=tinysrgb&w=1600&lazy=load"
  ];

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={() => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={() => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
  <h1>Title</h1>
  <span className='price'>₹199</span>
        <p>Long-sleeve t-shirts are the ultimate blend of comfort and style, offering versatility for various occasions and seasons. Designed with sleeves that extend fully down to the wrists, they provide extra coverage and warmth compared to short-sleeve counterparts. They're perfect for layering—pair them with jackets, vests, or cardigans during colder months, or wear them solo for a sleek and casual look.</p>
      <div className="quantity">
        <button onClick={() => setQuantity(prev =>prev===1? 1: prev - 1)}>-</button>
        {quantity}
        <button onClick={() => setQuantity(prev => prev + 1)}>+</button>

      </div>
      <button className="add"> 
        <AddShoppingCartIcon/>Add to Cart
      </button>
      <div className="links">
        <div className="item">
          <FavoriteBorderIcon/> Add to Wishlist
        </div>
        <div className="item">
          <BalanceIcon/> Add to Compare
        </div>
      </div>
      <div className="info">
        <span>Vendor: Polo</span>
        <span>Product Type: T-shirt</span>
        <span>Tag: T-shirt, Women, Top</span>
      </div>
      <hr />
      <div className="info">
        <span>Description</span>
        <hr />
        <span>Additional Info</span>
        <hr />
        <span>FAQ</span>
      </div>
      </div>
    </div>
  );
}

export default Product;