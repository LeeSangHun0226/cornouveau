import React from 'react';
import { Image } from 'react-bootstrap';
import Slider from 'react-slick';

const homeData = [
  {
    image: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/0.main/2017-09-17+/%EB%A1%9C%EC%8A%A4%EC%B2%BC%EC%84%B8%EB%B6%800.jpg',
  },
  {
    image: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/0.main/2017-09-17+/%EB%A1%9D%ED%8E%A0%EC%84%B8%EB%B6%800.jpg',
  },
  {
    image: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/0.main/2017-09-17+/%EB%A3%A8%ED%8C%A1%EC%84%B8%EB%B6%800.jpg',
  },
  {
    image: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/0.main/2017-09-17+/%EB%A6%AC%EB%B6%80%EC%84%B8%EB%B6%800w.jpg',
  },
  {
    image: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/0.main/2017-09-17+/%EB%A6%AC%EC%BD%94%EC%84%B8%EB%B6%800w.jpg',
  },
  {
    image: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/0.main/2017-09-17+/%EC%95%84%EB%A5%B4%EC%84%B8%EB%B6%800w.jpg',
  },
  {
    image: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/0.main/2017-09-17+/%EC%A0%9C%EB%84%A4%EC%8A%A4%EC%84%B8%EB%B6%800w.jpg',
  },
  {
    image: 'https://s3.ap-northeast-2.amazonaws.com/cornouveau/0.main/2017-09-17+/%ED%86%A0%EB%AF%B8%EC%84%B8%EB%B6%800w.jpg',
  },
];

const renderHome = () => (
  homeData.map(data => (
    <div>
      <Image
        src={data.image}
        responsive
        // style={{ width: '90%' }}
      />
    </div>
   ))
);

const Home = () => {
  const settings = {
    // dots: true,
    // lazyLoad: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }],
  };

  return (
    <div style={{ background: '#E0E0E0' }}>
      <Slider {...settings}>
        {renderHome()}
      </Slider>
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
