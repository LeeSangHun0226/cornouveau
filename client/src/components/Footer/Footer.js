import React from 'react';
import { Image } from 'react-bootstrap';
import blogLogo from '../../images/blogger.png';
import facebookLogo from '../../images/facebook.png';
import instagramLogo from '../../images/instagram.png';
import './Footer.css';

const Footer = props => (
  <div className="Footer-wrapper">
    <div className="Footer-text-wrapper-left">
      <p>COMPANY NAME: CorNouveau</p>
      <p>REG NO.: [771 - 72 - 00093]</p>
      <p>NETWORK REG NO. 2017- 경기남양주 - 0000[사업자정보확인]</p>
      <p>T: 010 - 6288 - 9557</p>
      <p>A: 12024 34- 44, Biryong - ro 1742beon- gil, Sudong - myeon, Namyangju - si, Gyeonggi -do, Republic of Korea</p>
    </div>
    <div className="Footer-wrapper-middle">
      <p className="Footer-logo-contact">Contact Us</p>
      <div className="Footer-logo-wrapper">
        <a href="http://blog.naver.com/cornouveau ">
          <Image
            src={blogLogo}
            className="Footer-logo"
          />
        </a>
        <a href="http://www.pictaram.org/cn.designer_choi ">
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
    <div className="Footer-text-wrapper-right">
      <p>CPO: Jang HanSol(info@cornouveau.com)</p>
      <p>국민은행 616301- 04 - 170877 코르누보</p>
      <p>info@cornouveau.com</p>
      <p>mon - fri am11~pm8</p>
    </div>
  </div>
);

export default Footer;
