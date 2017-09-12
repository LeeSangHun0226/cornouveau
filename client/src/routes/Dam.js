import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import Modal from 'react-modal';

const DamData = [
  {
    titleImage: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/4.ourdog/2.dam/1%EB%A6%AC%EB%B6%80.jpg',
    subImage: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/4.ourdog/2.dam/%EB%A6%AC%EB%B6%80%EC%84%B8%EB%B6%80.jpg',
  },
  {
    titleImage: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/4.ourdog/2.dam/2%EB%B3%B4%EB%B0%B0.jpg',
    subImage: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/4.ourdog/2.dam/%EB%B3%B4%EB%B0%B0%EC%84%B8%EB%B6%80.jpg',
  },
  {
    titleImage: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/4.ourdog/2.dam/3%EB%A6%AC%EC%BD%94.jpg',
    subImage: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/4.ourdog/2.dam/%EB%A6%AC%EC%BD%94%EC%84%B8%EB%B6%80.jpg',
  },
];

class Dam extends Component {

  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      modalData: null,
    };
  }


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

  renderDam = () => (
    DamData.map(data => (
      <div>
        <Image
          src={data.titleImage}
          responsive
          onClick={() => this.openModal(data.subImage)}
        />
      </div>
    ))
  )

  render() {
    return (
      <div>
        <div>
          {this.renderDam()}
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
              borderWidth: 0,
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


export default Dam;
