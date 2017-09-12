import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Products.css';
// import Media from 'react-media';

class Products extends Component {

  state = {
    data: [],
  }

  componentDidMount() {
    axios.get('http://13.124.112.126:4000/api/product')
      .then((res) => { 
        this.setState({
          data: res.data,
        });
      });
  }

  renderBox = () => (
    this.state.data.map(product => (
      <div className="col-md-6">
        <div>
          <Link to={`/product/${product._id}`}>
            <Image
              src={`${product.titlePhoto}`}
              responsive
            />
          </Link>
        </div>
        <div className="productText">
          {product.name} <br />
          {product.price}
        </div>
      </div>
    ))
  )

  render() {
    return (
      <div className="row">
        {this.renderBox()}
      </div>
    );
  }
}

export default Products;
