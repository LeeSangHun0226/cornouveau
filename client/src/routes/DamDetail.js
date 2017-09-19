import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import axios from 'axios';

class DamDetail extends Component {

  state = {
    data: [],
  }

  componentDidMount() {
    const { damname } = this.props.match.params;
    axios.get(`http://13.124.112.126:4000/api/dam/${damname}`)
      .then((res) => {
        this.setState({
          data: res.data,
        });
      });
  }

  renderDamDetail = () => (
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
        {this.renderDamDetail()}
      </div>
    );
  }
}

export default DamDetail;
