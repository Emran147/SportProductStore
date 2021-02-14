import React, { Component } from 'react'
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import SportsMmaSharpIcon from '@material-ui/icons/SportsMmaSharp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import PaymentIcon from '@material-ui/icons/Payment';
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    }
  }
  componentDidMount() {

    var activeuser = JSON.parse(sessionStorage.getItem("activeuser"))
    if (activeuser == null)
      this.props.history.push({
        pathname: "/"
      });
    else {
      var cart = JSON.parse(localStorage.getItem(activeuser.Username + "Cart"));
      if (cart == null)
        this.setState({ cart: [] })
      else this.setState({ cart });
    }
  }
  Buy = async () => {

    var r = window.confirm("Do You Want To Buy?")
    if (r) {
      window.open("https://www.paypal.com/");
    
      var ActiveUser = JSON.parse(sessionStorage.getItem("activeuser"));
      localStorage.removeItem(ActiveUser.Username + "Cart");
      await this.props.ClearCart();
      this.props.history.push({
        pathname: "/home"
      });
    }
    else {

    }
  }

  delete = async (index) => {

    var cart = this.state.cart
    cart.splice(index, 1); 
    
    this.setState({ cart });
   
    var ActiveUser = JSON.parse(sessionStorage.getItem("activeuser"));
    await this.props.UpdateCart(cart);

    if (ActiveUser == null || ActiveUser == undefined)
      this.props.history.push({
        pathname: "/"
      });
    else {
      localStorage.setItem(ActiveUser.Username + "Cart", JSON.stringify(cart));
    }

  }

  render() {
    return (

      <div >
        {
          this.state.cart.map((item, index) => {
            return (
              <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', width: '100%', borderColor: 'blue', borderWidth: 1 }}>
                <li style={{ borderColor: 'red', borderWidth: 1, float: 'left', flexDirection: 'row', justifyContent: 'space-between' }}>

                  {item.item}
                   &nbsp;  ${item.price}
                  <Button
                    variant="text"
                    startIcon={<DeleteIcon />}
                    size="small"
                    onClick={() => {
                      this.delete(index);
                    }}
                    style={{ marginLeft: 15, backgroundColor: 'white', alignItems: 'flex-start' }}
                  >
                  </Button>
                </li>
              </div>
            )

          })
        }
        {this.state.cart.length > 0 && this.state.cart != null ?
          <p style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>SUM IS : {this.state.cart.map(o => o.price).reduce((a, c) => { return a + c })}</p> : <p></p>
        }
        <div style={{ marginLeft: 15, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', display: "flex" }}>
          {this.state.cart.length > 0 && this.state.cart != null ?
            <Button
              variant="outlined"
              color="primary"
              startIcon={<PaymentIcon />}
              size="large"
              onClick={() => {
                this.Buy();
              }}

            >
              Buy
          </Button> :
            <Button
              variant="outlined"
              color="primary"
              startIcon={<PaymentIcon />}
              size="large"
              onClick={() => {
                this.props.history.push({
                  pathname: "/home"
                })
              }}

            >
              Buy Some items
</Button>

          }
        </div>
      </div>

    )
  }
}
export default withRouter(Cart)