import React from 'react';
import adoption1_1 from '../images/adoption1_1.jpg'
import adoption1_2 from '../images/adoption1_2.jpg'
import adoption1_3 from '../images/adoption1_3.jpg'
import adoption1_4 from '../images/adoption1_4.jpg'
import { Image } from 'react-bootstrap';

const Adoption = () => {

  return (
    <div>
      <div style={{ marginTop: '3rem', width: '50%', alignSelf: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
        <Image
          style={{}}
          responsive
          src={adoption1_1}
          />
        <div style={{ marginTop: '3rem', paddingBottom: '10rem'}}>
          이곳에 설명을 쓰시면 됩니다.
        </div>
      </div>
      <div style={{ marginTop: '3rem', width: '60%', alignSelf: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
        <Image
          style={{}}
          responsive
          src={adoption1_2}
          />
        <div style={{ marginTop: '3rem', paddingBottom: '10rem'}}>
          이곳에 설명을 쓰시면 됩니다.
        </div>
      </div>
      <div style={{ marginTop: '3rem', width: '70%', alignSelf: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
        <Image
          style={{}}
          responsive
          src={adoption1_3}
          />
        <div style={{ marginTop: '3rem', paddingBottom: '10rem'}}>
          이곳에 설명을 쓰시면 됩니다.
        </div>
      </div>
      <div style={{ marginTop: '3rem', width: '80%', alignSelf: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
        <Image
          style={{}}
          responsive
          src={adoption1_4}
          />
        <div style={{ marginTop: '3rem', paddingBottom: '10rem'}}>
          이곳에 설명을 쓰시면 됩니다.
        </div>
      </div>
    </div>
  )
}

export default Adoption;
