import React from 'react';
import { Image } from 'react-bootstrap';
import './Payment.css';

const Payment = (props) => {
  console.log(props)
  const { totalAddress, userName, userPhone, userEmail, shippingName, shippingPhone, baseAddress, extraAddress, paymentMethod, customerMessage } = props.payment;
  const { merchant_uid } = props;
  const orderMessage = customerMessage ? customerMessage : '배송 메세지가 없습니다';
  const validateAddress = extraAddress ? baseAddress + extraAddress : baseAddress;
  const address = totalAddress ? totalAddress : validateAddress;
  const method = paymentMethod === 'card' ? '카드' : '무통장';
  return (
    <div className="Payment-wrapper">
      <div className="Payment-content-wrapper">
        <p className="Payment-content-size">
          <h3>*주문조회시 반드시 필요합니다*</h3>
          <p>주문번호(merchant_uid) : {merchant_uid}</p>
        </p>
        <p className="Payment-content-size">
          <p>주문자(name) : {userName}</p>
        </p>
        <p className="Payment-content-qty">
          <p>연락처(phone no.) : {userPhone}</p>
        </p>
        <p className="Payment-content-price">
          <p>이메일(e-mail) : {userEmail}</p>
        </p>
        <p className="Payment-content-price">
          <p>받는 분(addressee) : {shippingName}</p>
        </p>
        <p className="Payment-content-price">
          <p>배송지(address) : {address}</p>
        </p>
        <p className="Payment-content-price">
          <p>받는 분 번호(addressee no.) : {shippingPhone}</p>
        </p>
        <p className="Payment-content-price">
          <p>배송 메시지(order message) : {orderMessage}</p>
        </p>
        <p className="Payment-content-price">
          <p>결제방법(payment method) : {method}</p>
        </p>
      </div>
      <div style={{ paddingBottom: '10px' }} />
    </div>
  );
};

export default Payment;
