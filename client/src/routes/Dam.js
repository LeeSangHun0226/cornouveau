import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchServerConfig } from '../config';

import axios from 'axios';

class Dam extends Component {

  state = {
    data: [],
  }

  componentDidMount() {
    axios.get(`http://${fetchServerConfig.ip}:4000/api/dam`)
      .then((res) => {
        this.setState({
          data: res.data,
        });
      });
  }

  renderDam = () => (
    this.state.data.map(data => (
      <div>
        <Link to={`/ourdog/dam/${data._id}`}>
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
      <div style={{ background: '#E0E0E0', paddingBottom: '50px' }}>
        <div>
          {this.renderDam()}
        </div>
      </div>
    );
  }
}


export default Dam;