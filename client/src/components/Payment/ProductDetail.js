import React from 'react';
import { Image } from 'react-bootstrap';
import './ProductDetail.css';

const ProductDetail = (props) => {
  const { productData, productSize, productQty } = props.product;
  const price = productData[0].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const totalPriceNumber = productData[0].price * productQty;
  const totalPrice = totalPriceNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <div className="ProductDetail-wrapper">
      <div className="ProductDetail-thumbnail">
        <Image
          src={`${productData[0].titlePhoto}`}
          responsive
        />
      </div>
      <div className="ProductDetail-content-wrapper">
        <div className="ProductDetail-content-name">
          <label> NAME: {productData[0].name} </label>
        </div>
        <div className="ProductDetail-content-size">
          <label> SIZE: {productSize} </label>
        </div>
        <div className="ProductDetail-content-qty">
          <label> QTY: {productQty} </label>
        </div>
        <div className="ProductDetail-content-price">
          <label> PRICE: KRW {price} </label>
        </div>
        <div className="ProductDetail-content-total">
          <label> TOTAL: KRW {totalPrice} </label>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
