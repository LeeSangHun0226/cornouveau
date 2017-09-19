import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import axios from 'axios';

class GalleryDetail extends Component {

  state = {
    data: [],
  }

  componentDidMount() {
    const { galleryname } = this.props.match.params;
    axios.get(`http://13.124.112.126:4000/api/gallery/${galleryname}`)
      .then((res) => {
        console.log(res)
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
    console.log('??')
    return (
      <div>
        {this.renderGalleryDetail()}
      </div>
    );
  }
}

export default GalleryDetail;
