import React from 'react';
import dam1 from '../images/dam1.jpg';
import { Image } from 'react-bootstrap';

const Dam = () => {

  return (
    <div>
      <div style={{ marginTop: '3rem', width: '50%', alignSelf: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
        <Image
          style={{}}
          responsive
          src={dam1}
          />
        <div style={{ marginTop: '3rem', paddingBottom: '10rem'}}>
          이곳에 설명을 쓰시면 됩니다.
        </div>
      </div>
      <div style={{ marginTop: '3rem', width: '50%', alignSelf: 'center', marginLeft: '3rem', marginRight: 'auto'}}>
        <Image
          style={{ float: 'left'}}
          responsive
          src={dam1}
          />
      </div>
      <div style={{ float: 'left', marginTop: '3rem', marginLeft: '3rem', paddingBottom: '10rem'}}>
        이곳에 쓰는 방법도 있습니다.
      </div>
    </div>
  )
}

export default Dam;
