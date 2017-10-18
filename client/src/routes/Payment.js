import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';
import DaumPostcode from 'react-daum-postcode';
import axios from 'axios';

import { fetchServerConfig } from '../config';
import ProductDetail from '../components/Product/ProductDetail';
import './Payment.css';

const IMP = window.IMP; // 생략가능
IMP.init('imp18720821'); // 'iamport' 대신 부여받은 "가맹점 식별코드"를 사용

class Payment extends Component {

  state = {
    modalIsOpen: false,
    isPaid: false,
    productData: '',
    error: null,
    paymentMethod: 'card',
  }

  componentDidMount() {
    const productDetail = localStorage.getItem('productDetail');
    this.setState({
      productData: JSON.parse(productDetail),
    });
  }

  openModal = () => {
    this.setState({
      modalIsOpen: true,
    });
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
    });
  }

  handleSubmit = (data) => {
    this.isPaid(data);
  }

  handleAddress = (data) => {
    console.log(data);
    this.props.change('baseAddress', data.address);
    this.props.change('postcode', data.postcode);
    this.setState({
      modalIsOpen: false,
    });
  }

  isPaid = (paymentData) => {
    const { productData } = this.state;
    const totalPrice = productData.productData[0].price * Number(productData.productQty);
    localStorage.setItem('paymentData', JSON.stringify(paymentData));
    if (paymentData.paymentMethod === 'vbank') {
      alert('무통장 입금을 하시겠습니까?');
      const merchant_uid = new Date().getTime();
      const product = {
        productName: productData.productData[0].name,
        price: productData.productData[0].price,
        qty: Number(productData.productQty),
        size: productData.productSize,
        paymentSituation: '입금대기중',
        merchant_uid,
        photo: productData.productData[0].titlePhoto,
      };
      localStorage.setItem('merchant_uid', JSON.stringify(merchant_uid));
      axios({
        method: 'post',
        url: `http://${fetchServerConfig.ip}:4000/api/payment`,
        data: {
          paymentData,
          product,
        },
      })
        .then(data => console.log(data))
        .catch(err => console.log(err));

      this.props.history.push({
        pathname: '/payment/complete',
        state: {
          productData,
          paymentData,
        },
      });
      return false;
    }
    IMP.request_pay({
      pg: 'nice', // version 1.1.0부터 지원.
      pay_method: paymentData.paymentMethod,
      // pay_method: 'phone',
      merchant_uid: new Date().getTime(),
      name: `${productData.productData[0].name}, ${productData.productQty}개, ${productData.productSize}`,
      amount: totalPrice,
      // amount: 1000,
      buyer_name: paymentData.userName,
      buyer_tel: paymentData.userPhone,
      buyer_email: paymentData.userEmail,
      buyer_addr: paymentData.baseAddress + paymentData.extraAddress,
      buyer_postcode: paymentData.postcode,
      m_redirect_url: 'http://cornouveau.com/gallery',
    }, (rsp) => {
      if (rsp.success) {
        let msg = '결제가 완료되었습니다.';
        msg += `고유ID :  + ${rsp.imp_uid}`;
        msg += `상점 거래ID :  + ${rsp.merchant_uid}`;
        msg += `결제 금액 :  + ${rsp.paid_amount}`;
        msg += `카드 승인번호 :  + ${rsp.apply_num}`;
        // axios.post('http://localhost:4000/api/payment')
        // .then((res) => {
        alert(msg);
        localStorage.setItem('merchant_uid', JSON.stringify(rsp.merchant_uid));
        const product = {
          productName: rsp.name,
          price: productData.productData[0].price,
          qty: Number(productData.productQty),
          size: productData.productSize,
          paymentSituation: 'deliveryWaitig',
          merchant_uid: rsp.merchant_uid,
          photo: productData.productData[0].titlePhoto,
        };
        axios({
          method: 'post',
          url: `http://${fetchServerConfig.ip}:4000/api/payment`,
          data: {
            paymentData,
            product,
          },
        })
        .then(data => console.log(data))
        .catch(err => console.log(err))


        this.props.history.push({
          pathname: '/payment/complete',
          state: {
            productData,
            paymentData,
          },
        });
      } else {
        // var msg = '결제에 실패하였습니다.';
        // msg += '에러내용 : ' + rsp.error_msg;
        console.log(rsp, 'rsp');
        alert(rsp.error_msg);
      }
    });
  }

  renderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
    <div className={error !== undefined ? "Payment-renderField-error-wrapper" : "Payment-renderField-wrapper"}>
      <div className="Payment-renderField-label-wrapper">
        <label className="Payment-renderField-label">
        {label}
        </label>
      </div>
      <div className="Payment-renderField-input">
        <input {...input} placeholder={label} type={type} style={{ width: '100%', height: '100%', outline: 'none' }} />
        {touched &&
          (
            (error &&
            <span style={{ color: 'red', fontSize: '20px' }}>
              {error}
            </span>)         
          )
        }
      </div>
    </div>
  )}

  renderPostcode = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className="Payment-renderField-wrapper">
      <div className="Payment-renderField-label-wrapper">
        <label className="Payment-renderField-label">
          {label}
        </label>
      </div>
      <div className="Payment-renderField-input-postcode">
        <input {...input} placeholder={label} type={type} style={{}} />
        {touched &&
          ((error &&
            <span>
              {error}
            </span>) ||
            (warning &&
              <span>
                {warning}
              </span>)
          )
        }
        <button className="Payment-renderField-button-postcode" type="button" onClick={() => this.openModal()}>우편번호</button>
      </div>
    </div>
  )

  render() {
    console.log(this.props);
    const { handleSubmit, submitting } = this.props;
    const productDetail = localStorage.getItem('productDetail');
    return (
      <div style={{}}>
        <form onSubmit={handleSubmit(this.handleSubmit)}>
          <p className="Payment-info">
            주문 정보
          </p>
          <ProductDetail
            product={this.state.productData === '' ? JSON.parse(productDetail) : this.state.productData}
          />
          <p className="Payment-info">
            주문자 정보
          </p>
          <Field name="userName" type="text" component={this.renderField} label="주문자(name)" />
          <Field name="userPhone" type="text" component={this.renderField} label="연락처(phone no.)" />
          <Field name="userEmail" type="email" component={this.renderField} label="이메일(e-mail)" />
          <p className="Payment-info">
          배송지 정보
          </p>
          {/*
            <Field name="nonMemeberCode" type="text" component={this.renderField} label="주문번호(order no.)" />
          */}
          <Field name="shippingName" type="text" component={this.renderField} label="받는 분(addressee)" />
          <Field name="postcode" type="text" component={this.renderPostcode} label="배송지(address)" />
          <Field name="baseAddress" type="text" component={this.renderField} />
          <Field name="extraAddress" type="text" component={this.renderField} />
          <Field name="shippingPhone" type="text" component={this.renderField} label="받는 분 번호(addressee no.)" />
          <Field name="customerMessage" type="text" component={this.renderField} label="배송 메시지(order message)" />
          <div className="Payment-info">
          결제방법
          </div>
          <div className="Payment-renderField-wrapper">
            <div className="Payment-renderField-label-wrapper" style={{ display: 'block' }}>
            <label className="Payment-renderField-label" style={{ fontSize: '12px', marginBottom: '15px', marginTop: '15px' }}>
              <Field name="paymentMethod" component="input" type="radio" value="card" />{' '}신용카드
            </label>
            <label className="Payment-renderField-label" style={{ fontSize: '12px', marginBottom: '15px' }}>
             <Field name="paymentMethod" component="input" type="radio" value="trans" />{' '}계좌이체
            </label>
            <label className="Payment-renderField-label" style={{ fontSize: '12px', paddingBottom: '15px' }}>
              <Field name="paymentMethod" component="input" type="radio" value="vbank" />{' '}무통장 입금
            </label>
            </div>
          </div>
          <div className="Payment-renderField-label-wrapper" style={{ marginTop: '80px', paddingBottom: '27px' }}>
            <Button
              type="submit"
              disabled={submitting}
              style={{ width: '100px' }}
            >
              결제
            </Button>
          </div>
          <div style={{ paddingBottom: '25px', background: '#E0E0E0' }}>
          </div>
        </form>
        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel="Address"
          style={{
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              width: '90%',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
            },
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            },
          }}
        >
          <button onClick={() => this.closeModal()}>
            closed
          </button>
          <DaumPostcode
            onComplete={this.handleAddress}
          />
        </Modal>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.userName) {
    errors.userName = 'Required';
  }
  if (!values.userPhone) {
    errors.userPhone = 'Required';
  } else if (!/^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/i.test(values.userPhone)) {
    errors.userPhone = 'Invalid phone address';
  }
  if (!values.userEmail) {
    errors.userEmail = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.userEmail)) {
    errors.userEmail = 'Invalid email address';
  }
  if (!values.nonMemeberCode) {
    errors.nonMemeberCode = 'Required';
  } else if (!/^[a-z0-9_]{4,15}$/i.test(values.nonMemeberCode)) {
    errors.nonMemeberCode = 'Invalid nonMemberCode';
  }
  if (!values.shippingName) {
    errors.shippingName = 'Required';
  }
  if (!values.baseAddress) {
    errors.baseAddress = 'Required';
  }
  if (!values.shippingPhone) {
    errors.shippingPhone = 'Required';
  } else if (!/^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/i.test(values.shippingPhone)) {
    errors.shippingPhone = 'Invalid phone address';
  }
  if (!values.paymentMethod) {
    errors.paymentMethod = 'Required';
  }
  return errors;
};

const warn = (values) => {
  const warnings = {};
  if (values.age < 10) {
    warnings.age = '??';
  }
  return warnings;
};

const mapStateToProps = state => ({
  productDetail: state.productReducer.productDetail,
});


Payment = connect(
  mapStateToProps,
)(Payment);


export default reduxForm({
  form: 'payment',
  validate,
  warn,
  mapStateToProps,
})(Payment);
