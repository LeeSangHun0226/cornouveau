import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
// import { DotLoader } from 'react-spinners';
import axios from 'axios';
import Modal from 'react-modal';
import closedImage from '../images/close.png';
import { fetchServerConfig } from '../config';
import './Gallery.css'

class GalleryComponent extends Component {

  state = {
    data: [],
    loading: true,
    modalData: [],
    isModalOpen: false,
  };

  isModalOpen = () => {
    this.setState({
      isModalOpen: true,
    });
  }

  isModalClose = () => {
    this.setState({
      isModalOpen: false,
    });
  }


  componentDidMount() {
    axios.get(`http://${fetchServerConfig.ip}:4000/api/gallery`)
      .then((res) => {
        console.log(res);
        this.setState({
          data: res.data,
          loading: false,
        });
      });
  }

  renderGallery = () => (
    this.state.data.map((data, i) => {
      const className = `Gallery-${data.name}`;
      return (
        <div
          className={className}
          key={i}
        >
          <Image
            src={data.titleImage}
            onClick={() => {
              this.setState({
                modalData: data.titleImage,
                isModalOpen: true,
              });
            }}
            responsive
          />
        </div>
      );
    })
  )

  render() {
    return (
      <div style={{ display: 'flow-root', background: '#E0E0E0' }}>
        <div>
          {this.renderGallery()}
        </div>
        <Modal
          isOpen={this.state.isModalOpen}
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            },
            content: {
              position: 'absolute',
              top: '5px',
              left: '5px',
              right: '5px',
              bottom: '5px',
              border: '1px solid #ccc',
              background: 'rgba(0,0,0,0,5)',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px'
            }
          }}
        >
          <div>
            <Image
              src={closedImage}
              style={{
                width: '20px',
                height: '20px',
                marginLeft: '20px',
              }}
              onClick={() => {
                this.setState({
                  isModalOpen: false,
                })
              }}
            />
          </div>
          <Image
            src={this.state.modalData}
            style={{
              width: '85%',
              marginLeft: '7%',
              // marginRight: '10%',
            }}
          />
        </Modal>
      </div>
    );
  }
}

export default GalleryComponent;


// <div style={{}}>
//   <div style={{ margin: '0.5%', marginBottom: 0, float: 'left', width: '65.5%' }}>
//     <Image
//       src={image169}
//       responsive
//     />
//   </div>
//   <div style={{ margin: '0.5%', float: 'left', width: '32.5%', flexDirection: 'row' }}>
//     <Image
//       src={image169}
//       responsive
//     />
//   </div>
//   <div style={{ margin: '0.5%', marginTop: '0', float: 'left', width: '32.5%' }}>
//     <Image
//       src={image169}
//       responsive
//     />
//   </div>

//   <div style={{ margin: '0.5%', float: 'right', width: '32.5%' }}>
//     <Image
//       src={image169}
//       responsive
//     />
//   </div>
//   <div style={{ margin: '0.5%', float: 'right', width: '32.5%' }}>
//     <Image
//       src={image169}
//       responsive
//     />
//   </div>
//   <div style={{ margin: '0.5%', float: 'right', width: '32%' }}>
//     <Image
//       src={image169}
//       responsive
//     />
//   </div>

//   <div style={{ margin: '0.5%', float: 'right', width: '65.5%' }}>
//     <Image
//       src={image169}
//       responsive
//     />
//   </div>
//   <div style={{ margin: '0.5%', float: 'right', width: '32%' }}>
//     <Image
//       src={image169}
//       responsive
//     />
//   </div>
//   <div style={{ margin: '0.5%', float: 'right', width: '32%' }}>
//     <Image
//       src={image169}
//       responsive
//     />
//   </div>
// </div>