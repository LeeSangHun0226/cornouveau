import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import image169 from '../images/image169.jpg';

// const PHOTO_SET = [
//   {
//     src: image169,
//     sizes: [
//       '(min-width: 480px) 50vw',
//       '(min-width: 1024px) 33.3vw',
//       '100vw',
//     ],
//     width: 1024,
//     height: 1024,
//     alt: 'image 1',
//   },
//   {
//     src: image169,
//     sizes: [
//       '(min-width: 480px) 70vw',
//       '(min-width: 1024px) 33.3vw',
//       '100vw',
//     ],
//     width: 600,
//     height: 600,
//     alt: 'image 2',
//   },
// ];



class GalleryComponent extends Component {

  state = {
    lightboxIsOpen: true,
  }

  closeLightbox = () => {
    this.setState({
      lightboxIsOpen: false,
    })
  }
  render() {
    return (
      <div style={{ }}>
          <div style={{ float: 'left', width: 'calc(100% / 3 * 2)' }}>
            <Image
              src={image169}
              responsive
              />
          </div>
          <div style={{ float: 'left', width: 'calc(100% / 3)' }}>
            <Image
              src={image169}
              responsive
              />
          </div>
          <div style={{ float: 'left', width: 'calc(100% / 3)' }}>
            <Image
              src={image169}
              responsive
              />
          </div>

        <div style={{ float: 'right', width: 'calc(100% / 3)' }}>
          <Image
            src={image169}
            responsive
            />
        </div>
        <div style={{ float: 'right', width: 'calc(100% / 3)' }}>
          <Image
            src={image169}
            responsive
            />
        </div>
        <div style={{ float: 'right', width: 'calc(100% / 3)'}}>
          <Image
            src={image169}
            responsive
            />
        </div>

        <div style={{ float: 'right', width: 'calc(100% / 3 * 2)' }}>
          <Image
            src={image169}
            responsive
            />
        </div>
        <div style={{ float: 'right', width: 'calc(100% / 3)' }}>
          <Image
            src={image169}
            responsive
            />
        </div>
        <div style={{ float: 'right', width: 'calc(100% / 3)' }}>
          <Image
            src={image169}
            responsive
            />
        </div>
      </div>
  );
  }
};

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