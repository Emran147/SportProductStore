import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import Cart from './Cart';
import Home from './Home';
import Login from './Login';
import Machines from './Machines';
import Outdoor from './Outdoor';
import Running from './Running';
import Elepticals from './Elepticals';
import SchoolEquipment from './SchoolEquipment';
import Signup from './Signup';
import Treademils from './Treademils';
import { IsoOutlined } from '@material-ui/icons';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    }
  }

  addItemToCart = async (obj) => {
    //adding item to cart 
    //اضافه غرض 
    var cart = [...this.state.cart, obj]; //add to last
    //var cart = [obj,...this.state.cart]; //add to first
    this.setState({ cart })
    var ActiveUser = JSON.parse(sessionStorage.getItem('activeuser'));
    if (ActiveUser == null) {
      window.location.replace("/");
    }
    else {
      localStorage.setItem(ActiveUser.Username + "Cart", JSON.stringify(cart));
    }

  }
  ClearCart = () => {
    this.setState({ cart: [] });
  }
  UpdateCart = (cart) => {
    this.setState({ cart }); 
  }

  componentWillMount() {

    //get's user cart 
    //    اخذ الاغراض من storage

    var ActiveUser = JSON.parse(sessionStorage.getItem('activeuser'));
    if (ActiveUser != null) {
      var cart = JSON.parse(localStorage.getItem(ActiveUser.Username + "Cart"));
      if (cart == null)
        this.setState({ cart: [] })
      else
        this.setState({ cart });
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/Home">
            <Home cart={this.state.cart} />
          </Route>
          <Route path="/seq">
            <SchoolEquipment cart={this.state.cart} addItemToCart={this.addItemToCart} />
          </Route>
          <Route path="/cart">
            <Cart cart={this.state.cart} ClearCart={this.ClearCart} UpdateCart={this.UpdateCart} />
          </Route>
          <Route path="/elepticals">
            <Elepticals cart={this.state.cart} addItemToCart={this.addItemToCart} />
          </Route>
          <Route path="/Outdoor">
            <Outdoor cart={this.state.cart} addItemToCart={this.addItemToCart} />
          </Route>
          <Route path="/machines">
            <Machines cart={this.state.cart} addItemToCart={this.addItemToCart} />
          </Route>
          <Route path="/running">
            <Running cart={this.state.cart} addItemToCart={this.addItemToCart} />
          </Route>
          <Route path="/Treademils">
            <Treademils cart={this.state.cart} addItemToCart={this.addItemToCart}  />
          </Route>
        </Switch>
      </Router>
    )
  }
}
export default Main
