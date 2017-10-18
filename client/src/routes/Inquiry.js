import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { fetchServerConfig } from '../config';

class Inquiry extends Component {

  state = {
    merchant_uid: '',
  }

  handleInputChange = (e) => {
    this.setState({
      merchant_uid: e.target.value,
    });
  }

  handleInquiry = () => {
    const { merchant_uid } = this.state;
    axios.get(`http://${fetchServerConfig.ip}:4000/api/payment/${merchant_uid}`)
    .then(data => console.log(data))
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleInputChange} value={this.state.merchant_uid} />
        <Button onClick={this.handleInquiry}>
          주문 정보 조회
        </Button>
      </div>
    );
  }
}

export default Inquiry;
