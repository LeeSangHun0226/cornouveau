import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import store from './store';
import Home from './routes/Home';
import Campaign from './routes/Campaign';
import Gallery from './routes/Gallery';
import GalleryDetail from './routes/GalleryDetail';
import Adoptions from './routes/Adoptions';
import Adoption from './routes/Adoption';
import Products from './routes/Products';
import Product from './routes/Product';
import Payment from './routes/Payment';
import Complete from './routes/Complete';
import Cornouveau from './routes/Cornouveau';
import Sire from './routes/Sire';
import SireDetail from './routes/SireDetail';
import Italian from './routes/Italian';
import News from './routes/News';
import Dam from './routes/Dam';
import DamDetail from './routes/DamDetail';
import Competibles from './routes/Competibles';
import Competible from './routes/Competible';

import Header from './components/Header';
import Footer from './components/Footer/Footer';

const App = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router>
        <div style={{ minHeight: '100%', position: 'relative' }}>
          <Header />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />

              <Route exact path="/about" component={Cornouveau} />
              <Route path="/about/cornouveau" component={Cornouveau} />
              <Route path="/about/italian" component={Italian} />
              <Route path="/about/news" component={News} />

              <Route path="/campaign" component={Campaign} />

              <Route exact path="/gallery" component={Gallery} />
              <Route path="/gallery/:galleryname" component={GalleryDetail} />

              <Route exact path="/ourdog/sire" component={Sire} />
              <Route path="/ourdog/sire/:sirename" component={SireDetail} />

              <Route exact path="/ourdog/dam" component={Dam} />
              <Route path="/ourdog/dam/:damname" component={DamDetail} />

              <Route exact path="/adoptions" component={Adoptions} />
              <Route path="/adoption/:adoptionName" component={Adoption} />

              <Route exact path="/products" component={Products} />
              <Route path="/product/:productname" component={Product} />

              <Route exact path="/products/competibles" component={Competibles} />
              <Route path="/products/competible/:competiblename" component={Competible} />

              <Route exact path="/payment" component={Payment} />
              <Route path="/payment/complete" component={Complete} />

            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  </MuiThemeProvider>
);

export default App;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;
