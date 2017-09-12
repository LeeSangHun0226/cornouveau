import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import sire1 from '../images/sire1.jpg';
import Modal from 'react-modal';
import ResponsiveFactor from '../ResponsiveFactor';
import './Sire.css';

const sireData = [
  {
    titleImage: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/4.ourdog/1.sire/1%ED%86%A0%EB%AF%B8.jpg',
    subImage: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/4.ourdog/1.sire/%ED%86%A0%EB%AF%B8%EC%84%B8%EB%B6%80.jpg',
  },
  {
    titleImage: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/4.ourdog/1.sire/2%EC%95%84%EB%A5%B4.jpg',
    subImage: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/4.ourdog/1.sire/%EC%95%84%EB%A5%B4%EC%84%B8%EB%B6%80.jpg',
  },
  {
    titleImage: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/4.ourdog/1.sire/3%EB%A1%9C%EC%8A%A4%EC%B2%BC.jpg',
    subImage: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/4.ourdog/1.sire/%EB%A1%9C%EC%8A%A4%EC%B2%BC%EC%84%B8%EB%B6%80.jpg',
  },
  {
    titleImage: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/4.ourdog/1.sire/4%EB%A1%9D%ED%8E%A0.jpg',
    subImage: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/4.ourdog/1.sire/%EB%A1%9D%ED%8E%A0%EC%84%B8%EB%B6%80.jpg',
  },
  {
    titleImage: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/4.ourdog/1.sire/5%EC%A0%9C%EB%84%A4%EC%8A%A4.jpg',
    subImage: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/4.ourdog/1.sire/%EC%A0%9C%EB%84%A4%EC%8A%A4%EC%84%B8%EB%B6%80.jpg',
  },
  {
    titleImage: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/4.ourdog/1.sire/6%EB%A3%A8%ED%8C%A1.jpg',
    subImage: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/4.ourdog/1.sire/6%EB%A3%A8%ED%8C%A1.jpg',
  },
];


class Sire extends Component {

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

  renderSire = () => (
    // const modalBodyName = this.state.width > 8000 ? 'modal-body' : 'modal-body-mobile'
    sireData.map(data => (
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
          {this.renderSire()}
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


export default Sire;
