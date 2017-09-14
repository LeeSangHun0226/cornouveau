import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import Modal from 'react-modal';

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
    modalIsOpen: false,
    modalData: null,
  };

  openModal = (subImage) => {
    this.setState({
      modalIsOpen: true,
      modalData: subImage,
    });
  }
  closeModal = () => {
    this.setState({
      modalIsOpen: false,
    });
  }

  render() {
    return (
      <div>
      <div style={{ }}>
          <div style={{ float: 'left', width: 'calc(100% / 3 * 2)' }}>
            <Image
              src='https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/1.jpg'
              responsive
              onClick={() => this.openModal('https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/1.jpg')}
              />
          </div>
          <div style={{ float: 'left', width: 'calc(100% / 3)' }}>
            <Image
              src='https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/2.jpg'
              responsive
              onClick={() => this.openModal('https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/2.jpg')}
              />
          </div>
          <div style={{ float: 'left', width: 'calc(100% / 3)' }}>
            <Image
              src='https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/3.jpg'
              responsive
              onClick={() => this.openModal('https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/3.jpg')}
              />
          </div>

        <div style={{ float: 'right', width: 'calc(100% / 3)' }}>
          <Image
            src='https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/4.jpg'
            responsive
            onClick={() => this.openModal('https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/4.jpg')}
            />
        </div>
        <div style={{ float: 'right', width: 'calc(100% / 3)' }}>
          <Image
            src='https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/5.jpg'
            responsive
            onClick={() => this.openModal('https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/5.jpg')}
            />
        </div>
        <div style={{ float: 'right', width: 'calc(100% / 3)'}}>
          <Image
            src='https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/6.jpg'
            responsive
            onClick={() => this.openModal('https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/6.jpg')}
            />
        </div>

        <div style={{ float: 'right', width: 'calc(100% / 3 * 2)' }}>
          <Image
            src='https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/7.jpg'
            responsive
            onClick={() => this.openModal('https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/7.jpg')}
            />
        </div>
        <div style={{ float: 'right', width: 'calc(100% / 3)' }}>
          <Image
            src='https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/8.jpg'
            responsive
            onClick={() => this.openModal('https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/8.jpg')}
            />
        </div>
        <div style={{ float: 'right', width: 'calc(100% / 3)' }}>
          <Image
            src='https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/9.jpg'
            responsive
            onClick={() => this.openModal('https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/9.jpg')}
            />
        </div>
        <div style={{ float: 'left', width: 'calc(100% / 3 * 2)' }}>
          <Image
            src='https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/10.jpg'
            responsive
            onClick={() => this.openModal('https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/10.jpg')}
          />
        </div>
        <div style={{ float: 'left', width: 'calc(100% / 3)' }}>
          <Image
            src='https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/11.jpg'
            responsive
            onClick={() => this.openModal('https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/11.jpg')}
          />
        </div>
        <div style={{ float: 'left', width: 'calc(100% / 3)' }}>
          <Image
            src='https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/12.jpg'
            responsive
            onClick={() => this.openModal('https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/12.jpg')}
          />
        </div>

        <div style={{ float: 'right', width: 'calc(100% / 3)' }}>
          <Image
            src='https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/13.jpg'
            responsive
            onClick={() => this.openModal('https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/13.jpg')}
          />
        </div>
        <div style={{ float: 'right', width: 'calc(100% / 3)' }}>
          <Image
            src='https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/14.jpg'
            responsive
            onClick={() => this.openModal('https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/14.jpg')}
          />
        </div>
        <div style={{ float: 'right', width: 'calc(100% / 3)' }}>
          <Image
            src='https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/15.jpg'
            responsive
            onClick={() => this.openModal('https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/15.jpg')}
          />
        </div>

        <div style={{ float: 'right', width: 'calc(100% / 3 * 2)' }}>
          <Image
            src='https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/16.jpg'
            responsive
            onClick={() => this.openModal('https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/16.jpg')}
          />
        </div>
        <div style={{ float: 'right', width: 'calc(100% / 3)' }}>
          <Image
            src='https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/17.jpg'
            responsive
            onClick={() => this.openModal('https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/17.jpg')}
          />
        </div>
        <div style={{ float: 'right', width: 'calc(100% / 3)' }}>
          <Image
            src='https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/18.jpg'
            responsive
            onClick={() => this.openModal('https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/18.jpg')}
          />
        </div>
        <div style={{ float: 'left', width: 'calc(100% / 3 * 2)' }}>
          <Image
            src='https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/19.jpg'
            responsive
            onClick={() => this.openModal('https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/19.jpg')}
          />
        </div>
        <div style={{ float: 'left', width: 'calc(100% / 3)' }}>
          <Image
            src='https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/20.jpg'
            responsive
            onClick={() => this.openModal('https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/20.jpg')}
          />
        </div>
        <div style={{ float: 'left', width: 'calc(100% / 3)' }}>
          <Image
            src='https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/21.jpg'
            responsive
            onClick={() => this.openModal('https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/21.jpg')}
          />
        </div>

        <div style={{ float: 'right', width: 'calc(100% / 3)' }}>
          <Image
            src='https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/22.jpg'
            responsive
            onClick={() => this.openModal('https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/22.jpg')}
          />
        </div>
        <div style={{ float: 'right', width: 'calc(100% / 3)' }}>
          <Image
            src='https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/23.jpg'
            responsive
            onClick={() => this.openModal('https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/23.jpg')}
          />
        </div>
        <div style={{ float: 'right', width: 'calc(100% / 3)' }}>
          <Image
            src='https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/24.jpg'
            responsive
            onClick={() => this.openModal('https://s3.ap-northeast-2.amazonaws.com/cornouveau/3.gallery/24.jpg')}
          />
        </div>
      </div>
      <Modal
        isOpen={this.state.modalIsOpen}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            width: '100%',
            height: '100%',
            marginRight: '-50%',
            borderWidth: 0,
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'black',
          },
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'black',
          },
        }}
      >
        <button onClick={() => this.closeModal()}>
          closed
          </button>
        <Image
          src={this.state.modalData}
          responsive
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