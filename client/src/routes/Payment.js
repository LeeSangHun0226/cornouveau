import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Modal from 'react-modal';
import DaumPostcode from 'react-daum-postcode';
import axios from 'axios';

const IMP = window.IMP; // 생략가능
IMP.init('imp67149342'); // 'iamport' 대신 부여받은 "가맹점 식별코드"를 사용


class Payment extends Component {

  state = {
    modalIsOpen: false,
    isPaid: false,
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
    console.log(data);
    this.isPhonePaid(data);
  }

  handleAddress = (data) => {
    console.log(data);
    this.props.change('baseAddress', data.address);
    this.props.change('postcode', data.postcode);
    this.setState({
      modalIsOpen: false,
    });
  }

  isCardPaid = () => {
    IMP.request_pay({
      pg: 'html5_inicis', // version 1.1.0부터 지원.
      pay_method: 'card',
      merchant_uid: 'merchant_' + new Date().getTime(),
      name: '테스트',
      amount: 1000,
      buyer_email: this.props.buyerEmail,
      buyer_name: this.props.buyerName,
      buyer_tel: this.props.buyerPhone,
      buyer_addr: this.props.baseAddress + this.props.extraAddress,
      buyer_postcode: this.props.postcode,
      m_redirect_url: 'http://172.16.6.229:3000/gallery'
    }, (rsp) => {
      if (rsp.success) {
        // axios.post('http://localhost:4000/api/product')
        // .then((res) => {
        //   console.log(res, 'res')
        //   this.props.history.push('/gallery')
        // })

        // this.setState({
        //   isPaid: true,
        // });

        // return (
        //   <Gallery />
        // );        
        // console.log(rsp, 'rsp')
        // console.log(this.props)
        // var msg = '결제가 완료되었습니다.';
        // msg += '고유ID : ' + rsp.imp_uid;
        // msg += '상점 거래ID : ' + rsp.merchant_uid;
        // msg += '결제 금액 : ' + rsp.paid_amount;
        // msg += '카드 승인번호 : ' + rsp.apply_num;
      } else {
        // var msg = '결제에 실패하였습니다.';
        // msg += '에러내용 : ' + rsp.error_msg;
        console.log(rsp, 'rsp')
      }
      // alert(msg);
    });
  }

  isPhonePaid = (data) => {
    console.log(data)
    IMP.request_pay({
      pg: 'html5_inicis', // version 1.1.0부터 지원.
      pay_method: 'phone',
      merchant_uid: 'merchant_' + new Date().getTime(),
      name: '주문명:결제테스트',
      amount: 1,
      buyer_email: data.buyerEmail,
      buyer_name: data.buyerName,
      buyer_tel: data.buyerPhone,
      buyer_addr: data.baseAddress + data.extraAddress,
      buyer_postcode: data.postcode,
      m_redirect_url: 'http://172.16.6.229:3000/gallery'
    }, (rsp) => {
      if (rsp.success) {
        // axios.post('http://localhost:4000/api/product')
        // .then((res) => {
        console.log(rsp, 'res')
        this.props.history.push('/gallery')
        // })

        // this.setState({
        //   isPaid: true,
        // });

        // return (
        //   <Gallery />
        // );        
        console.log(rsp, 'rsp')
        console.log(this.props)
        // var msg = '결제가 완료되었습니다.';
        // msg += '고유ID : ' + rsp.imp_uid;
        // msg += '상점 거래ID : ' + rsp.merchant_uid;
        // msg += '결제 금액 : ' + rsp.paid_amount;
        // msg += '카드 승인번호 : ' + rsp.apply_num;
      } else {
        // var msg = '결제에 실패하였습니다.';
        // msg += '에러내용 : ' + rsp.error_msg;
        // console.log(rsp, 'rsp')
      }
      // alert(msg);
    });
  }

