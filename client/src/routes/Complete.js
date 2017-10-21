import React, { Component } from 'react';
import axios from 'axios';
import ProductDetail from '../components/Product/ProductDetail';
import Payment from '../components/Payment/Payment';
import { fetchServerConfig } from '../config';

class Complete extends Component {

  state = {
    paymentData: '',
    productData: '',
    merchant_uid: null,
  }

  componentDidMount() {
    const paymentData = JSON.parse(localStorage.getItem('paymentData'));
    const productData = JSON.parse(localStorage.getItem('productDetail'));
    const merchant_uid = JSON.parse(localStorage.getItem('merchant_uid'));
    this.setState({
      paymentData,
      productData,
      merchant_uid,
    })
  }

  render() {
    const { paymentData, productData, merchant_uid } = this.state;
    const productDetail = localStorage.getItem('productDetail');
    const paymentDetail = localStorage.getItem('paymentData');
    const merchantDetail = localStorage.getItem('merchant_uid');
    return (
      <div>
        <p className="Payment-info">
          주문 정보
        </p>
        <ProductDetail product={productData === '' ? JSON.parse(productDetail) : productData} />
        <p className="Payment-info">
          결제 정보
        </p>
        <Payment
          payment={paymentData === '' ? JSON.parse(paymentDetail) : paymentData}
          merchant_uid={merchant_uid === null ? JSON.parse(merchantDetail) : merchant_uid}
          type="complete"
        />
        <p className="Payment-info">
          결제 내역
        </p>
        <div style={{ paddingTop: '30px', paddingBottom: '30px' }}>
          <h3 style={{ textAlign: 'center' }}>
            {
              JSON.parse(paymentDetail).paymentMethod === 'vbank' ? '계좌번호 : 국민은행 616301-04-170877 코르누보' : ''
            }
          </h3>
          <h2 style={{ textAlign: 'center' }}>
            주문이 완료되었습니다.
          </h2>
        </div>
      </div>
    );
  }
}

export default Complete;
