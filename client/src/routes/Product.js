import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import axios from 'axios';
import Payment from '../components/Payment/Payment';
import './Product.css';

class Product extends Component {

  state = {
    data: [],
  }

  componentDidMount() {
    const { productname } = this.props.match.params;
    axios.get(`http://localhost:4000/api/product/${productname}`)
      .then((res) => {
        this.setState({
          data: res.data,
        });
      });
  }

  renderPaymentBox = () => {
    if (this.state.data.length > 0) {
      const { titlePhoto, name } = this.state.data[0];
      return (
        <div className="product-imgBox">
          <Image
            src={`${titlePhoto}`}
            responsive
          />
          <div className="product-text-container">
            <p className="product-text">{name}</p>,
          </div>
        </div>
      );
    }
  }

  renderDetailBox = () => {
    if (this.state.data.length > 0) {
      return this.state.data[0].description.map(product => (
          <div className="product-imgBox">
            <Image
              src={`${product.photo}`}
              responsive
            />
            <div className="product-text-container">
              {
                product.text.split('<br/>').map(text =>
                  <p className="product-text">{text}</p>,
                )
              }
            </div>
          </div>
      ));
    }
    return false;
  }

  render() {
    return (
      <div>
        <Payment history={this.props.history} data={this.state.data} />
        {this.renderPaymentBox()}
        {this.renderDetailBox()}
      </div>
    );
  }
}

export default Product;
