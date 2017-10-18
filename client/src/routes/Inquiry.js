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
      this.setState({
        isInquiried: true,
        inquiryData: res.data,
      })
    } )
  }

  showTable = () => {
    if (this.state.isInquiried) {
      console.log(this.state.inquiryData)
      return (
        <div>
          <ProductDetail />
          <Payment />
        </div>
      )
    }
    return false;
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleInputChange} value={this.state.merchant_uid} />
        <Button onClick={this.handleInquiry}>
          주문 정보 조회
        </Button>
        {this.showTable()}
      </div>
    );
  }
}

export default Inquiry;
