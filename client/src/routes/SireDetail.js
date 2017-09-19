import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import axios from 'axios';
import priceImg from '../images/price.jpeg';
// import './Product.css';

class SireDetail extends Component {

  state = {
    data: [],
  }

  componentDidMount() {
    const { sirename } = this.props.match.params;
    axios.get(`http://13.124.112.126:4000/api/sire/${sirename}`)
      .then((res) => {
        console.log(res);
        this.setState({
          data: res.data,
        });
      });
  }

  renderSireDetail = () => (
    this.state.data.map(data => (
      <div>
        <Image
          src={data.subImage}
          responsive
        />
      </div>
    ))
  )

  render() {
    return (
      <div style={{ background: '#E0E0E0', paddingBottom: '50px' }}>
        {this.renderSireDetail()}
      </div>
    );
  }
}

export default SireDetail;
