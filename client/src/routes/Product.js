import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import axios from 'axios';
import priceImg from '../images/price.jpeg';
import './Product.css';

class Product extends Component {

  state = {
    productData: [],
    productSize: 'mini',
    productQty: '1',
  }

  componentDidMount() {
    const { productname } = this.props.match.params;
    axios.get(`http://13.124.112.126:4000/api/product/${productname}`)
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

  handleSubmit = (event) => {
    this.props.history.push({
      pathname: '/payment',
      state: {
        productData: this.state.productData,
        productSize: this.state.productSize,
        productQty: this.state.productQty,
      },
    });
    event.preventDefault();
  }


  renderPaymentBox = () => {
    if (this.state.productData.length > 0) {
      const productData = this.state.productData[0];
      return (
        <div className="product-payment-wrapper">
          <h2>
            {productData.name}
          </h2>
          <h3>
            {productData.price}
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
            <Image
              src={priceImg}
              responsive
            />
            <div />
            <input type="submit" value="BUY NOW" />
          </form>
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
      <div style={{ background: 'rgb(230,230,230)' }}>
        {this.renderProductBox()}
        {this.renderPaymentBox()}
        {this.renderDetailBox()}
      </div>
    );
  }
}

export default Product;
