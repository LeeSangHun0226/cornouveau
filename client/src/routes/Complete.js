import React, { Component } from 'react';
import ProductDetail from '../components/Product/ProductDetail';
import Payment from '../components/Payment/Payment';

class Complete extends Component {

  state = {
    paymentData: '',
    productData: '',
  }

  componentDidMount() {
    const paymentData = JSON.parse(localStorage.getItem('paymentData'));
    const productData = JSON.parse(localStorage.getItem('productDetail'));
    this.setState({
      paymentData,
      productData,
    })
  }

  render() {
    const { paymentData, productData } = this.state;
    const productDetail = localStorage.getItem('productDetail');
    const paymentDetail = localStorage.getItem('paymentData');
    return (
      <div>
        <p className="Payment-info">
          주문 정보
        </p>
        <ProductDetail product={productData === '' ? JSON.parse(productDetail) : productData} />
        <p className="Payment-info">
          결제 정보
        </p>
        <Payment payment={paymentData === '' ? JSON.parse(paymentDetail) : paymentData} />
        <p className="Payment-info">
          결제 내역
        </p>
        <div style={{ paddingTop: '30px', paddingBottom: '30px' }}>
          <h2 style={{ textAlign: 'center' }}>
            결제가 완료되었습니다.
          </h2>
        </div>
      </div>
    );
  }
}

export default Complete;
