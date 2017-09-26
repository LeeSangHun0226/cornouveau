import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import axios from 'axios';
import { fetchServerConfig } from '../config';

class DamDetail extends Component {

  state = {
    data: [],
  }

  componentDidMount() {
    const { damname } = this.props.match.params;
    axios.get(`http://${fetchServerConfig.ip}:4000/api/dam/${damname}`)
      .then((res) => {
        console.log(res)
        this.setState({
          data: res.data[0].subImage,
        });
      });
  }

  renderDamDetail = () => (
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
        {this.renderDamDetail()}
      </div>
    );
  }
}

export default DamDetail;
