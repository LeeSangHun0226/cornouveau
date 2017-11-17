import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import axios from 'axios';
// import priceImg from '../images/price.jpeg';
import { fetchServerConfig } from '../config';
// import './Product.css';

class CampaignDetail extends Component {

  state = {
    data: [],
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`http://${fetchServerConfig.ip}:4000/api/campaign/${id}`)
      .then((res) => {
        this.setState({
          data: res.data[0].subImage,
        });
      });
  }

  renderCampaignDetail = () => (
    this.state.data.map(data => (
      <div>
        <Image
          src={data}
          responsive
        />
      </div>
      ))
  )

  render() {
    return (
      <div style={{ background: '#E0E0E0' }}>
        {this.renderCampaignDetail()}
      </div>
    );
  }
}

export default CampaignDetail;
