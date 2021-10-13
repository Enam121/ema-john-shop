import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import Login from './components/Login/Login';
import Gif from './components/Place-order-gif/gif';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Resister from './components/Resister/Resister';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/shop';
import ViewOrder from './components/ViewOrder/ViewOrder';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>

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

            <PrivateRoute path="/shipping">
              <Shipping />
            </PrivateRoute>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/resister">
              <Resister />
            </Route>

          </Switch>

        </BrowserRouter>

      </AuthProvider>
    </div>
  );
}

export default App;
