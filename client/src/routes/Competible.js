import React, { Component } from 'react';
import { Image, Button } from 'react-bootstrap';
import axios from 'axios';
import priceImg from '../images/price.jpeg';
import { fetchServerConfig } from '../config';
import './Product.css';

class Competible extends Component {

  state = {
    productData: [],
    productSize: 'mini',
    productQty: '1',
  }

  componentDidMount() {
    const { competiblename } = this.props.match.params;
    axios.get(`http://${fetchServerConfig.ip}:4000/api/competible/${competiblename}`)
      .then((res) => {
        this.setState({
          productData: res.data,
        });
      });
  }

  handleSizeChange = (event) => {
    this.setState({
      productSize: event.target.value,
    });
  }

  handleQtyChange = (event) => {
    this.setState({
      productQty: event.target.value,
    });
  }

  handleSubmit = () => {
    this.props.history.push({
      pathname: '/payment',
      state: {
        productData: this.state.productData,
        productSize: this.state.productSize,
        productQty: this.state.productQty,
      },
    });
    // event.preventDefault();
  }


  renderPaymentBox = () => {
    if (this.state.productData.length > 0) {
      const productData = this.state.productData[0];
      const price = productData.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return (
        <div className="product-payment-wrapper">
          <h2>
            {productData.name}
          </h2>
          <h3>
            KRW {price}
          </h3>
          <form onSubmit={this.handleSubmit}>
            <label>
              SIZE:
              <select value={this.state.productSize} onChange={this.handleSizeChange}>
                <option value="mini">MINI</option>
                <option value="small">SMALL</option>
                <option value="medium">MEDIUM</option>
              </select>
            </label>
            <div />
            <label>
              QTY:
              <select value={this.state.productQty} onChange={this.handleQtyChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </label>
            </form>
            <Image
              src={priceImg}
              responsive
            />
            <div />
            <Button
              style={{
                textAlign: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '30px',
                width: '100px',
              }}
              onClick={() => this.handleSubmit()}
            >
              BUY NOW
            </Button>
        </div>
      );
    }
  }

  renderProductBox = () => {
    if (this.state.productData.length > 0) {
      const { titlePhoto, name } = this.state.productData[0];
      return (
        <div className="product-imgBox">
          <Image
            src={`${titlePhoto}`}
            responsive
          />
        </div>
      );
    }
  }

  renderDetailBox = () => {
    if (this.state.productData.length > 0) {
      return this.state.productData[0].description.map(product => (
          <div className="product-imgBox-detail">
            <Image
              src={`${product.photo}`}
              responsive
            />
            {/*
            <div className="product-text-container">
              {
                product.text.split('<br/>').map(text =>
                  <p className="product-text">{text}</p>,
                )
              }
            </div>
            */}
          </div>
      ));
    }
    return false;
  }

  render() {
    return (
      <div style={{
        paddingBottom: '100px',
        background: 'white',
      }}
      >
        <div style={{ display: 'flex', flex: 1 }}>
          {this.renderProductBox()}
          {this.renderPaymentBox()}
        </div>
        <div>
          <Image
            src={'https://s3.ap-northeast-2.amazonaws.com/cornouveau/6.product/AS%EC%9D%B4%EB%AF%B8%EC%A7%80(%EB%AA%A8%EB%93%A0%EC%83%81%ED%92%88).jpg'}
            responsive
          />
        </div>
        {this.renderDetailBox()}
      </div>
    );
  }
}

export default Competible;
