import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { fetchServerConfig } from '../config';
// import './Campaign.css';

class Campaign extends Component {

  state = {
    data: [],
  }

  componentDidMount() {
    axios.get(`http://${fetchServerConfig.ip}:4000/api/campaign`)
      .then((res) => {
        this.setState({
          data: res.data,
        });
      });
  }

  renderCampaign = () => (
    this.state.data.map(data => (
      <div>
        <Link to={`/campaign/${data._id}`}>
          <Image
            src={data.titleImage}
            responsive
          />
        </Link>
      </div>
    ))
  )

  render() {
    return (
      <div style={{ background: '#E0E0E0' }}>
        <div>
          {this.renderCampaign()}
        </div>
      </div>
    );
  }
}


export default Campaign;
