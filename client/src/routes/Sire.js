import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { fetchServerConfig } from '../config';
import './Sire.css';

class Sire extends Component {

  state = {
    data: [],
  }

  componentDidMount() {
    axios.get(`http://${fetchServerConfig.ip}:4000/api/sire`)
      .then((res) => {
        this.setState({
          data: res.data,
        });
      });
  }

  renderSire = () => (
    this.state.data.map(data => (
      <div>
        <Link to={`/ourdog/sire/${data._id}`}>
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
          {this.renderSire()}
        </div>
      </div>
    );
  }
}


export default Sire;
