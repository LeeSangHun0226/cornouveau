import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { login } from '../helpers/auth';

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
        this.setState({
          loginError: null,
          isAuthentication: true,
        });
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
      const paymentId = row.id;
      this.setState({
        paymentId,
      })
    }
  }

  showTable = () => {
    const selectRow = {
      mode: 'radio',
      clickToSelect: true,
      clickToExpand: true,
      onSelect: this.handleRowSelect,
    }

    if (this.state.isAuthentication) {
      <BootstrapTable
        data={}
        pagination
        striped
        search
        exportCSV
        selectRow={selectRow}
      >
        <TableHeaderColumn dataField="uid" isKey dataSort>주문번호</TableHeaderColumn>
      </BootstrapTable>
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
