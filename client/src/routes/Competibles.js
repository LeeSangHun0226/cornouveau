import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { fetchServerConfig } from '../config';
import './Products.css';
// import Media from 'react-media';

class Competibles extends Component {

//   state = {
//     data: [],
//   }

//   componentDidMount() {
//     axios.get(`http://${fetchServerConfig.ip}:4000/api/competible`)
//       .then((res) => { 
//         this.setState({
//           data: res.data,
//         });
//       });
//   }

//   renderBox = () => (
//     this.state.data.map((product) => {
//       const price = product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
//       return (
//         <div className="col-md-6">
//           <div>
//             <Link to={`/products/competible/${product._id}`}>
//               <Image
//                 src={`${product.titlePhoto}`}
//                 responsive
//               />
//             </Link>
//           </div>
//           <div className="productText">
//             {product.name} <br />
//             KRW {price}
//           </div>
//         </div>
//       )
//     })
//   )

//   render() {
//     return (
//       <div
//         className="row"
//         style={{
//           marginRight: 0,
//         }}
//       >
//         {this.renderBox()}
//       </div>
//     );
//   }
// }
  render() {
    return (
      <div></div>
    )
  }
}

export default Competibles;
