import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import Gif from './components/Place-order-gif/gif';
import Shop from './components/Shop/shop';
import ViewOrder from './components/ViewOrder/ViewOrder';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Header />

        <Switch>

          <Route exact path="/">
            <Shop />
          </Route>

          <Route path="/shop">
            <Shop />
          </Route>

          <Route path="/view-order">
            <ViewOrder />
          </Route>

          <Route path="/gif">
            <Gif />
          </Route>

        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
