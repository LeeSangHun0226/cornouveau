import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import axios from 'axios';
import { fetchServerConfig } from '../config';

class GalleryDetail extends Component {

  state = {
    data: [],
  }

  componentDidMount() {
    const { galleryname } = this.props.match.params;
    axios.get(`http://${fetchServerConfig.ip}:4000/api/gallery/${galleryname}`)
      .then((res) => {
        this.setState({
          data: res.data,
        });
      });
  }

  renderGalleryDetail = () => (
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
      <div>
        {this.renderGalleryDetail()}
      </div>
    );
  }
}

export default GalleryDetail;
