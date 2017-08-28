import React from 'react';
import './Payment.css';

const Payment = (props) => {
  if (props.data.length > 0) {
    const data = props.data[0];
    return (
      <div className="product-payment-wrapper">
        <h2>
          {data.name}
        </h2>
        <h3>
          {data.price}
        </h3>
        <div>
        <label>SIZE</label>
          <div>
            
          </div>
        <label>QTY</label>
          <div>
            
          </div>
        </div>

        <button
          onClick={() =>
            props.history.push('/payment')
          }
        >
          Buy Now
        </button>
      </div>
    );
  }
  return false;
};

export default Payment;
