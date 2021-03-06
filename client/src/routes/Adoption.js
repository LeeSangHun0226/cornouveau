import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { fetchServerConfig } from '../config';

class Adoption extends Component {

  state = {
    data: [],
  }

  componentDidMount() {
    axios.get(`http://${fetchServerConfig.ip}:4000/api/adoption`)
      .then((res) => {
        this.setState({
          data: res.data,
        });
      });
  }

  renderAdoption = () => (
    this.state.data.map(data => (
      <div>
        <Link to={`/adoption/${data._id}`}>
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
          {this.renderAdoption()}
        </div>
      </div>
    );
  }
}


export default Adoption;
