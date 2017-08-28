import React from 'react';
import cornouveau from '../images/cornouveau.jpg';
import { Image } from 'react-bootstrap';

const Cornouveau = () => {
  return (
    <div>
      <Image
        src={cornouveau}
        responsive
      />
    </div>
  );
};

export default Cornouveau;
