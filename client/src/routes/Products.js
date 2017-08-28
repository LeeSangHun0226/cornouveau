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
    axios.get('http://localhost:4000/api/product')
      .then((res) => { 
        this.setState({
          data: res.data,
        });
      });
  }

  renderBox = () => (
    this.state.data.map(product => (
      <div className="imgBox">
        <Link to={`/product/${product._id}`}>
          <Image
            src={`${product.titlePhoto}`}
            responsive
          />
        </Link>
        <div className="productText">
          {product.name} <br />
          {product.price}
        </div>
      </div>
    ))
  )

  render() {
    return (
      <div>
        {this.renderBox()}
      </div>
    );
  }
}

export default Products;