  isTransPaid = () => {
    IMP.request_pay({
      pg: 'html5_inicis', // version 1.1.0부터 지원.
      pay_method: 'trans',
      merchant_uid: 'merchant_' + new Date().getTime(),
      name: '주문명:결제테스트',
      amount: 1,
      buyer_email: 'iamport@siot.do',
      buyer_name: '구매자이름',
      buyer_tel: '010-1234-5678',
      buyer_addr: '서울특별시 강남구 삼성동',
      buyer_postcode: '123-456',
      m_redirect_url: 'http://172.16.6.229:3000/gallery'
    }, (rsp) => {
      if (rsp.success) {
        axios.post('http://localhost:4000/api/product')
          .then((res) => {
            console.log(res, 'res')
            this.props.history.push('/gallery')
          })

        // this.setState({
        //   isPaid: true,
        // });

        // return (
        //   <Gallery />
        // );        
        console.log(rsp, 'rsp')
        console.log(this.props)
        // var msg = '결제가 완료되었습니다.';
        // msg += '고유ID : ' + rsp.imp_uid;
        // msg += '상점 거래ID : ' + rsp.merchant_uid;
        // msg += '결제 금액 : ' + rsp.paid_amount;
        // msg += '카드 승인번호 : ' + rsp.apply_num;
      } else {
        // var msg = '결제에 실패하였습니다.';
        // msg += '에러내용 : ' + rsp.error_msg;
        // console.log(rsp, 'rsp')
      }
      // alert(msg);
    });
  }


  renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', border: 'solid', borderWidth: '0.5px' }}>
      <label>
        {label}
      </label>
      <div style={{ width: '70%' }}>
        <input {...input} placeholder={label} type={type} style={{ width: '100%' }} />
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

  render() {
    // console.log(this.props);
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div>
        <div>
          주문자
        </div>
        <form onSubmit={handleSubmit(this.handleSubmit)}>
          <Field style={{ display: 'flex' }}name="buyerName" type="text" component={this.renderField} label="buyerName(주문자 이름)" />
          <Field name="buyerPhone" type="number" component={this.renderField} label="buyerPhone(주문자 번호)" />
          <Field name="buyerEmail" type="email" component={this.renderField} label="buyerEmail(주문자 메일)" />
          <div style={{ marginTop: 20 }}>배송지</div>
          <Field name="nonMemeberCode" type="text" component={this.renderField} label="nonMemeberCode(주문번호)" />
          <Field name="shippingName" type="text" component={this.renderField} label="shippingName(배송지 이름)" />
          <Field name="postcode" type="text" component={this.renderField} label="postcode(우편번호)" />
          <button type="button" onClick={() => this.openModal()}>Zip Code</button>
          <Field name="baseAddress" type="text" component={this.renderField} label="baseAddress(주소)" />
          <Field name="extraAddress" type="text" component={this.renderField} label="extraAddress(상세 주소)" />
          <Field name="shippingPhone" type="number" component={this.renderField} label="shippingPhone" />
          <Field name="customerMessage" type="number" component={this.renderField} label="customerMessage" />
          <div style={{ marginTop: 20 }}>결제방법</div>
          <div>
            <label>
              <Field name="paymentMethod" component="input" type="radio" value="card"/>{' '}카드결제
            </label>
            <label>
              <Field name="paymentMethod" component="input" type="radio" value="phone"/>{' '}모바일결제
            </label>
            <label>
              <Field name="paymentMethod" component="input" type="radio" value="trans" />{' '}계좌이체
            </label>
          </div>
          <div>
            <button type="submit" disabled={submitting}>
              Submit
        </button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>
              Clear Values
        </button>
        <button onClick={() => this.isTransPaid()}>무통장
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
            closeModal
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
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 30) {
    errors.username = 'Must be 15 characters or less';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.age) {
    errors.age = 'Required';
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number';
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old';
  }
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
  form: 'syncValidation',
  validate,
  warn,
})(Payment);
