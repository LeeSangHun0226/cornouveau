import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Modal from 'react-modal';
import DaumPostcode from 'react-daum-postcode';
import axios from 'axios';
import ProductDetail from '../components/Payment/ProductDetail';
import './Payment.css';

const IMP = window.IMP; // 생략가능
IMP.init('imp18720821'); // 'iamport' 대신 부여받은 "가맹점 식별코드"를 사용

class Payment extends Component {

  state = {
    modalIsOpen: false,
    isPaid: false,
    productData: '',
  }

  componentDidMount() {
    this.setState({
      productData: this.props.location.state,
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

  isPaid = (data) => {
    console.log(data);
    // axios.post('http://13.124.112.126:4000/api/payment', data)
    //   .then((res) => {
    //     console.log(res);
    //   });
    IMP.request_pay({
      pg: 'nice', // version 1.1.0부터 지원.
      pay_method: `${data.paymentMethod}`,
      merchant_uid: 'merchant_' + new Date().getTime(),
      name: `${this.props.location.state.productData[0].name}`,
      amount: 1000,
      buyer_name: data.userName,
      buyer_tel: data.userPhone,
      buyer_email: data.userEmail,
      buyer_addr: data.baseAddress + data.extraAddress,
      buyer_postcode: data.postcode,
      m_redirect_url: 'http://172.16.6.229:3000/gallery'
    }, (rsp) => {
      if (rsp.success) {
        var msg = '결제가 완료되었습니다.';
        msg += '고유ID : ' + rsp.imp_uid;
        msg += '상점 거래ID : ' + rsp.merchant_uid;
        msg += '결제 금액 : ' + rsp.paid_amount;
        msg += '카드 승인번호 : ' + rsp.apply_num;
        // axios.post('http://localhost:4000/api/payment')
        // .then((res) => {
          this.props.history.push({
            pathname: '/payment/complete',
            state: {
              productData: this.state.productData,
              paymentData: data,
            },
          });
      } else {
        // var msg = '결제에 실패하였습니다.';
        // msg += '에러내용 : ' + rsp.error_msg;
        console.log(rsp, 'rsp')
      }
      alert(msg);
    });
  }

  renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className="Payment-renderField-wrapper">
      <div className="Payment-renderField-label-wrapper">
        <label className="Payment-renderField-label">
        {label}
        </label>
      </div>
      <div className="Payment-renderField-input">
        <input {...input} placeholder={label} type={type} style={{ width: '100%', height: '100%', outline: 'none' }} />
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
      </div>
    </div>
  )

  renderPostcode = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className="Payment-renderField-wrapper">
      <div className="Payment-renderField-label-wrapper">
        <label className="Payment-renderField-label">
          {label}
        </label>
      </div>
      <div className="Payment-renderField-input-postcode">
        <input {...input} placeholder={label} type={type} style={{ borderWidth: '1px', borderStyle: 'solid', width: '50%', height: '100%', outline: 'none' }} />
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
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div style={{ paddingBottom: '100px' }}>
        <ProductDetail
          product={this.state.productData === '' ? this.props.location.state : this.state.productData}
        />
        <div className="Payment-info">
          주문자 정보
        </div>
        <form onSubmit={handleSubmit(this.handleSubmit)}>
          <Field name="userName" type="text" component={this.renderField} label="주문자(name)" />
          <Field name="userPhone" type="text" component={this.renderField} label="연락처(phone no.)" />
          <Field name="userEmail" type="email" component={this.renderField} label="이메일(e-mail)" />
          <div className="Payment-info">
          배송지 정보
          </div>
          <Field name="nonMemeberCode" type="text" component={this.renderField} label="주문번호(order no.)" />
          <Field name="shippingName" type="text" component={this.renderField} label="배송자 이름(addressee)" />
          <Field name="postcode" type="text" component={this.renderPostcode} label="배송지(address)" />
          <Field name="baseAddress" type="text" component={this.renderField} />
          <Field name="extraAddress" type="text" component={this.renderField} />
          <Field name="shippingPhone" type="text" component={this.renderField} label="배송자 번호(address no.)" />
          <Field name="customerMessage" type="text" component={this.renderField} label="배송 메시지(order message)" />
          <div className="Payment-info">
          결제방법
          </div>
          <div style={{ marginLeft: '20px' }}>
            <label>
              <Field name="paymentMethod" component="input" type="radio" value="card" />{' '}카드
            </label>
            <label>
              <Field name="paymentMethod" component="input" type="radio" value="phone"/>{' '}모바일결제
            </label>
            <label>
              <Field name="paymentMethod" component="input" type="radio" value="trans" />{' '}계좌이체
            </label>
          </div>
          <div style={{ marginLeft: '20px' }}>
            <button type="submit" disabled={submitting}>
              제출
            </button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>
              삭제
            </button>
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
  // if (!values.userPhone) {
  //   errors.userPhone = 'Required';
  // } else if (!/^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/i.test(values.userPhone)) {
  //   errors.userPhone = 'Invalid phone address';
  // }
  // if (!values.userEmail) {
  //   errors.userEmail = 'Required';
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.userEmail)) {
  //   errors.userEmail = 'Invalid email address';
  // }
  // if (!values.nonMemeberCode) {
  //   errors.nonMemeberCode = 'Required';
  // } else if (!/^[a-z0-9_]{4,15}$/i.test(values.nonMemeberCode)) {
  //   errors.nonMemeberCode = 'Invalid nonMemberCode';
  // }
  // if (!values.shippingName) {
  //   errors.shippingName = 'Required';
  // }
  // if (!values.baseAddress) {
  //   errors.baseAddress = 'Required';
  // }
  // if (!values.shippingPhone) {
  //   errors.shippingPhone = 'Required';
  // } else if (!/^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/i.test(values.shippingPhone)) {
  //   errors.shippingPhone = 'Invalid phone address';
  // }
  // if (!values.paymentMethod) {
  //   errors.paymentMethod = 'Required';
  // }
  return errors;
};

const warn = (values) => {
  const warnings = {};
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...';
  }
  return warnings;
};


export default reduxForm({
  form: 'payment',
  validate,
  warn,
})(Payment);
