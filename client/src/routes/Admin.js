import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import axios from 'axios';
import { login } from '../helpers/auth';
import { fetchServerConfig } from '../config';

const setErrorMessage = (err) => {
  return {
    loginError: err,
  }
}

class Admin extends Component {

  state = {
    isAuthentication: false,
    email: '',
    password: '',
    loginError: null,
    paymentId: null,
    paymentData: null,
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  }

  handleAuthentication = (e) => {
    const { email, password } = this.state;
    login(email, password)
      .then(() => {
        axios.get(`http://${fetchServerConfig.ip}:4000/api/payment`)
          .then((paymentData) => {
            this.setState({
              loginError: null,
              isAuthentication: true,
              paymentData: paymentData.data,
            });
          })
          .catch(err => console.log(err));
      })
      .catch((err) => {
        this.setState(
          setErrorMessage('Invalid username/password')
        );
      });
    e.preventDefault();
  }

  handleRowSelect = (row, isSelected, e) => {
    if (isSelected) {
      const paymentId = row.merchant_uid;
      this.setState({
        paymentId,
      });
    }
  }

  changePaymentSituation = (paymentSituation) => {
    const { paymentId } = this.state;
    if (paymentId === null) {
      return alert('주문번호를 클릭해주세요');
    }

    return axios.put(`http://${fetchServerConfig.ip}:4000/api/payment/${paymentId}`, {
      paymentSituation,
    })
    .then((paymentData) => {
      this.setState({
        paymentData: paymentData.data,
      });
    })
    .catch(err => console.log(err));
  }

  showTable = () => {
    const selectRow = {
      mode: 'radio',
      clickToSelect: true,
      clickToExpand: true,
      onSelect: this.handleRowSelect,
    };

    if (this.state.isAuthentication) {
      return (
        <div style={{ margin: '50px' }}>
          <div>
            <ButtonToolbar style={{ margin: '20px' }}>
              <Button bsStyle="warning" onClick={() => this.changePaymentSituation('배송대기중')}>배송 대기중</Button>
              <Button bsStyle="primary" onClick={() => this.changePaymentSituation('배송완료')}>배송 완료</Button>
              <Button bsStyle="danger"onClick={() => this.changePaymentSituation('결제취소')}>결제 취소</Button>
            </ButtonToolbar>
          </div>
          <div>
            <BootstrapTable
              data={this.state.paymentData}
              pagination
              striped
              search
              exportCSV
              selectRow={selectRow}
            >
              <TableHeaderColumn dataField="merchant_uid" isKey >주문번호</TableHeaderColumn>
              <TableHeaderColumn dataField="createdAt" dataSort >주문시각</TableHeaderColumn>
              <TableHeaderColumn dataField="productName" dataSort>상품 이름</TableHeaderColumn>
              <TableHeaderColumn dataField="userName" dataSort>주문자</TableHeaderColumn>
              <TableHeaderColumn dataField="userPhone" dataSort>주문자 연락처</TableHeaderColumn>
              <TableHeaderColumn dataField="userEmail" dataSort>주문자 이메일</TableHeaderColumn>
              <TableHeaderColumn dataField="shippingName" dataSort>받는사람</TableHeaderColumn>
              <TableHeaderColumn dataField="shippingPhone" dataSort>받는사람 연락처</TableHeaderColumn>
              <TableHeaderColumn dataField="address" dataSort>주소</TableHeaderColumn>
              <TableHeaderColumn dataField="totalPrice" dataSort>총금액</TableHeaderColumn>
              <TableHeaderColumn dataField="price" dataSort>가격</TableHeaderColumn>
              <TableHeaderColumn dataField="qty" dataSort>수량</TableHeaderColumn>
              <TableHeaderColumn dataField="size" dataSort>사이즈</TableHeaderColumn>
              <TableHeaderColumn dataField="customerMessage" dataSort>배송 메세지</TableHeaderColumn>
              <TableHeaderColumn dataField="paymentMethod" dataSort>주문방법</TableHeaderColumn>
              <TableHeaderColumn dataField="paymentSituation" dataSort>결제현황</TableHeaderColumn>
            </BootstrapTable>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div style={{ minHeight: '500px', paddingBottom: '50px' }}>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <input type="text" style={{ margin: '20px' }} onChange={this.handleEmailChange} value={this.state.email} placeholder="email" />
          <input type="password" style={{ margin: '20px' }} onChange={this.handlePasswordChange} value={this.state.password} placeholder="password" />
          {
            this.state.loginError
            ?
              <span>
                <p style={{ color: 'red' }}>{this.state.loginError}</p>
              </span>
            :
            false
          }
          <Button onClick={this.handleAuthentication} style={{ marginLeft: '20px' }}>
            로그인
          </Button>
        </div>
        {this.showTable()}
      </div>
    )
  }
}

export default Admin;
