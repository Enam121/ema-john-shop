import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/shop';

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

          <Route path="/review">
            <OrderReview />
          </Route>

        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
