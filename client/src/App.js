import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import rootReducer from './store';
import Home from './routes/Home';
import Campaign from './routes/Campaign';
import GalleryComponent from './routes/Gallery';
import Adoptions from './routes/Adoptions';
import Adoption from './routes/Adoption';
import Products from './routes/Products';
import Product from './routes/Product';
import Payment from './routes/Payment';
import Complete from './routes/Complete';
import Cornouveau from './routes/Cornouveau';
import Sire from './routes/Sire';
import Italian from './routes/Italian';
import Dams from './routes/Dams';
import Dam from './routes/Dam';

import Header from './components/Header';

const store = createStore(rootReducer);

const App = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={Cornouveau} />
              <Route path="/about/cornouveau" component={Cornouveau} />
              <Route path="/about/italian" component={Italian} />

              <Route path="/campaign" component={Campaign} />
              <Route path="/gallery" component={GalleryComponent} />

              <Route exact path="/ourdog" component={Sire} />
              <Route path="/ourdog/sire" component={Sire} />
              <Route path="/ourdog/dam" component={Dams} />
              <Route path="/ourdog/:damName" component={Dam} />

              <Route path="/adoptions" component={Adoptions} />
              <Route path="/adoption/:adoptionName" component={Adoption} />

              <Route path="/products" component={Products} />
              <Route path="/product/:productname" component={Product} />

              <Route exact path="/payment" component={Payment} />
              <Route path="/payment/complete" component={Complete} />
            </Switch>
          </div>
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
