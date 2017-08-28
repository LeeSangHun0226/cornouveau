import React from 'react';
import { Image } from 'react-bootstrap';
import sire1 from '../images/sire1.jpg';
import ReactModal from 'react-modal';
import ResponsiveFactor from '../ResponsiveFactor';
import './Sire.css';


class Sire extends ResponsiveFactor {

  state = {
    showModal: false,
  }

  openModal = () => {
    this.setState({
      showModal: true,
    });
  }
  closeModal = () => {
    this.setState({
      showModal: false,
    });
  }

  renderSire = () => {
    const modalBodyName = this.state.width > 8000 ? 'modal-body' : 'modal-body-mobile'

      return (
        <div>
          <div style={{ marginTop: '0.5rem' }}>
            <Image
              src={sire1}
              responsive
              onClick={this.openModal}
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            Millesime de Magistris, 2016
          </div>
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="Millesime de Magistris, 2016"
            shouldCloseOnOverlayClick={false}
            className="Modal"
            overlayClassName="Overlay"
          >
            <div className="modal-content">
              <div className="modal-header">
                <button onClick={this.closeModal}>Close</button>
              </div>
              <div className={modalBodyName}>
                <Image
                  className="modal-body-img"
                  src={sire1}
                  responsive
                />
              <div className="modal-body-text">
                  이곳에 글을 쓰면 됩니다.<br/>
                </div>
              </div>
            </div>
          </ReactModal>
          <div>
            <Image
              src={sire1}
              responsive
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            Millesime de Magistris, 2016
          </div>
        </div>
      );
  }

  render() {
    return (
      <div>
        {this.renderSire()}
      </div>
    );
  }
}


export default Sire;
