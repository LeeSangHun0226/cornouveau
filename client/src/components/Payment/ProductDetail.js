import React from 'react';
import { Thumbnail } from 'react-bootstrap';
import './ProductDetail.css';

const ProductDetail = (props) => {
    const { productData, productSize, productQty } = props.product;
    return (
      <div className="ProductDetail-wrapper">
        <div className="ProductDetail-thumbnail">
          <Thumbnail src={`${productData[0].titlePhoto}`} />
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
            <label> PRICE: {productData[0].price} </label>
          </div>
          <div className="ProductDetail-content-total">
            <label> TOTAL: {productData[0].price * productQty} </label>
          </div>
        </div>
      </div>
    );
};

export default ProductDetail;
