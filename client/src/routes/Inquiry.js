import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { fetchServerConfig } from '../config';
import Payment from '../components/Payment/Payment';
import ProductDetail from '../components/Product/ProductDetail';

class Inquiry extends Component {

  state = {
    merchant_uid: '',
    isInquiried: false,
    inquiryData: [],
    paymentSituation: '',
  }

  handleInputChange = (e) => {
    this.setState({
      merchant_uid: e.target.value,
    });
  }

  handleInquiry = () => {
    const { merchant_uid } = this.state;
    axios.get(`http://${fetchServerConfig.ip}:4000/api/payment/${merchant_uid}`)
    .then((res) => {
      console.log(res.data)
      const payment = {
        userName: res.data[0].userName,
        userPhone: res.data[0].userPhone,
        userEmail: res.data[0].userEmail,
        shippingName: res.data[0].shippingName,
        shippingPhone: res.data[0].shippingPhone,
        totalAddress: res.data[0].address,
        paymentMethod: res.data[0].paymentMethod,
        customerMessage: res.data[0].customerMessage,
      };

      const product = {
        productDetail: {
          name: res.data[0].productName,
          titlePhoto: res.data[0].photo,
          price: res.data[0].price,
        },
        productSize: res.data[0].size,
        productQty: res.data[0].qty,
      };

      const paymentSituation = res.data[0].paymentSituation;
      this.setState({
        isInquiried: true,
        payment,
        product,
        paymentSituation,
      })
    } )
  }

  paymentCancle = () => (
    axios.put(`http://${fetchServerConfig.ip}:4000/api/payment/${this.state.merchant_uid}`, {
      paymentSituation: 'paymentCancle',
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
  )

  showTable = () => {
    if (this.state.isInquiried) {
      return (
        <div>
          <ProductDetail product={this.state.product} />
          <Payment payment={this.state.payment} merchant_uid={this.state.merchant_uid} />
          {
            this.state.paymentSituation !== 'paymentComplete'
            ?
              <div style={{ textAlign: 'center' }}>
                <Button style={{ textAlign: 'center' }} onClick={this.paymentCancle}>주문취소</Button>
              </div>
            : false
          }
        </div>
      )
    }
    return false;
  }

  render() {
    return (
      <div style={{ minHeight: '500px', paddingBottom: '50px' }}>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <input type="text" onChange={this.handleInputChange} value={this.state.merchant_uid} />
          <Button onClick={this.handleInquiry} style={{ marginLeft: '20px' }}>
            주문 정보 조회
          </Button>
        </div>
        {this.showTable()}
      </div>
    );
  }
}

export default Inquiry;
