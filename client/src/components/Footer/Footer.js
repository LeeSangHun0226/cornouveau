import React from 'react';
import { Image } from 'react-bootstrap';
import blogLogo from '../../images/blogger.png';
import facebookLogo from '../../images/facebook.png';
import instagramLogo from '../../images/instagram.png';
import './Footer.css';

const Footer = props => (
  <div className="row" style={{ background: '#E0E0E0', color: 'black', marginRight: 0, paddingTop: '50px' }}>
    <div className="col-md-6" style={{ marginTop: '5%' }}>
      <div className="Footer-logo-wrapper" >
        <p className="Footer-logo-text">Contact Us</p>
        <a href="http://blog.naver.com/cornouveau ">
          <Image
            src={blogLogo}
            className="Footer-logo"
          />
        </a>
        <a href="http://www.facebook.com/cornouveau ">
          <Image
            src={facebookLogo}
            className="Footer-logo"
          />
        </a>
        <a href="http://www.pictaram.org/cn.designer_choi ">
          <Image
            src={instagramLogo}
            className="Footer-logo"
          />
        </a>
      </div>
    </div>
    <section className="col-md-6" style={{ textAlign: 'left', fontSize: '10px' }}>
      <div className="last">
        <p>COMPANY NAME: CorNouveau</p>
        <p>REG NO.: [771 - 72 - 00093]</p>
        <p>NETWORK REG NO. 2017- 경기남양주 - 0000[사업자정보확인]</p>
        <p>T: 031-594-5992</p>
        <p>Phone: 010 - 6288 - 9557</p>
        <p>A: 12024 34- 44, Biryong - ro 1742beon- gil, Sudong - myeon, Namyangju - si, Gyeonggi -do, Republic of Korea</p>
        <p>CPO: Jang HanSol(info@cornouveau.com)</p>
        <p>국민은행 616301- 04 - 170877 코르누보</p>
        <p>info@cornouveau.com</p>
        <p>mon - fri am11~pm8</p>
      </div>
    </section>
  </div>
);

export default Footer;
