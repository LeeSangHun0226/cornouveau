import React from 'react';
import { Image } from 'react-bootstrap';
import './ProductDetail.css';

const ProductDetail = (props) => {
  const { productDetail, productData, productSize, productQty } = props.product;
  const data = productDetail ? productDetail : productData[0];
  const price = data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const totalPriceNumber = data.price * productQty;
  const totalPrice = totalPriceNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <div className="ProductDetail-wrapper">
      <div className="ProductDetail-content-wrapper">
        <h3 className="ProductDetail-content-name">
          <label>{data.name} </label>
        </h3>
        <div className="ProductDetail-thumbnail">
          <Image
            src={`${data.titlePhoto}`}
            style={{ width: '100px', marginBottom: '10px' }}
          />
          <p className="ProductDetail-content-size">
            <p>Size : {productSize}</p>
          </p>
          <p className="ProductDetail-content-qty">
            <p>Qty : {productQty}</p>
          </p>
          <p className="ProductDetail-content-price">
            <p>Price : {price} ₩ </p>
          </p>
          <p className="ProductDetail-content-total">
            <p>Total : {totalPrice} ₩ </p>
          </p>
        </div>
        <div style={{ paddingBottom: '10px' }}>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
