import React from 'react';
import { Image } from 'react-bootstrap';
import home from '../images/home.jpg';

const homeData = [
  {
    image: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/0.main/1.jpg',
  },
  {
    image: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/0.main/2.jpg',
  },
  {
    image: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/0.main/3.jpg',
  },
  {
    image: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/0.main/4.jpg',
  },
  {
    image: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/0.main/5.jpg',
  },
  {
    image: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/0.main/6.jpg',
  },
];

const renderHome = () => (
  homeData.map(data => (
    <div>
      <Image
        src={data.image}
        responsive
      />
    </div>
   ))
);

const Home = () => {
  return (
    <div>
      {renderHome()}
    </div>
  );
};

export default Home;

// import { Config, CognitoIdentityCredentials } from 'aws-sdk';
// import {
//   CognitoUserPool,
//   CognitoUserAttribute,
// } from 'amazon-cognito-identity-js';
// import React from 'react';
// import appConfig from '../config';

// Config.region = appConfig.region;
// Config.credentials = new CognitoIdentityCredentials({
//   IdentityPoolId: appConfig.IdentityPoolId,
// });

// const userPool = new CognitoUserPool({
//   UserPoolId: appConfig.UserPoolId,
//   ClientId: appConfig.ClientId,
// });

// class Home extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//       name: '',
//     };
//   }

//   handleEmailChange(e) {
//     this.setState({ email: e.target.value });
//   }

//   handlePasswordChange(e) {
//     this.setState({ password: e.target.value });
//   }

//   handleNameChange(e) {
//     this.setState({ name: e.target.value });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const email = this.state.email.trim();
//     const password = this.state.password.trim();
//     const name = this.state.name.trim();
//     const attributeList = [
//       new CognitoUserAttribute({
//         Name: 'name',
//         Value: name,
//       }),
//     ];
//     userPool.signUp(email, password, attributeList, null, (err, result) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       console.log('user name is ' + result.user.getUsername());
//       console.log('call result: ' + JSON.stringify(result));
//     });
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit.bind(this)}>
//         <input type="text"
//           value={this.state.email}
//           placeholder="Email"
//           onChange={this.handleEmailChange.bind(this)} />
//         <input type="password"
//           value={this.state.password}
//           placeholder="Password"
//           onChange={this.handlePasswordChange.bind(this)} />
//         <input type="name"
//           value={this.state.name}
//           placeholder="Name"
//           onChange={this.handleNameChange.bind(this)} />
//         <input type="submit" />
//       </form>
//     );
//   }
// }

// export default Home;
