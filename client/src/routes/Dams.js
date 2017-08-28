import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import dam1 from '../images/dam1.jpg';
import ResponsiveFactor from '../ResponsiveFactor';
import './Sire.css';

class Dams extends ResponsiveFactor {

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
    return (
      <div>
        <div style={{ marginTop: '0.5rem' }}>
          <Link
            to="/ourdog/dam1"
            >
            <Image
              src={dam1}
              responsive
            />
          </Link>
        </div>
        <div style={{ textAlign: 'center' }}>
          Millesime de Magistris, 2016
        </div>
        <div>
          <Image
            src={dam1}
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


export default Dams;
